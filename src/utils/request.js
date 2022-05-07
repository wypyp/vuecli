/*
 * @Author: WangYP
 * @Date: 2021-09-22 15:33:12
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-07 10:53:10
 * @Description: 描述信息
 * @FilePath: /vuecli/src/utils/request.js
 */
import axios from 'axios';
import { randomStr } from '@/utils';
const proxyReplace = require('../proxy/index').proxyReplace;
// let loadingRequestTask = [];
// const intervalTime = 2000;
// const closeLoading = (requestId) => {
// 	const current = loadingRequestTask.find(item => {
// 		if (item[requestId]) {
// 			return item;
// 		}
// 	})
// 	setTimeout(() => {
// 		loadingRequestTask = loadingRequestTask.filter(item => !item[requestId])
// 		if (!loadingRequestTask.length) {
// 			Loading.$loading.close();
// 		}
// 	})
// 	if ((Date.now() - current[requestId]) > intervalTime) {
// 		Loading.$loading.close();
// 	}
// };
// create an axios instance
const service = axios.create({
	baseURL: '', // api 的 base_url
	// timeout: 30000 // request timeout
});

// request interceptor
service.interceptors.request.use(
	config => {
    if (!config.params) {
			config.params = {};
		}
		if (process.PROXY === 'false') {
			config.url = proxyReplace(config.url);
			// config.url = config.url.replace('/api', '');
		}
		const requestId = randomStr(5);
		// if (!config.noLoading) {
		// 	if (!loadingRequestTask.length) {
		// 		Loading.$loading.open();
		// 	}
		// 	const obj = {};
		// 	obj[requestId] = Date.now();
		// 	loadingRequestTask.push(obj);
		// }
		config.params.randomStr = requestId;
		// config.headers['token'] = store.state.loginToken;
		config.headers['Authorization'] = localStorage.getItem('Authorization');
		return config;
  },
	error => Promise.reject({ msg: error.message })
);

// response interceptor
service.interceptors.response.use(
	response => {
		// closeLoading(response.config.params.randomStr);
		// const {data } = response.data;
		return Promise.resolve(response.data);
		// let toastMessage = message || 'server error';
		// if ((new RegExp(`/roxe-kyc/`).test(url) && rucEnum[code]) || (new RegExp(`/file-storage-service/`).test(url) && rucEnum[code])) {
		// 	toastMessage = rucEnum[code]
		// }
		// Toast.$toast(toastMessage, 2000);
		// return Promise.reject(data);
	},
	error => {
		// Toast.$toast('server error', 2000);
		// Loading.$loading.close();
		return Promise.reject(error.response);
	}
);

export default service;

export const Axios = {
	install (Vue) {
		Object.defineProperty(Vue.prototype, '$axios', {
			value: service
		});
	}
};
