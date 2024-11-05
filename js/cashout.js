document.getElementById('btn-cash-out').addEventListener('click', function(event){

    event.preventDefault();

    console.log('cash out button clicked')

    const cashout = document.getElementById('input-cash-out').value;

    const cashoutNumber = parseFloat(cashout);

    const pinNumber = document.getElementById('input-cash-out-pin').value;


    if(pinNumber === '1234'){

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);


        const newBalance  = balanceNumber - cashoutNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{

        alert('Failed to cash out')
    }
})