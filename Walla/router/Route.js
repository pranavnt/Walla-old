const Layer = require("./Layer").Layer;

export class Route {
	constructor(path) {
		this.path = path;
		this.stack = [];
	}

	// checks whether a route can handle a specific method
	canHandleMethod(method) {
		for (var i = 0; i < this.stack.length; i++) {
			if (this.stack[i].method == method) {
				return this.stack[i];
			}
		}
		return false;
	}

	//
	addGetMethod(fn) {
		const layer = new Layer("GET", fn);
		this.stack.push(layer);
	}

	addPutMethod(fn) {
		const layer = new Layer("PUT", fn);
		this.stack.push(layer);
	}

	addPostMethod(fn) {
		const layer = new Layer("POST", fn);
		this.stack.push(layer);
	}
}
