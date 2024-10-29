// add money to the account

document.getElementById('btn-add-money').addEventListener('click', function(event){

    // prevent page reload after form submit

    event.preventDefault()

    console.log('money add button clicked');

    // step-2: get money to be added to the account

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);


    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
});