import { Input, Output } from "./views.js";
import { StringCalculator } from "./stringCalculator.js";

class Calculator {
    constructor() {}

    async run() {
        try {
            const query = await Input.readQuery();
            const sum = StringCalculator.calculate(query);

            Output.printResult(sum);
        } catch (e) {
            throw Output.printError(e);
        }
        
    }
}

export default Calculator;

