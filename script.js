const form = document.getElementById('tipForm');

// Input elements
const billAmountInput = document.getElementById('billAmount');
const serviceQualityInput = document.getElementById('serviceQuality');
const customTipAmountInput = document.getElementById('custom-tip-amount');
const customTipPercentageInput = document.getElementById('custom-tip-percentage')
const reviewInput = document.getElementById('review');

// Elements in result container
const billAmountResult = document.getElementById('billAmountResult');
const serviceQualityResult = document.getElementById('serviceQualityResult');
const tipAmountResult = document.getElementById('tipAmountResult');
const totalAmountResult = document.getElementById('totalAmountResult');

const resultsContainer = document.getElementById('resultsContainer');
const recalculateButton = document.getElementById('recalculateBtn');
const formContainer = document.getElementById('form-container');

function calculateTip(billAmount, serviceRating, tipAmount, tipPercent) {
    if (tipPercent){
        return billAmount * (tipPercent / 100);
    } else if (tipAmount) {
        return tipAmount;
    } else{
        if (serviceRating <= 5){
            return billAmount * 0.1; // Tip 10%
        }
        else if (serviceRating <= 7){
            return billAmount * 0.12; // Tip 12%
        }
        else if(serviceRating <= 9){
            return billAmount * 0.15; // Tip 15%
        }
        else if(serviceRating == 10){
            return billAmount * 0.2; // Tip 20%
        }
    }
}

function updateResults() {
  const billAmount = parseFloat(billAmountInput.value);
  const serviceQuality = parseInt(serviceQualityInput.value);
  const customTipAmount = parseFloat(customTipAmountInput.value);
  const customTipPercentage = parseInt(customTipPercentageInput.value);

  const review = reviewInput.value; // Get the review

  const tipAmount = calculateTip(billAmount, serviceQuality, customTipAmount, customTipPercentage);
  const totalAmount = billAmount + tipAmount;

  billAmountResult.textContent = `$${billAmount.toFixed(2)}`;
  serviceQualityResult.textContent = serviceQuality;
  tipAmountResult.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountResult.textContent = `$${totalAmount.toFixed(2)}`;

  form.reset();

  formContainer.classList.add('d-none'); // Hide the form container
  resultsContainer.classList.remove('d-none'); // Show results container
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateResults();
});

recalculateButton.addEventListener('click', function() {
  resultsContainer.classList.add('d-none'); // Hide results container
  formContainer.classList.remove('d-none'); // Show form again
});
