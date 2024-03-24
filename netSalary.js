// Function to calculate net salary based on taxable income
function CalculateNetSalary(taxableIncome) {
    let paye = 0; // Initialize PAYE (Pay As You Earn) tax
    let gross; // Initialize gross salary
    let rated; // Initialize tax rated
    let netsalary; // Initialize net salary
    let personalRelief = 2400; // Define personal relief constant
  
    // Determine tax rates based on taxable income ranges
    if (taxableIncome > 0 && taxableIncome <= 24000) {
      gross = taxableIncome * 0.10; // Calculate gross salary
    } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
      rated = (taxableIncome - 24000) * 0.25;
      gross = 2400 + rated; // Calculate gross salary
    } else if (taxableIncome >= 32334 && taxableIncome <= 500000) {
      rated = (taxableIncome - 32333) * 0.30;
      gross = 2400 + 2083.25 + rated; // Calculate gross salary
    } else if (taxableIncome >= 500001 && taxableIncome <= 800000) {
      rated = (taxableIncome - 500000) * 0.325;
      gross = 2400 + 2083.25 + 140300.1 + rated; // Calculate gross salary
    } else if (taxableIncome > 800000) {
      rated = (taxableIncome - 800000) * 0.35;
      gross = 2400 + 2083.25 + 140300.1 + 97500 + rated; // Calculate gross salary
    }
  
    paye = gross - personalRelief; // Calculate PAYE tax
    netsalary = taxableIncome - paye; // Calculate net salary
  
    // Return the calculated net salary with an alert
    return alert(`Your net salary is ${netsalary}`);
  }
  
  // Function to prompt the user to enter taxable income
  function promptTaxableIncome() {
    let taxableIncome = prompt('Enter your taxable income: '); // Prompt user for input
    let net = CalculateNetSalary(parseFloat(taxableIncome)); // Calculate net salary
    return net;
  }
  
  // Invoke the function to start the program
  promptTaxableIncome();
  