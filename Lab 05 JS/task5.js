function checkDrive(speed){
  const speedLimit = 70;
  const penaltyPer5KM = 1;
  const maxPenaltyPoints = 10;

  if(speed <= speedLimit){
    console.log("Good Safe Driving");
  } else {
    const points = Math.floor((speed - speedLimit) / 5);
    if(points <= maxPenaltyPoints) {
      console.log("speed limit crossed by penalty point: ${points}");
    } else {
      console.log("License suspended");
    }
  }
}


checkDrive(125);
checkDrive(65);
checkDrive(72);