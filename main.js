class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

const superCalc = new Calculator();

function stringLength(string) {
  if (string.length < 1) {
    return 'error';
  } else if (string.length > 10) {
    return 'error';
  }
  return string.length;
}

function reverseStr(string) {
  string = [...string].reverse().join('');
  return string;
}

function capString(lowstr) {
  return lowstr.charAt(0).toUpperCase() + lowstr.slice(1);
}

let str = 'hello world';

console.log(str);

console.log(stringLength(str));

console.log(stringLength('sup'));

console.log(reverseStr('good evening'));

console.log(superCalc.add(20, 3));
console.log(superCalc.subtract(21, 3));
console.log(superCalc.multiply(4, 3));
console.log(superCalc.divide(12, 3));

module.exports = { stringLength, reverseStr, Calculator, capString };
