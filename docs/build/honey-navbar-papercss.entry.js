import { r as registerInstance, h, e as Host } from './index-6cdc66d3.js';
import { r as router, n as navigateToRoute } from './SimpleRouter-85633630.js';
import './index-d9553567.js';

let HoneyNavbarPapercss = class {
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
    return (this.route === route ? "selected" : "");
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("nav", { class: "border fixed split-nav" }, h("div", { class: "nav-brand" }, h("h3", null, h("a", { href: "/", onClick: this.navigateTo, class: this.classNavLink("/") }, "RSS/Atom Feed Reader"))), h("div", { class: "collapsible" }, h("input", { id: "collapsible1", type: "checkbox", name: "collapsible1" }), h("label", { htmlFor: "collapsible1" }, h("div", { class: "bar1" }), h("div", { class: "bar2" }), h("div", { class: "bar3" })), h("div", { class: "collapsible-body" }, h("ul", { class: "inline" }, h("li", null, h("a", { href: "/feeds", onClick: this.navigateTo, class: this.classNavLink("/feeds") }, "Feeds")), h("li", null, h("a", { href: "/news", onClick: this.navigateTo, class: this.classNavLink("/news") }, "News")), h("li", null, h("a", { href: "/statistic", onClick: this.navigateTo, class: this.classNavLink("/statistic") }, "Statistic")), h("li", null, h("a", { href: "/about", onClick: this.navigateTo, class: this.classNavLink("/about") }, "About")), h("li", null, h("a", { href: "https://github.com/Huluvu424242/honey-news", target: "_blank", class: "is-primary button" }, "Github"))))))));
  }
};

export { HoneyNavbarPapercss as honey_navbar_papercss };
