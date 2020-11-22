const Router = require("./router/Router").Router;
const http = require("http");

export class Walla {
	constructor() {
		this.router = new Router();
	}

	get() {
		console.log();
	}

	post() {
		console.log();
	}

	put() {
		console.log();
	}

	setPlaygroundRoute(playgroundRoute) {
		this.playgroundRoute = playgroundRoute;
	}

	listen() {
		console.log("App running at ______");
	}
}
