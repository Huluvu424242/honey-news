import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {Logger} from "../../libs/logger";
import {AppShellOptions} from "./AppShellOptions";

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
    this.initialHostClass = this.hostElement.getAttribute("class") || "paper container";
    this.createTitleText = !this.hostElement.title;
    this.createAriaLabel = !this.hostElement["aria-label"];
    this.taborder = this.hostElement.getAttribute("tabindex") ? (this.hostElement.tabIndex + "") : "0";
    // Properties auswerten
    Logger.toggleLogging(this.verbose);
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


  public istStatistic(): boolean {
    return window.location.pathname === "/statistic";
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
        class={this.getHostClass()}
        // disabled={this.hasNoFeeds()}
      >
        <stencil-router id="router">
          <stencil-route
            url="/feeds"
            component="honey-news-feeds"
            router="#router"
            exact={true}
          />
          <stencil-route
            url="/"
            component="honey-news"
            router="#router"
            exact={true}
          />

          <stencil-route
            url="/statistic"
            component="honey-news-statistic"
            router="#router"
            exact={true}
          />
        </stencil-router>
        <honey-news-header/>
        {this.getBody()}
      </Host>
    );
  }
}
