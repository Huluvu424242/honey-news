import {Endpunkt} from "./endpunkt";


export class EndpunkteService {

  protected endpunkte: Map<string, Endpunkt>;

  constructor() {
    this.endpunkte = new Map<string, Endpunkt>();
  }

  /**
   * Registriert einen Endpunkt unter seiner Id in der internen Map.
   * Bei gleicher Id gewinnt der neue Endpunkt.
   *
   * @param endpunkt Endpunkt Beschreibung eines API Endpunktes
   */
  public registerEndpunkt(endpunkt: Endpunkt): void {
    this.endpunkte.set(endpunkt.getId(), endpunkt);
  }

  public getEndpoint(endpointId: string): Endpunkt {
    return this.endpunkte.get(endpointId);
  }

}

export const endpunkteService: EndpunkteService = new EndpunkteService();
