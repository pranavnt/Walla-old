const Router = require("./router/Router").Router;
const Route = require("./router/Route").Route;
const Layer = require("./router/Layer").Layer;
const http = require("http");

export class Walla {
	constructor() {
		this.router = new Router();
	}

	get(route, fn) {
		console.log("GET request");
		this.router.addRoute("GET", route, fn);
	}

	post(route, fn) {
		console.log("POST request");
		this.router.addRoute("POST", route, fn);
	}

	put(route, fn) {
		console.log("PUT request");
		this.router.addRoute("PUT", route, fn);
	}

	setPlaygroundRoute(playgroundRoute) {
		this.playgroundRoute = playgroundRoute;
	}

	listen(PORT) {
		// create http server and that stuff

		console.log(`App running at ${PORT}`);
	}
}
