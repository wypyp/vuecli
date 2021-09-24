const envState = process.env.ENV;
const api = require(`./api`);
const apiMap = api[envState];
const cumputedProxy = () => {
	const tempProxy = {
		// changeOrigin: true,
	};
	for (var key in apiMap) {
		tempProxy[`${key}`] = {
			target: apiMap[key],
			pathRewrite: {}
		};
		tempProxy[`${key}`].pathRewrite[`^${key}`] = '';
	}
	return tempProxy;
}

const proxyReplace = (url) => {
	const apiMap = api[process.ENV]
	for (const key in apiMap) {
		const reg = new RegExp(`^${key}`);
		url = url.replace(reg, apiMap[key]);
	}
	return url;
}

module.exports = {
	proxyReplace,
	cumputedProxy
};
