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

	get(fn) {
		var layer = new Layer('/', fn);
		layer.method = 'get';

		this.methods['get'] = true;
		this.stack.push(layer);
	}

	put(fn) {}

	post(fn) {}
}
