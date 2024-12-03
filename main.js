let firstValue = '';
        let operator = '';
        let waitingForSecondValue = false;

        function appendToDisplay(value) {
            const display = document.getElementById('display');
            
            if (waitingForSecondValue) {
                display.value = value;
                waitingForSecondValue = false;
            } else {
                display.value += value;
            }
        }

        function performOperation(selectedOperator) {
            const display = document.getElementById('display');
            const currentValue = display.value;

            // If first value is not set, set it
            if (!firstValue) {
                firstValue = currentValue;
                operator = selectedOperator;
                waitingForSecondValue = true;
            } else {
                // If calculating a chain of operations
                calculate();
                operator = selectedOperator;
            }
        }

        function calculate() {
            const display = document.getElementById('display');
            const secondValue = display.value;

            if (firstValue && operator) {
                let result;
                const num1 = parseFloat(firstValue);
                const num2 = parseFloat(secondValue);

                switch(operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                }

                display.value = result;
                firstValue = result.toString();
                waitingForSecondValue = true;
            }
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
            firstValue = '';
            operator = '';
            waitingForSecondValue = false;
        }