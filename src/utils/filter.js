import { setTheDecimal, setTheDecimalAdd, formatDate } from './index';

const filtersMap = {
  setTheDecimal (val, arg) {
    return setTheDecimal(val, arg);
  },
	setTheDecimalAdd (val, arg) {
    return setTheDecimalAdd(val, arg);
  },
	setFormatDate (date, fmt= 'yyyy/MM/dd') {
		return formatDate(new Date(date * 1), fmt);
	}
};
export const filters = {
	install (Vue) {
		for (let key in filtersMap) {
			Vue.filter(key, filtersMap[key]);
		}
	}
};