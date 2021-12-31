import {Component, h, Host, State} from '@stencil/core';
import {Subscription} from "rxjs";
import {navigateToRoute, router} from "../../../honey-news/routing/SimpleRouter";

@Component({
  tag: "honey-navbar-papercss",
  shadow: true
})
export class HoneyNavbarPapercss {


  routerSubscription: Subscription = null;
  @State() route: string = "";


  public connectedCallback() {
    // States initialisieren
    this.routerSubscription = router.getRouteListener().subscribe((route: string) => {
        this.route = route;
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.info("Router Subject' complete");
      });
  }

  public disconnectedCallback() {
    this.routerSubscription.unsubscribe();
  }


  protected navigateTo(event: UIEvent): void {
    event.preventDefault();
    navigateToRoute(event.currentTarget["pathname"]);
  }

  protected classNavLink(route: string): string {
    return (this.route === route ? "selected" : "");
  }


  render() {


    return (
      <Host>
        <honey-apply-style/>


        <nav class="border fixed split-nav">
          <div class="nav-brand">
              <h3>
                <a href="/" onClick={this.navigateTo} class={this.classNavLink("/")}>RSS/Atom Feed Reader</a>
              </h3>
          </div>
          <div class="collapsible">
            <input id="collapsible1" type="checkbox" name="collapsible1"/>
            <label htmlFor="collapsible1">
              <div class="bar1"/>
              <div class="bar2"/>
              <div class="bar3"/>
            </label>
            <div class="collapsible-body">
              <ul class="inline">
                <li>
                    <honey-select-style-papercss themeName="honey-bulma-style" optionText="Bulma Style" />
                </li>
                <li><a href="/feeds" onClick={this.navigateTo} class={this.classNavLink("/feeds")}>Feeds</a></li>
                <li><a href="/news" onClick={this.navigateTo} class={this.classNavLink("/news")}>News</a></li>
                <li><a href="/statistic" onClick={this.navigateTo} class={this.classNavLink("/statistic")}>Statistic</a>
                </li>
                <li><a href="/about" onClick={this.navigateTo} class={this.classNavLink("/about")}>About</a></li>
                <li><a href="https://github.com/Huluvu424242/honey-news"
                       target="_blank" class="is-primary button">Github</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </Host>

    )
  }
}
