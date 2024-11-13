// Add an event listener to the form
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values from the form fields
  const loanAmount = parseFloat(document.getElementById("loan-amount").value);
  const interestRate = parseFloat(document.getElementById("interest").value);
  const durationYears = parseFloat(document.getElementById("duration").value);

  // Check if the inputs are valid numbers
  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(durationYears)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  // Calculate monthly payment
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = durationYears * 12;

  const monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  // Output the result to the h1 element
  const resultElement = document.querySelector(".loan-montly");
  resultElement.textContent = `Monthly Payment: Php:${monthlyPayment.toFixed(
    2
  )}`;
});
