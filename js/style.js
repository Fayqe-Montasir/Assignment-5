document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href= 'home.html'
})


document.getElementById('card-btn').addEventListener('click', function () {
    const inputOne = getInputValueById('input-one');
    const donateBalanceOne = getBalanceValueById('donate-balance-one');
    const newBalance = donateBalanceOne + inputOne;
    document.getElementById('donate-balance-one').innerText = newBalance;
    const totalBalance = getBalanceValueById('total-balance')
    const newTotalBalance = totalBalance - inputOne;
    
    document.getElementById('total-balance').innerText = newTotalBalance;
    const historyContainer = document.getElementById('History-title');
    historyContainer.innerHTML = `  
     <div class="border p-8 space-y-4 rounded-2xl mt-6 ">
     <h3 class="text-xl font-bold"> ${inputOne} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
    <p> Date: ${new Date().toDateString() } </P>
     </div>
     ` 
}); 
document.getElementById('card-btn-two').addEventListener('click', function (){
    
    const inputTwo = getInputValueById('input-two');
    const donateBalanceTwo = getBalanceValueById('donate-balance-two')
    const newBalanceTwo = donateBalanceTwo + inputTwo;
    document.getElementById('donate-balance-two').innerText = newBalanceTwo;
    const totalBalanceTwo = getBalanceValueById('total-balance')
    const newTotalBalanceTwo = totalBalanceTwo - inputTwo;
    document.getElementById('total-balance').innerText = newTotalBalanceTwo;
    
    
    
    const historyContainer = document.getElementById('History-title');
    historyContainer.innerHTML = `  
    <div class="border p-8 space-y-4 rounded-2xl mt-6">
    <h3 class="text-xl font-bold">${inputTwo} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
    <p> Date: ${new Date().toDateString() } </P>
    </div>
    `  
})
document.getElementById('card-btn-3').addEventListener('click', function () {
    const inputThree = getInputValueById('input-3');
    const donateBalanceThree = getBalanceValueById('donate-balance-three')
    const newBalanceThree = donateBalanceThree + inputThree;
    document.getElementById('donate-balance-three').innerText = newBalanceThree;
    console.log(newBalanceThree)
    const totalBalanceThree = getBalanceValueById('total-balance')
    const newTotalBalanceThree = totalBalanceThree - inputThree;
    document.getElementById('total-balance').innerText = newTotalBalanceThree;

    const historyContainer = document.getElementById('History-title');
    historyContainer.innerHTML = `  
     <div class=" border p-8 space-y-4 rounded-2xl  mt-6">
       <h3 class="text-xl font-bold">${inputThree} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
       <p>  Date: ${new Date().toDateString() } </p>
     </div>
     `  
})



const HistoryBtn = document.getElementById('History-btn');
const DonationBtn = document.getElementById('Donation-btn');
HistoryBtn.addEventListener('click', function () {

    HistoryBtn.classList.add('bg-lightgreen');
    HistoryBtn.classList.remove('text-gray-500');
    DonationBtn.classList.remove('bg-lightgreen');

    document.getElementById('Donation-title').classList.add('hidden')
    document.getElementById('History-title').classList.remove('hidden')
})
DonationBtn.addEventListener('click', function(){
    DonationBtn.classList.add('bg-lightgreen');
    DonationBtn.classList.remove('text-gray-500');
    HistoryBtn.classList.remove('bg-lightgreen');
    document.getElementById('Donation-title').classList.remove('hidden')
    document.getElementById('History-title').classList.add('hidden')
})






