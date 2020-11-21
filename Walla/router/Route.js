const Layer = require('./Layer');

export class Route {
	constructor(path) {
		this.path = path;
		this.stack = [];

		this.methods = {};
	}

	canHandleMethod(method) {
		return this.methods[method.toLowerCase()];
	}

	get(fn) {}

	put(fn) {}

	post(fn) {}
}
