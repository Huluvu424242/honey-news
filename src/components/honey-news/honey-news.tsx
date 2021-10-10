import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {Logger} from "../../shared/logger";
import {Subscription} from "rxjs";
import {router} from "./routing/SimpleRouter";
import {NewsLoader} from "./news/NewsLoader";

@Component({
  tag: "honey-news",
  shadow: true
})
export class HoneyNews {

  /**
   * Host Element
   */
  @Element() hostElement: HTMLElement;


  /**
   * Id des Host Elements, falls nicht verfügbar wird diese generiert
   */
  ident: string;

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

  /**
   * Shared State of AppShell
   */
  feedLoader: NewsLoader = new NewsLoader([]);


  // /**
  //  * News reader Komponente
  //  */
  // @Prop({mutable: true}) newsFeed: HTMLHoneyNewsFeedElement;
  //
  // @Watch("newsFeed")
  // newsWatcher(newValue: HTMLHoneyNewsFeedElement, oldValue: HTMLHoneyNewsFeedElement) {
  //   oldValue = oldValue;
  //   if (newValue) {
  //     if (this.newsFeed) {
  //       this.newsFeed.feedLoader = this.feedLoader;
  //     }
  //   }
  // }
  //
  //
  // /**
  //  * Feeds Administration Komponente
  //  */
  // @Prop({mutable: true}) feedAdministration: HTMLHoneyNewsFeedsElement;
  //
  // @Watch("feedAdministration")
  // feedWatcher(newValue: HoneyNewsFeed, oldValue: HoneyNewsFeed) {
  //   oldValue = oldValue;
  //   if (newValue) {
  //     if (this.feedAdministration) {
  //       this.feedAdministration.feedLoader = this.feedLoader;
  //     }
  //   }
  // }


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
    this.routerSubscription = router.getRouteListener().subscribe((route: string) => {
        this.route = route;
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.info("Router Subject' complete");
      });
    // Properties auswerten
    Logger.toggleLogging(this.verbose);
  }

  public disconnectedCallback() {
    this.routerSubscription.unsubscribe();
  }

  public render() {
    return (
      <Host>
        <honey-apply-style/>

        <honey-news-header/>

        {!this.route || this.route === "/" || this.route === "/index.html" || this.route === "/news" ?
          <honey-news-feed feedLoader={this.feedLoader}/> : null}
        {this.route === "/feeds" ? <honey-news-feeds feedLoader={this.feedLoader}/> : null}
        {this.route === "/statistic" ? <honey-news-statistic/> : null}
        {this.route === "/about" ? <honey-news-about/> : null}

      </Host>
    );
  }
}
