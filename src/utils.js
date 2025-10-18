import { Console } from "@woowacourse/mission-utils";

export function printError(error) {
    const message = `[ERROR] ${error.message}`;
    Console.print(message);
    return new Error(message);
}