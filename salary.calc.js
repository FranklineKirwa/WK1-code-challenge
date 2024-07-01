const prompt = require('prompt-sync')({ sigint: true });

function income() {// function with two inputs

    const basicSalary = parseFloat(prompt('Enter basic salary: '));// Prompt user for basic salary input

    const benefits = parseFloat(prompt('Enter benefits: '));//rompt user for benefits input

    let  gross= basicSalary + benefits;//calculates gross by adding basic salary and benefits


    //Calculate PAYE based on gross salary using switch statement
    let paye=0;

          switch(true){
            case (gross<24000):
                paye=gross*0.10;
            case (gross>24000 && gross<=32333):
                paye=gross*0.25;
                break;
            case (gross>32334 && gross<500000):
                paye=gross*0.03;
                break;
            case (gross>500001 && gross<800000):
                paye=gross*0.032;
                break;
            default:
                paye=gross*0.035;
}

let nhif=basicSalary * 0.05;

let nssf=basicSalary *  0.04;


let netsalary=gross-paye-nhif-nssf;

return {
    gross: gross,
    paye: paye,
    nhif: nhif,
    nssf: nssf,
    netsalary:netsalary
};
}

//Call the function and print the result
let basicSalary=20000;//example basic salary
    let benefits = 5000;
    console.log("Net Salary:", income(basicSalary, benefits));




