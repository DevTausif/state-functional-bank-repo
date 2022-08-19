document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithDrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithDrawTotal = getElementValueById('withdraw-total');
    const newWithDrawTotal = previousWithDrawTotal + newWithDrawAmount;
    setTextElementValueById('withdraw-total', newWithDrawTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal =previousBalanceTotal - newWithDrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})