import qs from 'qs';

export const isArray = Array.isArray;

export function isObject(obj) {
	return obj !== null && typeof obj === 'object';
}

export function isPlainObject(obj) {
	return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype;
}

export function rem2x(count) {
	return (count / 37.5).toFixed(6) + 'rem';
}

export function encodeFormData(data, parent, pairs) {
	pairs = pairs || [];
	var val;
	if (data instanceof Array) {
		data.forEach((item, index) => {
			if (typeof item === 'object') {
				encodeFormData(item, `${parent}[${index}]`, pairs);
			} else {
				pairs.push(`${parent}[${index}]=${encodeURIComponent(item)}`);
			}
		});
	} else {
		for (var name in data) {
			if (name === 'md5') {
				continue;
			}
			val = data[name];

			if (typeof val === 'object') {
				encodeFormData(val, name, pairs);
			} else {
				name = parent ? parent + '.' + name : name;
				pairs.push(name + '=' + encodeURIComponent(val));
			}
		}
	}

	return pairs.join('&');
}

export function merge(target) {
	var { slice } = [];
	var args = slice.call(arguments, 1);

	args.forEach(source => {
		_merge(target, source, true);
	});

	return target;
}

function _merge(target, source, deep) {
	for (var key in source) {
		if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
			if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
				target[key] = {};
			}
			if (isArray(source[key]) && !isArray(target[key])) {
				target[key] = [];
			}
			_merge(target[key], source[key], deep);
		} else if (source[key] !== undefined) {
			target[key] = source[key];
		}
	}
}

export function getQueryStringByName(url, name) {
	let paramIndex = url.lastIndexOf('?');
	if (paramIndex < 0) return '';
	let params = qs.parse(url.substring(paramIndex + 1));
	return params[name];
}

export function randomStr(length) {
	length = parseInt(length);
	var str = '';
	if (length / 25 >= 1) {
		for (var i = 0; i < Math.floor(length / 25); i++) {
			str += Math.random().toString(36).substr(2, 25);
		}
	}
	str += Math.random().toString(36).substr(2, length % 25);
	return str;
}

export function formatDate(date, fmt) {
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
}

function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}
export function addNumber(num1, num2) {
	let sq1, sq2, m;
	try {
		sq1 = num1.toString().split(".")[1].length;
	}
	catch (e) {
		sq1 = 0;
	}
	try {
		sq2 = num2.toString().split(".")[1].length;
	}
	catch (e) {
		sq2 = 0;
	}
	m = Math.pow(10, Math.max(sq1, sq2));
	return (num1 * m + num2 * m) / m;
}
export const replaceIndexStr =(str, index, replacetext) => {
	return str.substr(0, index) + replacetext + str.substr(index + replacetext.length);
}
export const setTheDecimalAdd = (val, num = 2) => {
	if (val === undefined || isNaN(val)) return '';
	const arr = String(val).split('.');
  let integer = Number(arr[0]).toLocaleString();
	let decimalDigits = arr[1];
	let decimals;
	if (decimalDigits) {
		if (decimalDigits.length > num) {
			let current = '';
			let subIndex = 0;
			for(let i = 0; i < decimalDigits.length; i++) {
				if (decimalDigits[i] === '0' && i + 1 < num) {
					current += '0';
				} else {
					subIndex = i;
					break;
				}
			}
			decimals = `${current}${Number(decimalDigits.substring(subIndex, num)) + 1}`
		} else {
			decimals = decimalDigits.substring(0, num);
		}
	}
	let returnVal = `${integer}.`;
	if (decimals) {
    returnVal += `${decimals}`;
    for(let i = 0; i < (num - decimals.length); i++) {
      returnVal += '0'
    }
    return returnVal;
  }
  for(let i = 0; i < num; i++) {
    returnVal += '0'
  }
  return returnVal;
}
export const setTheDecimal = (val, num = 2) => {
  if (val === undefined || isNaN(val)) return '';
  const arr = String(val).split('.');
  let integer = Number(arr[0]).toLocaleString();
	const decimalDigits = arr[1];
  integer = integer.indexOf('-') > -1 ? integer.split('-')[1] : integer;
  const decimals =  decimalDigits ? decimalDigits.substring(0, num) : '';
  let returnVal = `${integer}.`;
  if (decimals) {
    returnVal += `${decimals}`;
    for(let i = 0; i < (num - decimals.length); i++) {
      returnVal += '0'
    }
    return returnVal;
  }
  for(let i = 0; i < num; i++) {
    returnVal += '0'
  }
  return returnVal;
}
export const isMobile = () => {
	if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
		return true
	}
	return false;
}