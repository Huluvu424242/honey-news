import {Component, getAssetPath, h, Method, Prop, State} from '@stencil/core';
import {firstValueFrom, ReplaySubject, Subscription} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {logService} from "../../shared/log-service";
import {map} from "rxjs/operators";

export type Configuration = { [key: string]: any };

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

  @Method()
  async subscribeForConfig$(): Promise<Subscription> {
    return this.config$.subscribe();
  }

  @Method()
  async getConfigValue<T>(key: string): Promise<T> {
    return firstValueFrom(this.config$.pipe(map((config: Configuration) => config[key])));
  }

  render() {
    logService.debugMessage('render text: ', this.text);
    return this.configKey ? <span>{this.text}</span> : ''
  }
}
