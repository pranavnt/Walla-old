export class Router {
	constructor() {
		this.routes = [];
	}

	handleRequest(method, route, fn) {}

	addRoute(method, route, fn) {}

	isInRoutes(route) {
		for (var i = 0; i < this.routes.length; i++) {
			if (this.routes[i].path == route) {
				return true;
			}
		}
		return false;
	}
}
