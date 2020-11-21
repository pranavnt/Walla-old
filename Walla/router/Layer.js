/*
 * Layer Class
 * Add description
 */

export class Layer {
	// constructor takes in a path and handler
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

	// handles an error
	handleError(error, req, res, next) {
		// handle error
		const fn = this.handle;

		try {
			fn(error, req, res, next);
		} catch (err) {
			next(err);
		}
	}

	// matches paths
	match(path) {
		if (path === this.path || path === '*') {
			return true;
		}
		return false;
	}
}
