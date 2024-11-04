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


    if(pinNumberInput === '1234'){

        console.log('adding money to your account')

        // step4 : get the current balance 

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        // step 5: add money input with balance

        const addMoneyNumber = parseFloat(addMoneyInput);

        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);


        // step 6: update the balance in ui/dom

        document.getElementById('account-balance').innerText = newBalance;


    }
    else{

        alert('failed to add money! please try again.')
    }
});