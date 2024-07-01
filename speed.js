const prompt=require('prompt-sync')({sigint:true});

function carLimit(){//creates a function  with a string -speed

 const input=prompt('Enter car speed:');//Requests user to enter car speed

 const speed=parseInt(input);//Allows speed as floating int.

 if (isNaN(speed) || speed <= 0) {
       return "Error! Please enter valid car speed.";//returns an error if car speed is not a number or negative
}

let demeritPoints;

  if (speed>70){
          demeritPoints=Math.floor((speed-70)/5);//calculates points  by dividing by int 5

       console.log(demeritPoints);
    }
    if(demeritPoints>12){//checks if demerit points exceeds 12
        return "License suspended";
      }
  else {
    return "OK";//returns message if speed is below the expected limit(70).
  }

}
console.log(carLimit());

