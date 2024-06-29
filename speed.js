function carLimit(speed){//creates a function  with a string -speed
  let demeritPoints;

  if (speed>70){
    demeritPoints=Math.floor((speed-70)/5);//calculates points from the exctracted speed by dividing by int 5
       console.log(demeritPoints);
    }
    if(demeritPoints>12){//checks for exceeded points to return a value/message and prints out
    console.log("License suspended");
      }
  else {
    console.log("OK");//returns "ok " message if speed is below the expected limit(70)
  }

}
console.log(carLimit(74));