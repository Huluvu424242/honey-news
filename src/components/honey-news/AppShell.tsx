import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {Logger} from "../../shared/logger";
import {AppShellOptions} from "./AppShellOptions";
import {About} from "./snippets/About";
import {Subscription} from "rxjs";
import {listenRouteChanges} from "../../Router";

@Component({
  tag: "honey-news",
  styleUrl: "AppShell.css",
  assetsDirs: ['assets'],
  shadow: true
})
export class AppShell {

  /**
   * Host Element
   */
  @Element() hostElement: HTMLElement;

  /**
   * Id des Host Elements, falls nicht verfügbar wird diese generiert
   */
  ident: string;

  /**
   * initiale class from host tag
   */
  initialHostClass: string;

  /**
   * true wenn das Tag ohne alt Attribute deklariert wurde
   */
  createAriaLabel: boolean = false;

  /**
   * true wenn das Tag ohne title Attribut deklariert wurde
   */
  createTitleText: boolean = false;

  /**
   * initial computed taborder
   */
  taborder: string = "0";


  routerSubscription: Subscription = null;
  @State() route: string = "";


  @State() options: AppShellOptions = {
    disabledHostClass: "honey-news-disabled",
    enabledHostClass: "honey-news",
    disabledTitleText: "News Reader nicht verfügbar",
    titleText: "News Reader",
    ariaLabel: "Neuigkeiten der abonierten Feeds",
  };

  /**
   * enable console logging
   */
  @Prop() verbose: boolean = false;

  public connectedCallback() {
    // States initialisieren
    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
    this.initialHostClass = this.hostElement.getAttribute("class") || null;
    this.createTitleText = !this.hostElement.title;
    this.createAriaLabel = !this.hostElement["aria-label"];
    this.taborder = this.hostElement.getAttribute("tabindex") ? (this.hostElement.tabIndex + "") : "0";
    this.routerSubscription = listenRouteChanges().subscribe((route: string) => {
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

  protected createNewTitleText(): string {
    // if (this.) {
    //   return this.options.disabledTitleText;
    // } else {
    return this.options.titleText;
    // }
  }

  protected getTitleText(): string {
    if (this.createTitleText) {
      return this.createNewTitleText();
    } else {
      return this.hostElement.title;
    }
  }

  protected getAriaLabel(): string {
    if (this.createAriaLabel) {
      return this.options.ariaLabel;
    } else {
      return this.hostElement.getAttribute("aria-label");
    }
  }

  protected getHostClass(): string {
    let hostClass = this.initialHostClass;
    // if (this.hasNoFeeds()) {
    //   return hostClass + " " + this.options.disabledHostClass;
    // } else {
    //   return hostClass + " " + this.options.enabledHostClass;
    // }
    return hostClass;
  }

  protected getBody(): string {
    switch (window.location.pathname) {
      case "/statistic":
        return <honey-news-statistic/>;
      case "/feeds":
        return <honey-news-feeds/>;
      default:
        return <honey-news-feed/>;
    }
  }

  public render() {
    Logger.debugMessage('##RENDER##');
    return (
      <Host
        title={this.getTitleText()}
        aria-label={this.getAriaLabel()}
        // tabindex={this.hasNoFeeds() ? -1 : this.taborder}
        // class={this.getHostClass()}
        // disabled={this.hasNoFeeds()}
        class=""
      >
        <div id="top" class="row site">
          <div class="sm-12 md-8 col">
            <div class="paper">

              <honey-news-header/>
              <div class="to-top">
                <a href="#top" class="paper-btn margin">^</a>
              </div>
              <div class="row flex-left">
                <div class="sm-2 col background-primary">Route: {this.route}</div>
              </div>


              {!this.route || this.route === "/" || this.route === "/news" ? <honey-news-feed/> : null}
              {this.route === "/feeds" ? <honey-news-feeds/> : null}
              {this.route === "/statistic" ? <honey-news-statistic/> : null}
              {this.route === "/about" ? <About/> : null}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
