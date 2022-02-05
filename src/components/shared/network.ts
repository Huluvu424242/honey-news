import axios, {AxiosResponse} from "axios";
import {BackendResponse} from "./fetcher";


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

  async getData(): Promise<any> {
    if (this.fetchResponse) {
      return await this.fetchResponse.json();
    } else {
      return await this.axiosResponse.data;
    }
  }
}


export class Network {


  protected fetchDataAxiosAPI(queryUrl: string): Promise<AxiosResponse> {
    return axios.get<AxiosResponse>(queryUrl, {
      headers: {
        "Accept": "application/json, application/rss+xml, application/rss+xml; charset=UTF-8, application/xml, application/xhtml+xml, text/xtml"
      }
    });
  }


  protected fetchDataFetchAPI(queryUrl: string): Promise<Response> {
    return fetch(queryUrl, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    });
  }

  public async fetchData(queryUrl: string): Promise<BackendResponse> {
    // Workaround for  pact-js framework with fetch API: fetch is not defined
    const isWorkaroundActive = true;
    let fetchResponse: Response;
    let axiosResponse: AxiosResponse;
    if (isWorkaroundActive) {
      axiosResponse = await this.fetchDataAxiosAPI(queryUrl);
    } else {
      fetchResponse = await this.fetchDataFetchAPI(queryUrl);
    }
    return new BackendResponseImpl(fetchResponse, axiosResponse);

  }

}

export const networkService: Network = new Network();
