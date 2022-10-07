/*
1: add event handler with the withdraw button 
2. get the windraw amount from the withdraw input field.
2.5 alson make sure to convert the input into a number by usuing parseFloat.
3. get previous withdrow total.

*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    console.log(newWithDrawAmount);

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousBalanceTotal);

})