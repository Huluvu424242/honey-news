import {Component, getAssetPath, h, Prop, State} from '@stencil/core';
import {Subscription} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {logService} from "../../shared/log-service";
import {configService, Configuration} from "./config-service";

@Component({
  tag: 'honey-config',
  assetsDirs: ['assets']
})
export class HoneyConfig {

  @Prop() configKey: string;

  dataSubscription: Subscription;

  @State() text: string = undefined;

  connectedCallback() {
    this.dataSubscription = configService.subscribeConfigUpdates({
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
        configService.updateConfiguration(result);
      },
      complete: () => console.log('fetch done')
    });
  }

  render() {
    logService.debugMessage('render text: ', this.text);
    return this.configKey ? <span>{this.text}</span> : ''
  }
}
