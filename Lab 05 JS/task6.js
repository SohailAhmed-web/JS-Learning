const calculateGrade = (marks) => {
    const sum = marks.reduce((total, mark) => total + mark, 0);
    const average = sum / marks.length;
  
    let grade = '';
    
    if (average >= 90) {
      grade = 'A+';
    } else if (average >= 80) {
      grade = 'A';
    } else if (average >= 70) {
      grade = 'B';
    } else if (average >= 60) {
      grade = 'C';
    } else if (average >= 50) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    return {
      sum,
      average,
      grade
    };
  };
  
  
  const marks = [85, 92, 78, 90, 88];
  const result = calculateGrade(marks);
  
  console.log(`Sum of marks: ${result.sum}`);
  console.log(`Average: ${result.average}`);
  console.log(`Grade: ${result.grade}`);