/*function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

console.log(sum(4,2));
*/
function printString(obj){
  if(typeof obj !== 'string' || obj === null){
    console.log("Invalid input");
  }
  for (const key in obj){
    if (typeof obj[key] === 'string') {
       console.log('${key}: ${obj[key]}');
    }
  }
}

const myObject = {
  name: "Sohail",
  age: 23,
  address: "B3 100ft road, Sukkur",
  email: "sohail.bscsf19@iba-suk.edu.pk"
};

printString(myObject);