function calcGrade = (marks) => {
  const sum = marks.reduce((total, mark) => total + mark, 0);
  const average = sum / marks.length;

  let grade = ``;

  if(average >= 90){
    grade = 'A+';
  } else if()