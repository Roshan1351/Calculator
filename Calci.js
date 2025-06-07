const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";
const operators = ['+', '-', '*', '/', '%'];

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;
    const lastChar = string[string.length - 1];

    if (value === '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else if (value === 'AC') {
      string = "";
      input.value = "";
    } else if (value === 'DEL') {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      if (operators.includes(value) && operators.includes(lastChar)) {
        input.value = "Error";
      }
      if (value === '.') {
        const parts = string.split(/[\+\-\*\/\%]/);
        const lastNumber = parts[parts.length - 1];
        if (lastNumber.includes('.')) {
          input.value="Error";
        }
      }
      string += value;
      input.value = string;
    }
  });
});
