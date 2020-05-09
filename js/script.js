//https://drive.google.com/file/d/1Vw658-9KUiUZ5yHaABvkytC9W2QBYiW_/view


//job role section
document.querySelector("#other-title").style.display = 'none';

//job role section end

//t-shirt section
const designSelect = document.querySelector('#design');
const designOptions = document.querySelectorAll('#design option');
const colorOptions = document.querySelectorAll('#color option');
const colorSelect = document.querySelector('#color');

//create SelectThemeOption option, add at the beginning.
const pleaseOption = document.createElement('option');
pleaseOption.text = "Please select a T-shirt theme";
colorSelect.add(pleaseOption, 0);
const newColorOptions = colorSelect.children;

//hide Select Theme option in Design select.
designOptions[0].hidden = true;

//Select Theme Option is selected on load.
newColorOptions[0].selected = true;

//hide all color options. except Please Select Option.
for (let i = 1; i < newColorOptions.length; i++){
  newColorOptions[i].hidden = true;
}

designSelect.addEventListener('change', (event) => {
  newColorOptions[0].hidden = true;
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

  if (nameValue.length > 0){
    name.style.borderColor = 'white';
    return true;
  } else {
    name.style.borderColor = 'red';
    return false;
  }

}

const emailValidator = () => {
  const emailValue = email.value;
  const regex = /^[^@]+@[^@.]+\.[a-z]+$/i;

  if (regex.test(emailValue)){
    email.style.borderColor = 'white';
    return true;
  } else {
    email.style.borderColor = 'red';
    return false;
  }
}

const activitiesValidator = () => {
  for (let i = 0; i < activitiesInputs.length; i++){
    if (activitiesInputs[i].checked){
      activitiesLegend.style.color = 'white';
      return true;
    }
  }
  activitiesLegend.style.color = 'red';
  return false;
}

const creditNbrValidator = () => {
  const creditNbrValue = creditNbr.value;
  const regex = /^[0-9]{13,16}$/;

  if(regex.test(creditNbrValue)){
    creditNbr.style.borderColor = 'white';
    return true;
  } else {
    creditNbr.style.borderColor = 'red';
    return false;
  }
}

const zipValidator = () => {
  const zipValue = zip.value;
  const regex = /^[0-9]{5}$/;

  if(regex.test(zipValue)){
    zip.style.borderColor = 'white';
    return true;
  } else {
    zip.style.borderColor = 'red';
    return false;
  }
}

const cvvValidator = () => {
  const cvvValue = cvv.value;
  const regex = /^[0-9]{3}$/;

  if(regex.test(cvvValue)){
    cvv.style.borderColor = 'white';
    return true;
  } else {
    cvv.style.borderColor = 'red';
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
