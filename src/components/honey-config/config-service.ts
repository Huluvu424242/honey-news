import {ReplaySubject, Subscription} from "rxjs";

export type Configuration = { [key: string]: any };

class ConfigService {

  config$: ReplaySubject<Configuration> = new ReplaySubject<Configuration>(1);

  public updateConfiguration(configuration: Configuration): void {
    this.config$.next(configuration);
  }

  public subscribeConfigUpdates(observer): Subscription {
    return this.config$.subscribe(observer);
  }

}

export const configService: ConfigService = new ConfigService();
