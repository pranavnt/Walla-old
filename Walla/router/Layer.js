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

	handleError(error, req, res, next) {
		// handle error
		const fn = this.handle;

		try {
			fn(error, req, res, next);
		} catch (err) {
			next(err);
		}
	}

	match(path) {
		if (path === this.path || path === '*') {
			return true;
		}
		return false;
	}
}
