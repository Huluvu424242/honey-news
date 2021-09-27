import {Component, Element, h, Host, State} from '@stencil/core';
import {navigateToRoute, router} from "../routing/SimpleRouter";
import {Subscription} from "rxjs";

@Component({
  tag: "honey-news-header",
  shadow: true
})
export class Header {


  @Element() hostElement;

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

  protected classNavLink(route: string): string | null {
    return this.route === route ? "selected" : null;
  }

  render() {
    return (
      <Host>
        <honey-apply-style/>
        <nav class="border split-nav">
          <div class="nav-brand">
            <h3 role="heading" aria-level="1"><a href="/"
                                                 onClick={this.navigateTo}
                                                 class={this.classNavLink("/")}
            > RSS/Atom Feed Reader</a></h3>
          </div>
          <div class="collapsible">
            <input id="collapsible0" type="checkbox" name="collapsible0"/>
            <label htmlFor="collapsible0">
              <div class="bar1"/>
              <div class="bar2"/>
              <div class="bar3"/>
              <div class="bar4"/>
              <div class="bar5"/>
            </label>
            <div class="collapsible-body">
              <ul role="listbox" class="inline">
                <li role="listitem"><span role="heading" aria-level="2"><a href="/feeds"
                                                                           onClick={this.navigateTo}
                                                                           class={this.classNavLink("/feeds")}
                >Feeds</a></span>
                </li>
                <li role="listitem"><span role="heading" aria-level="2"><a href="/news"
                                                                           onClick={this.navigateTo}
                                                                           class={this.classNavLink("/news")}
                >News</a></span>
                </li>
                <li role="listitem"><span role="heading" aria-level="2"><a href="/statistic"
                                                                           onClick={this.navigateTo}
                                                                           class={this.classNavLink("/statistic")}
                >Statistik</a></span>
                </li>
                <li role="listitem"><span role="heading" aria-level="2"><a href="/about"
                                                                           onClick={this.navigateTo}
                                                                           class={this.classNavLink("/about")}
                >About</a></span>
                </li>
                <li role="listitem"><span role="heading" aria-level="2"><a
                  href="https://github.com/Huluvu424242/honey-news"
                  target="_blank" class="nav-link">Github</a></span></li>
              </ul>
            </div>
          </div>
        </nav>
        <honey-disclaimer/>
      </Host>
    );
  }
}
