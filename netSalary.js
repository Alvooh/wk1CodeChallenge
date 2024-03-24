// Tax brackets defining different income ranges and tax rates
const TaxBrackets = [
    { lower: 0, upper: 12298, rate: 10 }, // First tax bracket: income between 0 and 12298 taxed at 10%
    { lower: 12299, upper: 23885, rate: 15 }, // Second tax bracket: income between 12299 and 23885 taxed at 15%
    { lower: 23886, upper: 35472, rate: 20 }, // Third tax bracket: income between 23886 and 35472 taxed at 20%
    { lower: 35473, upper: 47059, rate: 25 }, // Fourth tax bracket: income between 35473 and 47059 taxed at 25%
    { lower: 47060, upper: Infinity, rate: 30 }, // Fifth tax bracket: income above 47060 taxed at 30%
  ];
  
  // NHIF rates defining different income ranges and corresponding deductions
  const nhifRates = [
    { lower: 0, upper: 5999, amount: 150 }, // NHIF deduction for income between 0 and 5999 is 150
    { lower: 15000, upper: 19999, amount: 600 }, // NHIF deduction for income between 15000 and 19999 is 600
   
  ];
  
  // NSSF (National Social Security Fund) rate for employees
  const nnsfRateEmployee = 0.06; // Employee contribution rate to NSSF is 6%
  
  // Function to generate tax based on gross salary and tax brackets
  function generateTax(grossSalary) {
    let tax = 0;
    // Iterate through tax brackets
    for (const bracket of TaxBrackets) {
      // If gross salary is within the current bracket range
      if (grossSalary <= bracket.lower) {
        break; // Exit loop as the remaining brackets won't apply
      }
      // Calculate taxable amount within the current bracket
      const taxableAmount = Math.min(grossSalary, bracket.upper) - bracket.lower;
      // Add tax based on taxable amount and bracket rate
      tax += taxableAmount * (bracket.rate / 100);
    }
    return tax; // Return calculated tax
  }
  
  // Function to calculate NHIF deduction based on gross salary
  function calculateNhif(grossSalary) {
    let nhif = 0;
    // Iterate through NHIF rate brackets
    for (const bracket of nhifRates) {
      // If gross salary is within the current bracket range
      if (grossSalary <= bracket.lower) {
        break; // Exit loop as the remaining brackets won't apply
      }
      // If gross salary falls within the current bracket, set NHIF deduction
      if (grossSalary <= bracket.upper) {
        nhif = bracket.amount;
        break; // Exit loop as NHIF has been determined
      }
    }
    return nhif; // Return calculated NHIF deduction
  }
  
  // Function to calculate NSSF contributions for both employee and employer
  function calculateNssf(grossSalary) {
    // Calculate NSSF contributions for both employee and employer
    const nssfEmployee = grossSalary * nnsfRateEmployee; // Employee contribution
    const nssfEmployer = grossSalary * nnsfRateEmployee; // Employer contribution (assuming the same rate)
    return { nssfEmployee, nssfEmployer }; // Return contributions as an object
  }
  
  // Function to calculate net salary, including taxes and deductions
  function calcNetSalary(basicSalary, benefits) {
    // Calculate gross salary by adding basic salary and benefits
    const grossSalary = basicSalary + benefits;
    // Calculate tax based on gross salary
    const tax = generateTax(grossSalary);
    // Calculate NHIF deduction based on gross salary
    const nhif = calculateNhif(grossSalary);
    // Calculate NSSF contributions for employee and employer
    const { nssfEmployee } = calculateNssf(grossSalary);
    // Calculate net salary after deducting tax, NHIF, and NSSF from gross salary
    const netSalary = grossSalary - tax - nhif - nssfEmployee;
    // Return an object containing net salary, tax, NHIF, NSSF contributions, and gross salary
    return { netSalary, tax, nhif, nssfEmployee, grossSalary };
  }
  
  // Example usage: Calculate net salary for a basic salary of 40000 and benefits of 10000
  console.log(calcNetSalary(40000, 10000));
  