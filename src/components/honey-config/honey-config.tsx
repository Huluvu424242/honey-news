import {Component, getAssetPath, h, State} from '@stencil/core';
import {ReplaySubject} from "rxjs";
import {fromFetch} from "rxjs/fetch";

@Component({
  tag: 'honey-config',
  assetsDirs: ['assets']
})
export class HoneyConfig {

  data$: ReplaySubject<any> = new ReplaySubject<[any]>(1);

  @State() configuration;

  setConfiguratin(data:[{}]){
    this.configuration=data[0]["HELLO_MESSAGE"];
  }

  componentWillLoad() {
    this.data$.subscribe({
        next: (data) => this.setConfiguratin(data)
      }
    );

    const configPath: string = getAssetPath('./assets/config.json');
    console.log('### configPath ###', configPath);

    const data$ = fromFetch(configPath, {
      selector: response => response.json()
    });
    data$.subscribe({
      next: result => {
        console.log(result);
        this.data$.next(result);
      },
      complete: () => console.log('done')
    });

    // this.loadDataPerFetch(configPath);


  }
  //
  // async loadDataPerFetch(configPath: string) {
  //   try {
  //     const response: Response = await fetch(configPath, {headers: {'Accept': 'application/json; charset=utf-8'}});
  //     const daten = await response.json();
  //     this.data$.next(daten);
  //   } catch (error) {
  //     console.log('###ERROR###', error);
  //   }
  // }


  render() {

    return <span>{this.configuration}</span>
  }
}
