function getInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue
}   
function getBalanceValueById(id) {
    const donateBalance = parseFloat(document.getElementById(id).innerText);
    return donateBalance;
}