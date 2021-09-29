import {Component, h, Host, State} from '@stencil/core';
import {Subscription} from "rxjs";
import {navigateToRoute, router} from "../../../honey-news/routing/SimpleRouter";

@Component({
  tag: "honey-navbar-bulma",
  shadow: true
})
export class HoneyNavbarBulma {


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

  protected classNavLink(route: string): string  {
    return "navbar-item " + (this.route === route ? "is-active" : "");
  }


  render() {


    return (
      <Host>
        <honey-apply-style/>

        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">

            <a href="/"
               onClick={this.navigateTo}
               class={this.classNavLink("/")}
            > RSS/Atom Feed Reader</a>

            <a href="/feeds"
               onClick={this.navigateTo}
               class={this.classNavLink("/feeds")}
            >Feeds</a>


            <a href="/news"
               onClick={this.navigateTo}
               class={this.classNavLink("/news")}
            >News</a>

            <a href="/statistic"
               onClick={this.navigateTo}
               class={this.classNavLink("/statistic")}
            >Statistik</a>

            <a href="/about"
               onClick={this.navigateTo}
               class={this.classNavLink("/about")}
            >About</a>

            <a
              href="https://github.com/Huluvu424242/honey-news"
              target="_blank" class="is-primary button">Github</a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </a>
          </div>
        </nav>
      </Host>

    )
  }
}
