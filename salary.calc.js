function income(basicSalary, benefits) {// function with two inputs
    let  gross= basicSalary + benefits;//gross declaration

    let paye=0;
 
          switch(true){
            case (gross<24000):
                paye=gross*0.25;
            case (gross>24000 && gross<=32333):
                paye=gross*0.25;
                break;
            case (gross>32334 && gross<500000):
                paye=gross*0.03;
                break;
            case (gross>500001 && gross<800000):
                paye=ggross*0.032;
                break;
            default:
                paye=gross*0.035;
}

let nhif=basicSalary * 0.05;

let nssf=basicSalary * 0.04;


let netsalary=gross-paye-nhif-nssf;

return {
    gross: gross,
    paye: paye,
    nhif: nhif,
    nssf: nssf,
    netsalary:netsalary
};
}


let basicSalary=10000;//example basic salary
    let benefits = 5000;
    console.log("Net Salary:", income(basicSalary, benefits));




