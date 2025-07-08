
      const numberInput1 = document.getElementById("number");
      const numberInput2 = document.getElementById("number2");
      const resultDisplay = document.getElementById("result");

      function add() {
        const n1 = parseFloat(numberInput1.value);
        const n2 = parseFloat(numberInput2.value);

        if (isNaN(n1) || isNaN(n2)) {
          resultDisplay.innerText = "Please enter valid numbers!";
          return;
        }

        const result = n1 + n2;
        resultDisplay.innerText = `${n1} + ${n2} = ${result.toFixed(2)}`;
      }

      function subtract() {
        const n1 = parseFloat(numberInput1.value);
        const n2 = parseFloat(numberInput2.value);

        if (isNaN(n1) || isNaN(n2)) {
          resultDisplay.innerText = "Please enter valid numbers!";
          return;
        }

        const result = n1 - n2;
        resultDisplay.innerText = `${n1} - ${n2} = ${result.toFixed(2)}`;
      }

      function multiply() {
        const n1 = parseFloat(numberInput1.value);
        const n2 = parseFloat(numberInput2.value);

        if (isNaN(n1) || isNaN(n2)) {
          resultDisplay.innerText = "Please enter valid numbers!";
          return;
        }

        const result = n1 * n2;
        resultDisplay.innerText = `${n1} × ${n2} = ${result.toFixed(2)}`;
      }

      function divide() {
        const n1 = parseFloat(numberInput1.value);
        const n2 = parseFloat(numberInput2.value);

        if (isNaN(n1) || isNaN(n2)) {
          resultDisplay.innerText = "Please enter valid numbers!";
          return;
        }

        if (n2 === 0) {
          resultDisplay.innerText = "Division by zero is not allowed!";
          return;
        }

        const result = n1 / n2;
        resultDisplay.innerText = `${n1} ÷ ${n2} = ${result.toFixed(2)}`;
      }