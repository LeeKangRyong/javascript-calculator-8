export function isInvalid(query) {
    return query === 'null' || query === 'undefined';
}

export function isEmpty(query) {
    return query.length === 0;
}

export function isCustom(query) {
    return query.startsWith('//');
}

export function isNumber(arr) {
    return arr.every(v => typeof (+v) === 'number');
}

export function isPositive(arr) {
    return arr.every(v => +v > 0);
}