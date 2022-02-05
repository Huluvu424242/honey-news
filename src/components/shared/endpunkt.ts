export interface EndpunktBase {
  readonly host: string;
  readonly port: number;
}

export class Endpunkt implements EndpunktBase {
  readonly host: string;
  readonly port: number;
  readonly path: string;
  readonly query: string;

  constructor(host: string, port: number, path: string, query: string) {
    this.host = host;
    this.port = port;
    this.path = path;
    this.query = query;
  }

  public getEndpunktBase(): EndpunktBase {
    return this;
  }

  public getQuery(): string {
    return this.query;
  }

  public replaceEndpunktBaseIfGiven(host?: string, port?: number): Endpunkt {
    return new Endpunkt(host ? host : this.host, port ? port : this.port, this.path, this.query);
  }

  public replaceQueryIfGiven(query?: string): Endpunkt {
    return new Endpunkt(this.host, this.port, this.path, query ? query : this.query);
  }


  public toUrl(): string {
    return this.host + (this.port ? ":" + this.port : "") + this.path + this.query;
  }

}

