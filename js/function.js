// Write Donation Amount
function getInputValueById(id){
    const inputValue =parseFloat(document.getElementById(id).value);
    if(inputValue >= 1){
        return inputValue;
    }
    else{
        alert('The amount is not correct')
        const modal =document.getElementById('my_modal_1');
        modal.classList.add('hidden')
    }
   
}
// 0 BDT
function getBalanceValueById(id){
 const donateBalance = parseFloat(document.getElementById(id).innerText);
 return donateBalance;
}