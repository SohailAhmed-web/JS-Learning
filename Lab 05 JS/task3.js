function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

console.log(sum(4,2));
