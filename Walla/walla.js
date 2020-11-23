const Router = require("./router/Router").Router;
const Route = require("./router/Route").Route;
const Layer = require("./router/Layer").Layer;
const http = require("http");

export class Walla {
	constructor() {
		this.router = new Router();
	}

	get(route, fn) {
		console.log();
		if (Router.matchRoute(route))
	}

	post(route, fn) {
		console.log();
	}

	put(route, fn) {
		console.log();
	}

	setPlaygroundRoute(playgroundRoute) {
		this.playgroundRoute = playgroundRoute;
	}

	listen() {
		console.log("App running at ______");
	}
}
