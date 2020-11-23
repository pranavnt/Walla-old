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
				return true;
			}
		}
		return false;
	}

	//
	get(fn) {
		const layer = new Layer("get", "/", fn);
		this.methods["get"] = true;
		this.stack.push(layer);
	}

	put(fn) {
		const layer = new Layer("put", "/", fn);
		this.methods["put"] = true;
		this.stack.push(layer);
	}

	post(fn) {
		const layer = new Layer("post", "/", fn);
		this.methods["post"] = true;
		this.stack.push(layer);
	}
}
