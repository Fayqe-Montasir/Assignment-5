document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href= 'home.html'
})


document.getElementById('card-btn').addEventListener('click', function () {
    const inputOne = getInputValueById('input-one');
    // const inputTwo = getInputValueById('input-two');
    const donateBalanceOne = getBalanceValueById('donate-balance-one');
    // const donateBalanceTwo = getBalanceValueById('donate-balance-two')
    const newBalance = donateBalanceOne + inputOne;
    // const newBalanceTwo = donateBalanceTwo + inputTwo;
    document.getElementById('donate-balance-one').innerText = newBalance;
    // document.getElementById('donate-balance-two').innerText = newBalanceTwo;
    const totalBalance = getBalanceValueById('total-balance')
    // const totalBalanceTwo = getBalanceValueById('total-balance')
    const newTotalBalance = totalBalance - inputOne;
    // const newTotalBalanceTwo = totalBalanceTwo - inputTwo;

    document.getElementById('total-balance').innerText = newTotalBalance;
    // document.getElementById('total-balance').innerText = newTotalBalanceTwo;


   
    // console.log(inputTwo)
    const historyContainer = document.getElementById('History-title');
    historyContainer.innerHTML = `  
     <div class="border p-8 space-y-4 rounded-2xl mt-6 ">
     <h3 class="text-xl font-bold"> ${inputOne} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
    <p>{newDate()}</P>
     </div>
    <div class="border p-8 space-y-4 rounded-2xl mt-6">
       <h3 class="text-xl font-bold">Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
     </div>
     <div class=" border p-8 space-y-4 rounded-2xl  mt-6">
       <h3 class="text-xl font-bold">$ Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, autem, maiores </p>
     </div>
     `  
// document.getElementById('card-btn').addEventListener('click', function () {
   

    // const historyContainer = document.getElementById('History-title');
    // historyContainer.innerHTML = ` 
    // <div class="border p-8 space-y-4 rounded-2xl mt-6 ">
    //  <h3 class="text-xl font-bold">0 Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
    
    //  </div> 
    //   <div class="border p-8 space-y-4 rounded-2xl mt-6">
    //    <h3 class="text-xl font-bold">${inputTwo}Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
    //  </div>
    //  <div class=" border p-8 space-y-4 rounded-2xl  mt-6">
    //    <h3 class="text-xl font-bold">$ Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
    //    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, autem, maiores </p>
    //  </div>
    //  `  
})
// document.getElementById('card-btn').addEventListener('click', function (event) {
//     const inputOne = getInputValueById('input-one');
//     const donateBalanceOne = getBalanceValueById('donate-balance-one')
//     const newBalance = donateBalanceOne + inputOne;
//     document.getElementById('donate-balance-one').innerText = newBalance;
//     const totalBalance = getBalanceValueById('total-balance')
//     const newTotalBalance = totalBalance - inputOne;
//     document.getElementById('total-balance').innerText = newTotalBalance;

//     const historyContainer = document.getElementById('History-title');
//     historyContainer.innerHTML = `  
//      <div class="border p-8 space-y-4 rounded-2xl mt-6 ">
//      <h3 class="text-xl font-bold"> ${inputOne} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
    
//      </div>
//      <div class="border p-8 space-y-4 rounded-2xl mt-6">
//        <h3 class="text-xl font-bold">${inputTwo} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
//      </div>
//      <div class=" border p-8 space-y-4 rounded-2xl  mt-6">
//        <h3 class="text-xl font-bold">$ Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
//        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, autem, maiores </p>
//      </div>
//      `  
// })



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






