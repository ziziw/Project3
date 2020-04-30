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
      } else {
        currInput.disabled = false;
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

window.onload = () => {
  let input = document.getElementById("name").focus();
}
