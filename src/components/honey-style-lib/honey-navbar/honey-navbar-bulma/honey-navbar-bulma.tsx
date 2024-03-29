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
    this.routerSubscription = router.getRouteListener().subscribe(
      {
        next: (route: string) => {
          console.log("###Route: " + route);
          this.route = route
        },
        error: err => console.error(err),
        complete: () => console.info("Router Subject' complete")
      });
  }

  public disconnectedCallback() {
    this.routerSubscription.unsubscribe();
  }


  protected navigateTo(event: UIEvent): void {
    event.preventDefault();
    navigateToRoute(event.currentTarget["pathname"]);
  }

  protected navigateToPath(route: string): void {
    navigateToRoute(route);
  }

  protected getItemSelectedClass(route: string): string {
    return this.getNavItemClass() + (this.route === route ? "is-info" : "is-success");
  }

  protected getNavItemClass(): string {
    return "navbar-item button is-rounded ";
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

            <div
              onClick={() => this.navigateToPath("/")}
              class={this.getItemSelectedClass("/")}
            > RSS/Atom Feed Reader
            </div>

            <a class={"navbar-burger " + this.getBurgerMenuClass()} aria-label="menu" aria-expanded="false"
               data-target="navSubmenu" onClick={() => this.isBurgerActive = !this.isBurgerActive}>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </a>
          </div>

          <div id="navSubmenu" class={"navbar-menu " + this.getBurgerMenuClass()}>
            <div id="navbarStart" class="navbar-start">

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Theme / Style
                </a>
                <div class="navbar-dropdown is-boxed">
                  <honey-select-style themeName="honey-papercss-style">PaperCSS Style</honey-select-style>
                </div>
              </div>

              <div
                onClick={() => this.navigateToPath("/feeds")}
                class={this.getItemSelectedClass("/feeds")}
              >Feeds
              </div>

              <div
                onClick={() => this.navigateToPath("/news")}
                class={this.getItemSelectedClass("/news")}
              >News
              </div>

              <div
                onClick={() => this.navigateToPath("/statistic")}
                class={this.getItemSelectedClass("/statistic")}
              >Statistik
              </div>

              <div
                onClick={() => this.navigateToPath("/about")}
                class={this.getItemSelectedClass("/about")}
              >About
              </div>



              <a role="button"
                 href="https://github.com/Huluvu424242/honey-news"
                 target="_blank" rel="noopener noreferrer" class="navbar-item">Github</a>

            </div>
          </div>
        </nav>
      </Host>

    )
  }
}
