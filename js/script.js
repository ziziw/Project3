//https://drive.google.com/file/d/1Vw658-9KUiUZ5yHaABvkytC9W2QBYiW_/view


//job role section
const otherText = document.querySelector("#other-title");
const jobSelect = document.querySelector('#title');
const jobRoles = document.querySelectorAll('#title value');

otherText.style.display = 'none';

jobSelect.addEventListener('change', (event) => {
  if(event.target.value === 'other'){
    otherText.style.display = '';
  } else {
    otherText.style.display = 'none';
  }
});

//job role section end

//t-shirt section
const designSelect = document.querySelector('#design');
const designOptions = document.querySelectorAll('#design option');
const colorOptions = document.querySelectorAll('#color option');
const colorSelect = document.querySelector('#color');
const colorDiv = document.querySelector('#colors-js-puns');

//create SelectThemeOption option, add at the beginning.
const pleaseOption = document.createElement('option');
pleaseOption.text = "Please select a T-shirt theme";
colorSelect.add(pleaseOption, 0);
const newColorOptions = colorSelect.children;

//hide Select Theme option in Design select.
designOptions[0].hidden = true;

//Select Theme Option is selected on load.
newColorOptions[0].selected = true;

//hide color div (color label + select options).
colorDiv.hidden = true;

//hide all color options. except Please Select Option.
for (let i = 1; i < newColorOptions.length; i++){
  newColorOptions[i].hidden = true;
}

designSelect.addEventListener('change', (event) => {
  newColorOptions[0].hidden = true;
  colorDiv.hidden = false;

  if (event.target.value === 'js puns'){
    newColorOptions[1].selected = true;
    for (let x = 1; x < newColorOptions.length; x++){
      if (x <= 3){
        newColorOptions[x].hidden = false;
      } else {
        newColorOptions[x].hidden = true;
      }
    }
  } else {
    newColorOptions[4].selected = true;
    for (let y = 1; y < newColorOptions.length; y++){
      if (y >= 4){
        newColorOptions[y].hidden = false;
      } else {
        newColorOptions[y].hidden = true;
      }
    }
  }
});

//t-shirt section end

//activities section
const costDiv = document.createElement('div');
const activitiesSection = document.querySelector('.activities');
activitiesSection.append(costDiv);
let totalActivityCost = 0;
costDiv.textContent = "Total: $" + totalActivityCost;

const activitiesInputs = document.querySelectorAll('.activities input');

activitiesSection.addEventListener('change', (event) => {
  const eventTarget = event.target;
  const targetCost = parseInt(eventTarget.getAttribute('data-cost'));
  const targetDayTime = eventTarget.getAttribute('data-day-and-time');

  if (eventTarget.checked){
    totalActivityCost += targetCost;
  } else {
    totalActivityCost -= targetCost;
  }

  costDiv.textContent = "Total: $" + totalActivityCost;

  for (let i = 0; i < activitiesInputs.length; i++){
    const currInput = activitiesInputs[i];
    const currDayTime = currInput.getAttribute('data-day-and-time');

    if (targetDayTime === currDayTime && eventTarget !== currInput){
      if (eventTarget.checked){
        currInput.disabled = true;
        currInput.parentNode.style.color = 'grey';
      } else {
        currInput.disabled = false;
        currInput.parentNode.style.color = 'black';
      }
    }
  }

});

//activites section end

//payment section
const paymentOptions = document.querySelectorAll('#payment option');
const paymentSelect = document.querySelector('#payment');
const creditDiv = document.querySelector('#credit-card');
const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');
paymentOptions[0].hidden = true;

paypalDiv.hidden = true;
bitcoinDiv.hidden = true;

paymentSelect.addEventListener('change', (event) => {
  const eventValue = event.target.value;

  if (eventValue === 'credit card'){
    creditDiv.hidden = false;
    paypalDiv.hidden = true;
    bitcoinDiv.hidden = true;
  } else if (eventValue === 'paypal'){
    creditDiv.hidden = true;
    paypalDiv.hidden = false;
    bitcoinDiv.hidden = true;
  } else {
    creditDiv.hidden = true;
    paypalDiv.hidden = true;
    bitcoinDiv.hidden = false;
  }
});

//payment section end.

//validation
const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#mail');
const activitiesField = document.querySelector('.activities');
const activitiesLegend = document.querySelector('.activities legend');
const creditNbr = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

const nameMsgDiv = document.createElement('div');
const emailMsgDiv = document.createElement('div');
const activitiesMsgDiv = document.createElement('div');
const creditNbrMsgDiv = document.createElement('div');
const zipMsgDiv = document.createElement('div');
const cvvMsgDiv = document.createElement('div');

nameMsgDiv.classList.add('msg-div');
emailMsgDiv.classList.add('msg-div');
activitiesMsgDiv.classList.add('msg-div');
creditNbrMsgDiv.classList.add('msg-div');
zipMsgDiv.classList.add('msg-div');
cvvMsgDiv.classList.add('msg-div');

name.addEventListener('keyup', () => {
  return nameValidator();
});

const nameValidator = () => {
  const nameValue = name.value;

  nameMsgDiv.innerText = 'Please provide your name.';
  name.parentNode.insertBefore(nameMsgDiv, name.nextSibling);

  if (nameValue.length > 0){
    name.classList.remove('border-red');
    nameMsgDiv.hidden = true;
    name.style.marginBottom = '1.125em';
    return true;
  } else {
    name.classList.add('border-red');
    nameMsgDiv.hidden = false;
    name.style.marginBottom = '0';
    return false;
  }

}

