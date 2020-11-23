const Layer = require("./Layer").Layer;

export class Route {
	constructor(path) {
		this.path = path;
		this.stack = [];
		this.methods = {};
	}

	// checks whether a route can handle a specific method
	canHandleMethod(method) {
		return this.methods[method.toLowerCase()];
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
