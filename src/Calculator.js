import { Console } from "@woowacourse/mission-utils"
import {
    isInvalid,
    isEmpty,
    isCustom,
    isNumber,
    isPositive
} from "./validate.js";
import {
    INPUT_MESSAGE,
    ERROR_MESSAGE
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
        }

        return inputMessage;
    }
}

export default Calculator;