email.addEventListener('keyup', () => {
    return emailValidator();
});

const emailValidator = () => {
  const emailValue = email.value;
  const regex = /^[^@]+@[^@.]+\.[a-z]+$/i;

  emailMsgDiv.innerText = 'Please provide a valid email.';
  email.parentNode.insertBefore(emailMsgDiv, email.nextSibling);

  if (regex.test(emailValue)){
    email.classList.remove('border-red');
    emailMsgDiv.hidden = true;
    email.style.marginBottom = '1.125em';
    return true;
  } else {
    email.classList.add('border-red');
    emailMsgDiv.hidden = false;
    email.style.marginBottom = '0';
    return false;
  }
}

const activitiesValidator = () => {
  activitiesMsgDiv.innerText = 'Please choose an activity.';
  activitiesSection.insertBefore(activitiesMsgDiv, costDiv);

  for (let i = 0; i < activitiesInputs.length; i++){
    if (activitiesInputs[i].checked){
      activitiesLegend.classList.remove('text-red');
      activitiesMsgDiv.hidden = true;
      activitiesMsgDiv.previousElementSibling.style.marginBottom = '0.5em';
      return true;
    }
  }
  activitiesLegend.classList.add('text-red');
  activitiesMsgDiv.hidden = false;
  activitiesMsgDiv.previousElementSibling.style.marginBottom = '0';
  return false;
}

creditNbr.addEventListener('keyup', () => {
  return creditNbrValidator();
});

const creditNbrValidator = () => {
  const creditNbrValue = creditNbr.value;
  const regexValid = /^[0-9]{13,16}$/;
  const regexEmpty = /^$/;

  creditNbr.parentNode.insertBefore(creditNbrMsgDiv, creditNbr.nextSibling);

  if (regexEmpty.test(creditNbrValue)){
    creditNbrMsgDiv.innerText = 'Please enter a credit card number.';
    creditNbr.classList.add('border-red');
    creditNbr.style.marginBottom = '0';
    creditNbrMsgDiv.hidden = false;
    return false;
  } else if (!regexValid.test(creditNbrValue)){
    creditNbrMsgDiv.innerText = 'Please enter a number that is between 13 and 16 digits long.';
    creditNbr.classList.add('border-red');
    creditNbr.style.marginBottom = '0';
    creditNbrMsgDiv.hidden = false;
    return false;
  } else {
    creditNbr.classList.remove('border-red');
    creditNbr.style.marginBottom = '1.125em';
    creditNbrMsgDiv.hidden = true;
    return true;
  }
}

zip.addEventListener('keyup', () => {
  return zipValidator();
});

const zipValidator = () => {
  const zipValue = zip.value;
  const regexValid = /^[0-9]{5}$/;
  const regexEmpty = /^$/;

  zip.parentNode.insertBefore(zipMsgDiv, zip.nextSibling);

  if (regexEmpty.test(zipValue)){
    zipMsgDiv.innerText = 'Please enter Zip Code.'
    zip.classList.add('border-red');
    zip.style.marginBottom = '0';
    zipMsgDiv.hidden = false;
    return false;
  } else if (!regexValid.test(zipValue)){
    zipMsgDiv.innerText = 'Zip Code has to be 5 digits.'
    zip.classList.add('border-red');
    zip.style.marginBottom = '0';
    zipMsgDiv.hidden = false;
    return false;
  } else {
    zip.classList.remove('border-red');
    zip.style.marginBottom = '1.125em';
    zipMsgDiv.hidden = true;
    return true;
  }
}

cvv.addEventListener('keyup', () => {
  return cvvValidator();
});

const cvvValidator = () => {
  const cvvValue = cvv.value;
  const regexValid = /^[0-9]{3}$/;
  const regexEmpty = /^$/;

  cvv.parentNode.insertBefore(cvvMsgDiv, cvv.nextSibling);

  if (regexEmpty.test(cvvValue)){
    cvvMsgDiv.innerText = 'Please enter a CVV.';
    cvv.classList.add('border-red');
    cvv.style.marginBottom = '0';
    cvvMsgDiv.hidden = false;
    return false;
  } else if (!regexValid.test(cvvValue)){
    cvvMsgDiv.innerText = 'CVV has to be 3 digits.';
    cvv.classList.add('border-red');
    cvv.style.marginBottom = '0';
    cvvMsgDiv.hidden = false;
    return false;
  } else {
    cvv.classList.remove('border-red');
    cvv.style.marginBottom = '1.125em';
    cvvMsgDiv.hidden = true;
    return true;
  }
}

const masterValidator = () => {
  if (paymentSelect.value === 'credit card' || paymentSelect.value === 'select method'){
    return nameValidator() & emailValidator() & activitiesValidator()
        & creditNbrValidator() & zipValidator() & cvvValidator();
  } else {
    return nameValidator() & emailValidator() & activitiesValidator();
  }
}

form.addEventListener('submit', (event) => {
  if (!masterValidator()){
    event.preventDefault();
  }
});

window.onload = () => {
  let input = document.getElementById("name").focus();
}
