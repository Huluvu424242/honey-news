import {Component, getAssetPath, h, Prop, State} from '@stencil/core';
import {ReplaySubject, Subscription} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {logService} from "../../shared/log-service";

export type Configuration = { [key: string]: string };

@Component({
  tag: 'honey-config',
  assetsDirs: ['assets']
})
export class HoneyConfig {

  @Prop() configKey: string;

  config$: ReplaySubject<Configuration> = new ReplaySubject<Configuration>(1);

  dataSubscription: Subscription;

  @State() text: string = undefined;


  setNewText(data: { [key: string]: string }) {
    this.text = null;
    this.text = data[this.configKey];
  }

  connectedCallback() {
    this.dataSubscription = this.config$.subscribe({
      next: (data: Configuration) => this.setNewText(data)
    });
  }

  disconnectedCallback() {
    this.dataSubscription.unsubscribe();
  }

  componentWillLoad() {
    const configPath: string = getAssetPath('./assets/config.json');
    logService.logMessage('### configPath ###', configPath);

    const data$ = fromFetch(configPath, {
      selector: response => response.json()
    });
    data$.subscribe({
      next: result => {
        logService.logMessage(result);
        this.config$.next(result);
      },
      complete: () => console.log('done')
    });

  }

  render() {
    logService.logMessage('####DATA', this.text);
    return this.configKey ? <span>{this.text}</span> : ''
  }
}
