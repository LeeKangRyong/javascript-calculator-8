import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, ERROR } from "./constants.js";

const Input = {
    async readQuery() {
        const inputMessage = await Console.readLineAsync(INPUT_MESSAGE.INPUT);
        return inputMessage;
    }
}

const Output = {
    printResult(result) {
        Console.print(`${INPUT_MESSAGE.RESULT} ${result}`);
    },

    printError(error) {
        const errorMessage = `${ERROR.ERROR_PREFIX} ${error.message}`;
        Console.print(errorMessage);
        return new Error(errorMessage);
    }
}

export { Input, Output };