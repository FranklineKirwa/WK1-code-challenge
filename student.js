const prompt=require('prompt-sync')({sigint:true});

function  studentMarks(){

    let input=prompt("Enter score (between 0 and 100:");//Informs the user to enter the score

    const score=parseFloat(input);//changes input to floating number;

    if (isNaN(score)||score < 0 || score > 100) {   //checks whether the  input  is below 0 and or over 100 ,else if any condition is true, then pops an error message!
        return  "Error,Score is between 0 and 100.";
    }
    let grade;
    switch(true){
        case (score>79):
            grade="A";
            break;
        case(score>=60 && score<=79):
            grade="B";
            break;
        case(score=>49 && score<=59):
           grade="C";
           break;
        case (score=>40 && score<=49):
            grade="D";
            break;
        case (score<40):
            grade="E";
            break;
    }
    return `Your Grade:${grade}` //returns string displaying grade
}
console.log(studentMarks());
