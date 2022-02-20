import { r as registerInstance, h, e as Host } from './index-a218ef3e.js';
import { r as router, n as navigateToRoute } from './SimpleRouter-98abf0a5.js';
import './index-d3934a4e.js';

let HoneyNavbarBulma = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.routerSubscription = null;
    this.route = "";
    this.isBurgerActive = false;
  }
  connectedCallback() {
    // States initialisieren
    this.routerSubscription = router.getRouteListener().subscribe({
      next: (route) => {
        console.log("###Route: " + route);
        this.route = route;
      },
      error: err => console.error(err),
      complete: () => console.info("Router Subject' complete")
    });
  }
  disconnectedCallback() {
    this.routerSubscription.unsubscribe();
  }
  navigateTo(event) {
    event.preventDefault();
    navigateToRoute(event.currentTarget["pathname"]);
  }
  navigateToPath(route) {
    navigateToRoute(route);
  }
  getItemSelectedClass(route) {
    return this.getNavItemClass() + (this.route === route ? "is-info" : "is-success");
  }
  getNavItemClass() {
    return "navbar-item button is-rounded ";
  }
  getBurgerMenuClass() {
    return (this.isBurgerActive ? "is-active" : "");
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("nav", { class: "navbar", role: "navigation", "aria-label": "main navigation" }, h("div", { class: "navbar-brand" }, h("div", { onClick: () => this.navigateToPath("/"), class: this.getItemSelectedClass("/") }, " RSS/Atom Feed Reader"), h("a", { class: "navbar-burger " + this.getBurgerMenuClass(), "aria-label": "menu", "aria-expanded": "false", "data-target": "navSubmenu", onClick: () => this.isBurgerActive = !this.isBurgerActive }, h("span", { "aria-hidden": "true" }), h("span", { "aria-hidden": "true" }), h("span", { "aria-hidden": "true" }))), h("div", { id: "navSubmenu", class: "navbar-menu " + this.getBurgerMenuClass() }, h("div", { id: "navbarStart", class: "navbar-start" }, h("div", { class: "navbar-item has-dropdown is-hoverable" }, h("a", { class: "navbar-link" }, "Theme / Style"), h("div", { class: "navbar-dropdown is-boxed" }, h("honey-select-style", { themeName: "honey-papercss-style" }, "PaperCSS Style"))), h("div", { onClick: () => this.navigateToPath("/feeds"), class: this.getItemSelectedClass("/feeds") }, "Feeds"), h("div", { onClick: () => this.navigateToPath("/news"), class: this.getItemSelectedClass("/news") }, "News"), h("div", { onClick: () => this.navigateToPath("/statistic"), class: this.getItemSelectedClass("/statistic") }, "Statistik"), h("div", { onClick: () => this.navigateToPath("/about"), class: this.getItemSelectedClass("/about") }, "About"), h("a", { role: "button", href: "https://github.com/Huluvu424242/honey-news", target: "_blank", rel: "noopener noreferrer", class: "navbar-item" }, "Github"))))));
  }
};

export { HoneyNavbarBulma as honey_navbar_bulma };
