const reverseString = function (str) {
  return str.split('').reverse().join('');
};

const originalString = 'Sohail Ahmed';
const reversedString = reverseString(originalString);
console.log(reversedString);
