export interface EndpunktBase {
  readonly host: string;
  readonly port: number;
}

export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  HEAD = "HEAD"
}

export class Endpunkt implements EndpunktBase {
  readonly host: string;
  readonly port: number;
  readonly path: string;
  readonly query: {};
  readonly method: Method;

  constructor(method: Method, host: string, port: number, path: string, query: {}) {
    this.method = method;
    this.host = host;
    this.port = port;
    this.path = path;
    this.query = query;
  }

  public getMethod(): Method {
    return this.method;
  }

  public getMethodAsString(): string {
    return this.method.toString();
  }

  public getEndpunktBase(): EndpunktBase {
    return this;
  }

  public getQueryAsString(): string {
    let queryResult: string = "";
    let keyName: string;
    let prefix: boolean = false;
    for (keyName in this.query) {
      queryResult += (prefix ? "&" : "") + keyName + "=" + this.query[keyName];
      prefix = true;
    }
    return "?" + queryResult;
  }

  public getQuery(): {} {
    return this.query;
  }

  public replaceEndpunktBaseIfGiven(host?: string, port?: number): Endpunkt {
    return new Endpunkt(this.method, host ? host : this.host, port ? port : this.port, this.path, this.query);
  }

  public replaceQueryIfGiven(query?: {}): Endpunkt {
    return new Endpunkt(this.method, this.host, this.port, this.path, query ? query : this.query);
  }

  public addQueryPart(keyName:string, keyValue:string): Endpunkt {
    const newQuery:{} = {...this.query};
    newQuery[keyName]=keyValue;
    return this.replaceQueryIfGiven(newQuery);
  }

  public toUrl(): string {
    return this.host + (this.port ? ":" + this.port : "") + this.path + this.getQueryAsString();
  }

}

