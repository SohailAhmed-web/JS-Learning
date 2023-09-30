/*function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

console.log(sum(4,2));
*/
function evenOddCheck(input){
  for (let i = 1; i <= input; i++){
    if (i % 2 === 0){
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}

evenOddCheck(10);