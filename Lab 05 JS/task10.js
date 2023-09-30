function replWithNegOne(numbers) {
    if (numbers.length === 0) {
      return { modifiedArray: numbers, count: 0 };
    }
  
    const min = Math.min(...numbers);
    const modifiedArray = numbers.map(num => (num === min ? -1 : num));
    const count = modifiedArray.filter(num => num === -1).length;
  
    return { modifiedArray, count };
  }
  
  // Example usage:
  const numbersArray = [4, 2, 1, 3, 1, 4, 1];
  const result = replWithNegOne(numbersArray);
  
  console.log("Modified array:", result.modifiedArray);
  console.log("Number of occurrences of minimum value replaced:", result.count);
  