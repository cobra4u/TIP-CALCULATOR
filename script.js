document.querySelector('form').oninput = function(){
    const tips = Number(document.querySelector('.tip-input').value);
    const bill = Number(document.querySelector('.bill').value);
    const tipPercent = document.querySelector('.tip-percentage');
    const tipAmount = document.querySelector('.tip-amount');
    const total = document.querySelector('.total');

    tipPercent.innerHTML = `${tips}%`;
    const tipValue = bill*(tips/100);
    tipAmount.innerHTML = `${tipValue}`;
    total.innerHTML = `${bill+tipValue}`;
}




