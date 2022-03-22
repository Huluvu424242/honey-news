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

  connectedCallback() {
    this.dataSubscription = this.config$.subscribe({
      next: (data: Configuration) => this.text = data[this.configKey]
    });
  }

  disconnectedCallback() {
    this.dataSubscription.unsubscribe();
  }

  componentWillLoad() {
    const configPath: string = getAssetPath('./assets/config.json');
    logService.debugMessage('configPath', configPath);

    fromFetch(configPath, {
      selector: response => response.json()
    }).subscribe({
      next: result => {
        logService.debugMessage('result: ', result);
        this.config$.next(result);
      },
      complete: () => console.log('fetch done')
    });
  }

  render() {
    logService.debugMessage('render text: ', this.text);
    return this.configKey ? <span>{this.text}</span> : ''
  }
}
