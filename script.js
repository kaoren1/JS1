const buttons = document.querySelectorAll('.operator');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const number1 = parseFloat(document.querySelector('.Number1').value);
    const number2 = parseFloat(document.querySelector('.Number2').value);

    let result;

    switch (button.value) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
    }

    document.querySelector('.Text').value = result;
  });
});
