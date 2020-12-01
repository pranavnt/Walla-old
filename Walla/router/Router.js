const Route = require("./Route").Route;
const Layer = require("./Layer").Layer;

export class Router {
	constructor() {
		this.routes = [];
	}

	handleRequest(method, route, fn) {}

	addRoute(method, route, fn) {
		if (this.isInRoutes(route) == false) {
			const newRoute = new Route();

			if (newRoute.canHandleMethod("GET")) {
				console.log("get request");
			} else if (newRoute.canHandleMethod("PUT")) {
				console.log("put request");
			} else if (newRoute.canHandleMethod("POST")) {
				console.log("post request");
			} else {
				console.log("Not a get, put, or post request");
			}

			this.routes.push(newRoute);
		} else {
			return -1;
		}
	}

	isInRoutes(route) {
		for (var i = 0; i < this.routes.length; i++) {
			if (this.routes[i].path == route) {
				return i;
			}
		}
		return false;
	}
}
