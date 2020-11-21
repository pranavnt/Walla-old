export class Layer {
	constructor(path, fn) {
		this.path = path;
		this.name = fn.name || '<anonymous>';
		this.handle = fn;
	}

	// handles request for layer
	handleRequest(req, res, next) {
		const fn = this.handle;

		try {
			fn(req, res, next);
		} catch (err) {
			next(err);
		}
	}

	handleError(err, req, res, next) {
		// handle error
	}

	match(path) {}
}
