function  studentMarks(score){
    if (score < 0 || score > 100) {   //checks whether the input is below 0 and over 100 thus  will return an error!
        return "Error! Score should be between 0 and 100.";
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
    return `Your Grade:${grade}`
}
console.log(studentMarks(150));
