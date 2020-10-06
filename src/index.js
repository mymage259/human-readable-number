module.exports = function toReadable (number) {
  let numberStr = String(number);
  let sot = '';
  let des = '';
  let ed = '';

  function one () {
    if (number % 10 === 0) {ed = 'zero'};
    if (number % 10 === 1) {ed = 'one'};
    if (number % 10 === 2) {ed = 'two'};
    if (number % 10 === 3) {ed = 'three'};
    if (number % 10 === 4) {ed = 'four'};
    if (number % 10 === 5) {ed = 'five'};
    if (number % 10 === 6) {ed = 'six'};
    if (number % 10 === 7) {ed = 'seven'};
    if (number % 10 === 8) {ed = 'eight'};
    if (number % 10 === 9) {ed = 'nine'};
    return ed;
  }

  function oneSpase () {
    if (number % 10 === 1) {ed = ' one'};
    if (number % 10 === 2) {ed = ' two'};
    if (number % 10 === 3) {ed = ' three'};
    if (number % 10 === 4) {ed = ' four'};
    if (number % 10 === 5) {ed = ' five'};
    if (number % 10 === 6) {ed = ' six'};
    if (number % 10 === 7) {ed = ' seven'};
    if (number % 10 === 8) {ed = ' eight'};
    if (number % 10 === 9) {ed = ' nine'};
    return ed;
  }

  function eleventeen () {
    if (number % 100 === 10) {ed = 'ten'};
    if (number % 100 === 11) {ed = 'eleven'};
    if (number % 100 === 12) {ed = 'twelve'};
    if (number % 100 === 13) {ed = 'thirteen'};
    if (number % 100 === 14) {ed = 'fourteen'};
    if (number % 100 === 15) {ed = 'fifteen'};
    if (number % 100 === 16) {ed = 'sixteen'};
    if (number % 100 === 17) {ed = 'seventeen'};
    if (number % 100 === 18) {ed = 'eighteen'};
    if (number % 100 === 19) {ed = 'nineteen'};
    return ed;
  }

  function eleventeenSpase () {
    if (number % 100 === 10) {ed = ' ten'};
    if (number % 100 === 11) {ed = ' eleven'};
    if (number % 100 === 12) {ed = ' twelve'};
    if (number % 100 === 13) {ed = ' thirteen'};
    if (number % 100 === 14) {ed = ' fourteen'};
    if (number % 100 === 15) {ed = ' fifteen'};
    if (number % 100 === 16) {ed = ' sixteen'};
    if (number % 100 === 17) {ed = ' seventeen'};
    if (number % 100 === 18) {ed = ' eighteen'};
    if (number % 100 === 19) {ed = ' nineteen'};
    return ed;
  }

  function two () {
    if (numberStr[0] === '2') {des = 'twenty'};
    if (numberStr[0] === '3') {des = 'thirty'};
    if (numberStr[0] === '4') {des = 'forty'};
    if (numberStr[0] === '5') {des = 'fifty'};
    if (numberStr[0] === '6') {des = 'sixty'};
    if (numberStr[0] === '7') {des = 'seventy'};
    if (numberStr[0] === '8') {des = 'eighty'};
    if (numberStr[0] === '9') {des = 'ninety'};
    return des;
  }

  function twoSpase () {
    if (numberStr[1] === '2') {des = ' twenty'};
    if (numberStr[1] === '3') {des = ' thirty'};
    if (numberStr[1] === '4') {des = ' forty'};
    if (numberStr[1] === '5') {des = ' fifty'};
    if (numberStr[1] === '6') {des = ' sixty'};
    if (numberStr[1] === '7') {des = ' seventy'};
    if (numberStr[1] === '8') {des = ' eighty'};
    if (numberStr[1] === '9') {des = ' ninety'};
    return des;
  }

  function hundreds () {
    if (numberStr[0] === '1') {sot = 'one hundred'};
    if (numberStr[0] === '2') {sot = 'two hundred'};
    if (numberStr[0] === '3') {sot = 'three hundred'};
    if (numberStr[0] === '4') {sot = 'four hundred'};
    if (numberStr[0] === '5') {sot = 'five hundred'};
    if (numberStr[0] === '6') {sot = 'six hundred'};
    if (numberStr[0] === '7') {sot = 'seven hundred'};
    if (numberStr[0] === '8') {sot = 'eight hundred'};
    if (numberStr[0] === '9') {sot = 'nine hundred'};
    return sot;
  }

  if (numberStr.length === 3) {
    if (number % 100 < 20 && number % 100 >= 10) {
        return hundreds() + eleventeenSpase();
    }
    else if (number % 100 < 10) {
        return hundreds() + oneSpase();
    }
    else {
        return hundreds() + twoSpase() + oneSpase();
    }
  }
  if (numberStr.length === 2) {
    if (number < 20) {
        return eleventeen();
    }
    else {
        return two() + oneSpase();
    }
  }
  if (numberStr.length === 1) {
    return one();
  }
}
