function elementsWithDigits(inputList) {
    return inputList.filter((element) => /\d/.test(element));
  }
  
  const inputList = ['apple', 'banana123', 'cherry', 'date4', 'fig'];
  const result = elementsWithDigits(inputList);
  
  console.log(result);
  