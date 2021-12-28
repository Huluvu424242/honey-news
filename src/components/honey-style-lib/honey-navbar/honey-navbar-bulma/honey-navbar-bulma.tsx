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

  @State() isBurgerActive: boolean = false;


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

  protected getNavLinkClass(route: string): string {
    return "navbar-item " + (this.route === route ? "is-primary" : "is-info");
  }

  protected getBurgerMenuClass(): string {
    return (this.isBurgerActive ? "is-active" : "");
  }


  render() {


    return (
      <Host>
        <honey-apply-style/>

        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">

            <a href="/" role="button"
               onClick={this.navigateTo}
               class={this.getNavLinkClass("/")}
            > RSS/Atom Feed Reader</a>


            <a role="button"
              href="https://github.com/Huluvu424242/honey-news"
              target="_blank" class="navbar-item button">Github</a>

            <a class={"navbar-burger " + this.getBurgerMenuClass()} aria-label="menu" aria-expanded="false"
               data-target="navSubmenu" onClick={() => this.isBurgerActive = !this.isBurgerActive}>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </a>
          </div>

          <div id="navSubmenu" class={"navbar-menu " + this.getBurgerMenuClass()}>
            <div id="navbarStart" class="navbar-start">

              <a href="/feeds" role="button"
                 onClick={this.navigateTo}
                 class={this.getNavLinkClass("/feeds")}
              >Feeds</a>

              <a href="/news" role="button"
                 onClick={this.navigateTo}
                 class={this.getNavLinkClass("/news")}
              >News</a>

              <a href="/statistic" role="button"
                 onClick={this.navigateTo}
                 class={this.getNavLinkClass("/statistic")}
              >Statistik</a>

              <a href="/about" role="button"
                 onClick={this.navigateTo}
                 class={this.getNavLinkClass("/about")}
              >About</a>
            </div>
          </div>
        </nav>
      </Host>

    )
  }
}
