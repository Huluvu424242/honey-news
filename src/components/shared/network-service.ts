import axios, {AxiosResponse} from "axios";
import {Endpunkt} from "./endpunkt";

export interface BackendResponse {
  fetchResponse: Response;
  axiosResponse: AxiosResponse;

  getStatus(): number;

  getStatusText(): string;

  getData<T>(): Promise<T>;
}


export class BackendResponseImpl implements BackendResponse {
  fetchResponse: Response;
  axiosResponse: AxiosResponse;

  constructor(fetchResponse: Response, axiosResponse: AxiosResponse) {
    this.fetchResponse = fetchResponse;
    this.axiosResponse = axiosResponse;
  }

  getStatus(): number {
    if (this.fetchResponse) {
      return this.fetchResponse.status;
    } else {
      return this.axiosResponse.status;
    }
  }

  getStatusText(): string {
    if (this.fetchResponse) {
      return this.fetchResponse.statusText;
    } else {
      return this.axiosResponse.statusText;
    }
  }

  async getData<T>(): Promise<T> {
    if (this.fetchResponse) {
      return (await this.fetchResponse.json()) as T;
    } else {
      return (await this.axiosResponse.data) as T;
    }
  }
}


export class NetworkService {


  protected fetchDataAxiosAPI(queryUrl: string): Promise<AxiosResponse> {
    return axios.get<AxiosResponse>(queryUrl, {
      headers: {
        "Accept": "application/json, application/rss+xml, application/rss+xml; charset=UTF-8, application/xml, application/xhtml+xml, text/xtml"
      }
    });
  }


  protected fetchDataFetchAPI(endpunkt: Endpunkt): Promise<Response> {
    return fetch(endpunkt.toUrl(), {
      method: endpunkt.getMethodAsString(), // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    });
  }

  public async fetchData(endpunkt: Endpunkt): Promise<BackendResponse> {
    // Workaround for  pact-js framework with fetch API: fetch is not defined
    const isWorkaroundActive = true;
    let fetchResponse: Response;
    let axiosResponse: AxiosResponse;
    if (isWorkaroundActive) {
      axiosResponse = await this.fetchDataAxiosAPI(endpunkt.toUrl());
    } else {
      fetchResponse = await this.fetchDataFetchAPI(endpunkt);
    }
    return new BackendResponseImpl(fetchResponse, axiosResponse);

  }

}

export const networkService: NetworkService = new NetworkService();
