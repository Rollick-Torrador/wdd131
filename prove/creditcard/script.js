const theForm = document.querySelector('#formGrid');

function displayError(msg) {
  document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function submitHandler(event) {
  event.preventDefault();

  let errorMsg = '';
  displayError('');

  // card number input
  const cardNumberInput = document.querySelector('#cardnumber');
  const cardNum = cardNumberInput.value.replace(/\s+/g, '').trim(); // allow spaces

  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
  }

  // expiration
  const expYearRaw = document.querySelector('#year').value.trim();
  const expMonthRaw = document.querySelector('#month').value.trim();
  const expYear = Number(expYearRaw);
  const expMonth = Number(expMonthRaw);

  if (!Number.isInteger(expMonth) || expMonth < 1 || expMonth > 12) {
    errorMsg += 'Expiration month must be 01–12\n';
  }

  if (!/^\d{2}$/.test(expYearRaw)) {
    errorMsg += 'Expiration year must be 2 digits\n';
  } else {
    const currentDate = new Date();
    const fullExpYear = 2000 + expYear;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // 1–12

    if (
      fullExpYear < currentYear ||
      (fullExpYear === currentYear && expMonth < currentMonth)
    ) {
      errorMsg += 'Card is expired\n';
    }
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return;
  }

  // Show a confirmation message
  theForm.innerHTML = '<h2>Thank you for your purchase.</h2>';
}

theForm.addEventListener('submit', submitHandler);