import { SEPARATOR, ERROR_MESSAGE } from "./constants.js";
import { isEmpty, isCustom, isEmptyArray, isNumber, isPositive } from "./validate.js";

const StringCalculator = {

    calculate(query) {
        if (isEmpty(query)) {
            return 0;
        }

        const separatedQuery = this.separatorSplit(query);        
        this.validateArray(separatedQuery);
        return this.addArray(separatedQuery);
    },

    separatorSplit(query) {
        let separator = '';

        if (isCustom(query)) {
            separator = query.slice(SEPARATOR.CUSTOM_START_LENGTH, query.indexOf(SEPARATOR.CUSTOM_END));
            query = query.slice(query.indexOf(SEPARATOR.CUSTOM_END)+SEPARATOR.CUSTOM_END_LENGTH);
        } else {
            separator = `[${SEPARATOR.DEFAULT_COMMA}${SEPARATOR.DEFAULT_COLON}]`;
        }

        const arr = query.split(new RegExp(separator));

        return arr;
    },

    validateArray(arr) {
        if (isEmptyArray(arr)) {
            throw new Error(ERROR_MESSAGE.INVALID_VALUE);
        }

        if (!isNumber(arr)) {
            throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
        }

        if (!isPositive(arr)) {
            throw new Error(ERROR_MESSAGE.INVALID_POSITIVE);
        }
    },

    addArray(arr) {
        const sum = arr.reduce((acc, num) => acc + +num, 0);
        return sum;
    }
}

export { StringCalculator };