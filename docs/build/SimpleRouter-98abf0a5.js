import { R as ReplaySubject } from './index-d3934a4e.js';

class SimpleRouter {
  constructor() {
    this.route = new ReplaySubject();
    this.routenprefix = "";
    this.routes = new Map();
    const tmpRoute = window.location.pathname;
    this.route.next(tmpRoute.replace(this.routenprefix, ""));
    window.onpopstate = () => {
      // push route name
      const route = window.location.pathname;
      this.route.next(route.replace(this.routenprefix, ""));
      if (this.slot) {
        // push route context
        this.slot.innerHTML = this.routes.get(route);
      }
    };
  }
  setRoutenPrefix(routenprefix) {
    if (routenprefix && routenprefix !== "/") {
      this.routenprefix = routenprefix;
    }
  }
  setSlotElement(slot) {
    this.slot = slot;
  }
  addRouteToSlot(route, content) {
    // assign context to route
    this.routes.set(route, content);
  }
  navigateToRoute(route) {
    // push route name to browser history
    window.history.pushState({}, route, window.location.origin + this.routenprefix + route);
    // push route name
    this.route.next(route);
    if (this.slot) {
      // push route context
      this.slot.innerHTML = this.routes.get(route);
    }
  }
  getRouteListener() {
    return this.route;
  }
}
const router = new SimpleRouter();
const setRouterSlotElement = (slot) => {
  router.setSlotElement(slot);
};
const addRoute = (route, content) => {
  router.addRouteToSlot(route, content);
};
const navigateToRoute = (route) => {
  router.navigateToRoute(route);
};

export { navigateToRoute as n, router as r };
