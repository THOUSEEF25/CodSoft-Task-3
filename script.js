var disp = document.getElementById('display');
var exp = '';

function number(number) {
  exp += number;
  disp.value = exp;
}

function operator(operator) {
  exp += operator;
  disp.value = exp;
}

function clearDisp() {
  exp = '';
  disp.value = '';
}

function calculate() {
  try {
    let result = eval(exp);
    disp.value = result;
    exp = '';
  } catch (error) {
    disp.value = 'Error';
    exp = '';
  }
}






