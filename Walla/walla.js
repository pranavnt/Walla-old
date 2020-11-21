const Router = require('./router/Router').Router;
const http = require('http');

export class Walla {
	constructor() {
		this.router = new Router();
	}
}
