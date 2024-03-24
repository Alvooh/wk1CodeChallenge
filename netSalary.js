function show(value){
    console.log(value);
}

// input = Basic salary 30,000
// input = Benefits 4,200

let basicSalary = 600000;
let benefit = 4200;

// 

//output = tax
function tax(taxableIncome){
    let paye = 0;
    let grossTax = 0;
    let rated = 0; 
    let personalRelief = 2400;

    if(taxableIncome > 0 && taxableIncome <= 24000){
        grossTax = (taxableIncome*0.10);
    }else if (taxableIncome >= 24001 && taxableIncome <= 32333){
        rated = (taxableIncome - 24000) * 0.25;
        grossTax = 2400 + rated
    }else if (taxableIncome >= 32334 && taxableIncome <= 500000){
        rated = (taxableIncome - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
    }else if (taxableIncome >= 500001 && taxableIncome <= 800000){
        rated = (taxableIncome - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated  
    }else if(taxableIncome > 800000){
        rated = (taxableIncome - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
    }
    paye =  ~~(grossTax - personalRelief);
    netsalary = (taxableIncome - paye);
  return { paye, netsalary } 
}
show(tax(75000))

//output = NHIFDeductions

//output = NSSFDeductions

//output = Gross salary

//output = Net Salary
/*

gross salary = 75000

nssf = (75000 * 0.06) = 4500
nhif = 1400 //(1400 * 0.15) = 210 * 
75000 - (nssf + nhif)
let taxableIncome = 75000 - (nssf + nhif)5900 //69100
let payee = tax(taxableIncome).paye
let net salary = tax(taxableIncome).netsalary

NSSFDeductions = 4500
NHIFDeductions = 1400
payee (i.e. Tax) = 51186.65 // tax.paye
gross salary = 75000
net salary = 17913.35 // tax.netsalary

*/