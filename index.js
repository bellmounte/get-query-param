module.exports = function getQueryParam (param, url) {
	if (typeof param !== 'string') {
		throw new TypeError('get-query-param invalid input param');
	}

	const search = url ? url : location.search.slice(1);
	const params = new URLSearchParams(url);

	return params.get(name);
};
