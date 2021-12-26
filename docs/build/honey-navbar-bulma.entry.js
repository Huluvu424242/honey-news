import { r as registerInstance, h, e as Host } from './index-6cdc66d3.js';
import { r as router, n as navigateToRoute } from './SimpleRouter-85633630.js';
import './index-d9553567.js';

let HoneyNavbarBulma = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.routerSubscription = null;
    this.route = "";
  }
  connectedCallback() {
    // States initialisieren
    this.routerSubscription = router.getRouteListener().subscribe((route) => {
      this.route = route;
    }, (error) => {
      console.error(error);
    }, () => {
      console.info("Router Subject' complete");
    });
  }
  disconnectedCallback() {
    this.routerSubscription.unsubscribe();
  }
  navigateTo(event) {
    event.preventDefault();
    navigateToRoute(event.currentTarget["pathname"]);
  }
  classNavLink(route) {
    return "navbar-item " + (this.route === route ? "is-active" : "");
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("nav", { class: "navbar is-primary", role: "navigation", "aria-label": "main navigation" }, h("div", { class: "navbar-brand" }, h("a", { href: "/", onClick: this.navigateTo, class: this.classNavLink("/") }, " RSS/Atom Feed Reader"), h("a", { href: "/feeds", onClick: this.navigateTo, class: this.classNavLink("/feeds") }, "Feeds"), h("a", { href: "/news", onClick: this.navigateTo, class: this.classNavLink("/news") }, "News"), h("a", { href: "/statistic", onClick: this.navigateTo, class: this.classNavLink("/statistic") }, "Statistik"), h("a", { href: "/about", onClick: this.navigateTo, class: this.classNavLink("/about") }, "About"), h("a", { href: "https://github.com/Huluvu424242/honey-news", target: "_blank", class: "is-primary button" }, "Github"), h("a", { role: "button", class: "navbar-burger", "aria-label": "menu", "aria-expanded": "false" }, h("span", { "aria-hidden": "true" }), h("span", { "aria-hidden": "true" }), h("span", { "aria-hidden": "true" }))))));
  }
};

export { HoneyNavbarBulma as honey_navbar_bulma };
