import Calculator from "./Calculator.js";
import { printError } from "./utils.js";
class App {
  async run() {
    const calculator = new Calculator();
    
    try {
      // Task 1, Task 2
      const query = await calculator.readQuery();
      if (query === 0)  return query;

      // Task 3
      const arr = calculator.seperatorSplit(query);

      // Task 4
      calculator.validateArray(arr);

      // Task 5, Task 6
      calculator.addArray(arr);
    } catch (e) {
      throw printError(e);
    }
  }
}

export default App;
