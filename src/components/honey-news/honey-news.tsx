import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {logService} from "../../shared/log-service";
import {from, Subscription} from "rxjs";
import {router} from "./routing/SimpleRouter";
import {newsService} from "./news/news-service";
import {statisticService} from "./statistic/statistic-service";
import {tap} from "rxjs/operators";
import {configService, Configuration} from "../honey-config/config-service";
import {orbitService} from "../../../src/shared/orbit-service";

@Component({
  tag: "honey-news",
  shadow: true
})
export class HoneyNews {

  /**
   * Host Element
   */
  @Element() hostElement: HTMLElement;

  configElement: HTMLHoneyConfigElement;


  /**
   * Id des Host Elements, falls nicht verfügbar wird diese generiert
   */
  ident: string;

  feedURLListSubscription: Subscription;

  //
  // Routing
  //

  /**
   * base of remote site
   */
  @Prop({reflect: true, attribute: "site-basepath", mutable: true}) siteBasePath;
  /**
   * base of local site
   */
  @Prop({reflect: true, attribute: "local-basepath", mutable: true}) localBasePath;
  routerSubscription: Subscription = null;
  @State() route: string = "";

  /**
   * enable console logging
   */
  @Prop() verbose: boolean = false;

  public connectedCallback() {
    // attribute initialisieren wenn defaults notwendig
    this.localBasePath = this.hostElement.getAttribute("local-basepath") || "/";
    this.siteBasePath = this.hostElement.getAttribute("site-basepath") || "/";
    /// base initialisieren
    const curLocation: string = window.location.origin;
    const isLocal: boolean = curLocation.startsWith("http://localhost") || curLocation.startsWith("https://localhost");
    const basePath = isLocal ? this.localBasePath : this.siteBasePath;
    router.setRoutenPrefix(basePath);
    // route initialisieren
    if (basePath === "/") {
      this.route = window.location.pathname;
    } else {
      this.route = window.location.pathname.replace(basePath, "");
    }

    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
    this.routerSubscription = router.getRouteListener().subscribe(
      {
        next: (route: string) => this.route = route,
        error: (err) => console.error(err),
        complete: () => console.info("Router Subject' complete")
      }
    );

    // Properties auswerten
    logService.setLogging(this.verbose);
    logService.logMessage("Logging: " + this.verbose);
  }

  public async componentWillLoad() {
    try {
      orbitService.create();
      const feedURLListSubscription:Subscription = configService.subscribeConfigUpdates({
        next: (configuration:Configuration) => {
          logService.logMessage("#### log next");
         const predefinedURLs:string[] =  configuration["DEFAULT_FEED_LIST"];
          from(predefinedURLs).pipe(
            tap(
              url => newsService.addFeedUrl(url)
            )
          ).subscribe();
        }
      });
      if (feedURLListSubscription) {
        if (this.feedURLListSubscription) {
          this.feedURLListSubscription.unsubscribe();
        }
        this.feedURLListSubscription = feedURLListSubscription;
      }
    } catch (error) {
      return new Error("Die Konfiguration konnte nicht geladen werden")
    }
  }

  public disconnectedCallback() {
    this.feedURLListSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  public render() {
    return (
      <Host>
        <honey-config configKey="WELCOME_TEXT" ref={(el) => this.configElement = el as HTMLHoneyConfigElement}/>
        <honey-apply-style/>

        <honey-news-header/>

        {!this.route || this.route === "/" || this.route === "/index.html" || this.route === "/news" ?
          <honey-news-feed/> : null}
        {this.route === statisticService.getRoute() ? <honey-news-verwaltung/> : null}
        {this.route === "/statistic" ? <honey-news-statistic/> : null}
        {this.route === "/about" ? <honey-news-about/> : null}

      </Host>
    );
  }
}
