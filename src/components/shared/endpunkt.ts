import {endpunkteService} from "./endpunkte-service";

export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  HEAD = "HEAD"
}

// export class Endpunkt implements EndpunktBase {
export class Endpunkt  {
  readonly id: string;
  readonly method: Method;
  readonly host: string;
  readonly port: number;
  readonly path: string;
  readonly query: {};

  constructor(id: string, method: Method, host: string, port: number, path: string, query: {}) {
    this.id = id;
    this.method = method;
    this.host = host;
    this.port = port;
    this.path = path;
    this.query = query;
  }

  public register(): Endpunkt {
    endpunkteService.registerEndpunkt(this);
    return this;
  }

  public getCopy(): Endpunkt {
    return new Endpunkt(this.id, this.method, this.host, this.port, this.path, this.query);
  }

  public getId() {
    return this.id;
  }

  public getMethod(): Method {
    return this.method;
  }

  public getMethodAsString(): string {
    return this.method.toString();
  }

  public getPath(): string {
    return this.path;
  }

  public getQueryAsString(): string {
    let queryResult: string = "";
    let keyName: string;
    let prefix: boolean = false;
    for (keyName in this.query) {
      queryResult += (prefix ? "&" : "") + keyName + "=" + this.query[keyName];
      prefix = true;
    }
    return queryResult ? "?" + queryResult : "";
  }

  public getQuery(): {} {
    return this.query;
  }

  public replaceBase(urlBase: string, port: number): Endpunkt {
    const host: string = urlBase.replace(":" + port, "");
    return new Endpunkt(this.id, this.method, host, port, this.path, this.query);
  }

  public replaceEndpunktBaseIfGiven(host?: string, port?: number): Endpunkt {
    return new Endpunkt(this.id, this.method, host ? host : this.host, port ? port : this.port, this.path, this.query);
  }

  public replaceQueryIfGiven(query?: {}): Endpunkt {
    return new Endpunkt(this.id, this.method, this.host, this.port, this.path, query ? query : this.query);
  }

  public addQueryPart(keyName: string, keyValue: string): Endpunkt {
    const newQuery: {} = {...this.query};
    newQuery[keyName] = keyValue;
    return this.replaceQueryIfGiven(newQuery);
  }

  public toUrl(): string {
    return this.host + (this.port ? ":" + this.port : "") + this.path + this.getQueryAsString();
  }

}

