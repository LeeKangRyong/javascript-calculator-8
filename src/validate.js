import { SEPERATOR } from "./constants.js";
const trimmed = v => v.trim();

export function isEmpty(query) {
    return query.length === 0;
}

export function isCustom(query) {
    return query.startsWith(SEPERATOR.CUSTOM_START);
}

export function isEmptyArray(arr) {
    return arr.length === 1 && arr[0] === '' ;
}

export function isNumber(arr) {
    return arr.every(v => trimmed(v) !== '' && !isNaN(+trimmed(v)));
}

export function isPositive(arr) {
    return arr.every(v => +trimmed(v) > 0);
}