class Router {
  constructor() {
    this.routers = {};

    this.currentRoute = "";

    this.refreshRouter = this.refreshRouter.bind(this);

    window.addEventListener("load", this.refreshRouter);
    window.addEventListener("hashchange", this.refreshRouter);
  }

  addRouter(path, cb) {
    this.routers[path] = cb || function () {};
  }

  refreshRouter() {
    this.currentRoute = location.hash.slice(1) || "/";
    this.routers[this.currentRoute]();
  }
}
