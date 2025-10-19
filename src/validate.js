import { SEPARATOR } from "./constants.js";
const trimmed = v => v.trim();


const isEmpty = (query) => {
    return query.length === 0;
}

const isCustom = (query) => {
    return query.startsWith(SEPARATOR.CUSTOM_START);
}

const isEmptyArray = (arr) => {
    return arr.length === 1 && arr[0] === '';
}

const isNumber = (arr) => {
    return arr.every(v => trimmed(v) !== '' && !isNaN(+trimmed(v)));
}

const isPositive = (arr) => {
    return arr.every(v => +trimmed(v) > 0);
}

export { isEmpty, isCustom, isEmptyArray, isNumber, isPositive };