import Calculator from "./Calculator.js";
class App {
  async run() {
    const calculator = new Calculator();

    try {
      // Task 1 & 2. 입력 받기 & 입력값 검증
      const query = await calculator.readQuery();
      if (query === 0)  return query;

      // Task 3. 구분자 설정 및 구분
      const arr = await calculator.seperatorSplit(query);
      
      // Task 4. arr 검증

      // Task 5. 값 더해주기

      // Task 6. 결과 출력

    } catch (e) {
      calculator.printError(e.message);
    }

  }
}

export default App;
