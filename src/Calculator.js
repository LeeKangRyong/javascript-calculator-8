import { Console } from "@woowacourse/mission-utils"
import {
    isInvalid,
    isEmpty,
    isCustom,
    isEmptyArray,
    isNumber,
    isPositive
} from "./validate.js";
import {
    INPUT_MESSAGE,
    ERROR_MESSAGE,
    SEPERATOR
} from "./constants.js";

class Calculator {
    constructor() {}

    async printError(message) {
        Console.print(`[ERROR] ${message}`);
    }

    async readQuery() {
        const inputMessage = await Console.readLineAsync(INPUT_MESSAGE.INPUT);

        if (isInvalid(inputMessage)) {
            throw new Error(ERROR_MESSAGE.INVALID_INPUT);
        }

        if (isEmpty(inputMessage)) {
            Console.print(`${INPUT_MESSAGE.RESULT} 0`);
            return 0;
        }

        return inputMessage;
    }

    seperatorSplit(query) {
        let seperator = '';

        if (isCustom(query)) {
            seperator = query.slice(2, query.indexOf(SEPERATOR.CUSTOM_END))
            query = query.slice(query.indexOf(SEPERATOR.CUSTOM_END)+2);
        } else {
            seperator = `[${SEPERATOR.DEFAULT_COMMA}${SEPERATOR.DEFAULT_COLON}]`
        }

        const arr = query.split(new RegExp(seperator));

        return arr;
    }

    validateArray(arr) {

        if (isEmptyArray(arr)) {
            throw new Error(`${ERROR_MESSAGE.INVALID_VALUE}`);
        }
        if (!isNumber(arr)) {
            throw new Error(`${ERROR_MESSAGE.INVALID_NUMBER}`);
        }

        if (!isPositive(arr)) {
            throw new Error(`${ERROR_MESSAGE.INVALID_POSITIVE}`);
        }
    }
}

export default Calculator;