/*
 * Layer Class
 * Add description later
 */

export class Layer {
	// constructor takes in a path and handler
	constructor(method, fn) {
		this.handle = fn;
		this.method = method;
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

	methodExists(method) {
		return this.method == method;
	}
}
