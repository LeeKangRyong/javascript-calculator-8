import Calculator from "./Calculator.js";
class App {
  async run() {
    const calculator = new Calculator();

    try {
      const query = await calculator.readQuery();

    } catch (e) {
      calculator.printError(e.message);
    }

  }
}

export default App;
