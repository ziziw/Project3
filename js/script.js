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

const nameValidator = () => {
  const nameValue = name.value;

  nameMsgDiv.innerText = 'Please provide your name.';
  nameMsgDiv.style.color = 'red';
  nameMsgDiv.style.marginBottom = '1.125em';
  name.parentNode.insertBefore(nameMsgDiv, name.nextSibling);

  if (nameValue.length > 0){
    name.style.borderColor = 'white';
    nameMsgDiv.hidden = true;
    name.style.marginBottom = '1.125em';
    return true;
  } else {
    name.style.borderColor = 'red';
    nameMsgDiv.hidden = false;
    name.style.marginBottom = '0';
    return false;
  }

}

email.addEventListener('keyup', (event) => {
  if (event.target.value.length === 0){
    email.style.borderColor = 'white';
    emailMsgDiv.hidden = true;
    email.style.marginBottom = '1.125em';
  } else {
    return emailValidator();
  }
});

const emailValidator = () => {
  const emailValue = email.value;
  const regex = /^[^@]+@[^@.]+\.[a-z]+$/i;

  emailMsgDiv.innerText = 'Please provide a valid email.';
  emailMsgDiv.style.color = 'red';
  emailMsgDiv.style.marginBottom = '1.125em';
  email.parentNode.insertBefore(emailMsgDiv, email.nextSibling);

  if (regex.test(emailValue)){
    email.style.borderColor = 'white';
    emailMsgDiv.hidden = true;
    email.style.marginBottom = '1.125em';
    return true;
  } else {
    email.style.borderColor = 'red';
    emailMsgDiv.hidden = false;
    email.style.marginBottom = '0';
    return false;
  }
}

const activitiesValidator = () => {
  activitiesMsgDiv.innerText = 'Please choose an activity.';
  activitiesMsgDiv.style.color = 'red';
  activitiesMsgDiv.style.marginBottom = '1.125em';
  activitiesSection.insertBefore(activitiesMsgDiv, costDiv);

  for (let i = 0; i < activitiesInputs.length; i++){
    if (activitiesInputs[i].checked){
      activitiesLegend.style.color = 'white';
      activitiesMsgDiv.hidden = true;
      activitiesMsgDiv.previousElementSibling.style.marginBottom = '0.5em';
      return true;
    }
  }
  activitiesLegend.style.color = 'red';
  activitiesMsgDiv.hidden = false;
  activitiesMsgDiv.previousElementSibling.style.marginBottom = '0';
  return false;
}

const creditNbrValidator = () => {
  const creditNbrValue = creditNbr.value;
  const regexValid = /^[0-9]{13,16}$/;
  const regexEmpty = /^$/;

  creditNbrMsgDiv.style.color = 'red';
  creditNbrMsgDiv.style.marginBottom = '1.125em';
  creditNbr.parentNode.insertBefore(creditNbrMsgDiv, creditNbr.nextSibling);

  if (regexEmpty.test(creditNbrValue)){
    creditNbrMsgDiv.innerText = 'Please enter a credit card number.';
    creditNbr.style.borderColor = 'red';
    creditNbr.style.marginBottom = '0';
    creditNbrMsgDiv.hidden = false;
    return false;
  } else if (!regexValid.test(creditNbrValue)){
    creditNbrMsgDiv.innerText = 'Please enter a number that is between 13 and 16 digits long.';
    creditNbr.style.borderColor = 'red';
    creditNbr.style.marginBottom = '0';
    creditNbrMsgDiv.hidden = false;
    return false;
  } else {
    creditNbr.style.borderColor = 'white';
    creditNbr.style.marginBottom = '1.125em';
    creditNbrMsgDiv.hidden = true;
    return true;
  }
}

const zipValidator = () => {
  const zipValue = zip.value;
  const regex = /^[0-9]{5}$/;

  zipMsgDiv.innerText = 'Zip Code not valid.';
  zipMsgDiv.style.color = 'red';
  zipMsgDiv.style.marginBottom = '1.125em';
  zip.parentNode.insertBefore(zipMsgDiv, zip.nextSibling);

  if(regex.test(zipValue)){
    zip.style.borderColor = 'white';
    zip.style.marginBottom = '1.125em';
    zipMsgDiv.hidden = true;
    return true;
  } else {
    zip.style.borderColor = 'red';
    zip.style.marginBottom = '0';
    zipMsgDiv.hidden = false;
    return false;
  }
}

const cvvValidator = () => {
  const cvvValue = cvv.value;
  const regex = /^[0-9]{3}$/;

  cvvMsgDiv.innerText = 'CVV not valid.';
  cvvMsgDiv.style.color = 'red';
  cvvMsgDiv.style.marginBottom = '1.125em';
  cvv.parentNode.insertBefore(cvvMsgDiv, cvv.nextSibling);

  if(regex.test(cvvValue)){
    cvv.style.borderColor = 'white';
    cvv.style.marginBottom = '1.125em';
    cvvMsgDiv.hidden = true;
    return true;
  } else {
    cvv.style.borderColor = 'red';
    cvv.style.marginBottom = '0';
    cvvMsgDiv.hidden = false;
    return false;
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
