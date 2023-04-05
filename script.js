let hamburger = document.querySelector('.hamburger-menu');
let navigation = document.querySelector('.navigation');
let toggleProfiles = document.getElementsByClassName('toggle-profile');
let listContainer = document.querySelector('.list-container')
let toggleArchive = document.getElementsByClassName('toggle-archive');
let desktopProfiles = document.getElementsByClassName('profiles');
let desktopArchive = document.getElementsByClassName('archive');
let desktopNavigation = document.querySelector('.desktop-navigation');
let desktopNavList = document.querySelector('.desktop-nav-list');
let desktopNavHeader = document.querySelector('.desktop-nav-header')
let content = document.getElementById('content');

hamburger.addEventListener('click', ()=>{
    navigation.classList.toggle('change')
    listContainer.classList.remove('show')
    listContainer.classList.remove('reveal')
});

for(let i = 0; i < toggleProfiles.length; i++){
    toggleProfiles[i].addEventListener('click', ()=>{
    listContainer.classList.toggle('reveal')
    listContainer.classList.remove('show')
})};

for(let i = 0; i < toggleArchive.length; i++){
    toggleArchive[i].addEventListener('click', ()=>{
    listContainer.classList.toggle('show')
    listContainer.classList.remove('reveal')
})};

for(let i = 0; i < desktopProfiles.length; i++){
    desktopProfiles[i].addEventListener('click', ()=>{
    desktopNavigation.classList.toggle('change')
    desktopNavigation.classList.remove('reveal')
})};

for(let i = 0; i < desktopArchive.length; i++){
    desktopArchive[i].addEventListener('click', ()=>{
    desktopNavigation.classList.toggle('reveal')
    desktopNavigation.classList.remove('change')
})};

content.addEventListener('click', ()=>{
    desktopNavigation.classList.remove('reveal')
    desktopNavigation.classList.remove('change')
});

desktopNavList.addEventListener('click', ()=>{
    desktopNavigation.classList.remove('reveal')
    desktopNavigation.classList.remove('change')
});

let sum = 0;
let cashInNaira = document.getElementById('cash-in-naira');
let dollarPercent = document.getElementById('dollar-percent');
let dollarFall = document.getElementById('dollar-fall');
let initialCashInNaira = document.getElementById('initial-cash-in-naira')
let nairaRise = document.getElementById('naira-rise');
let initialInvestment = document.getElementById('initial-investment');
let invstValue = document.getElementById('invst-value');
let fxRate = document.getElementById('fx-rate');
let cashInDollars = document.getElementById('cash-in-dollars');
let profitPercent = document.getElementById('profit-percent');
let avgPurchasePrice = document.getElementById("avg-purchase-price")
let monthlyContribution = document.getElementsByClassName('monthly-contribution');

for(let i = 0; i < monthlyContribution.length; i++){
    sum += Number(monthlyContribution[i].innerHTML)
    cashInNaira.innerHTML = sum + Number(initialCashInNaira.innerHTML);
}

dollarPercent.innerHTML = (((100 - ((Number(cashInNaira.innerHTML)/(Number(initialInvestment.innerHTML) + 
Number(cashInNaira.innerHTML)))*100)))).toFixed(1);

let oldDollarPercent = (((100 - ((Number(initialCashInNaira.innerHTML)/(Number(initialInvestment.innerHTML) + 
Number(initialCashInNaira.innerHTML)))*100)))).toFixed(1);

dollarFall.innerHTML = (oldDollarPercent - dollarPercent.innerHTML).toFixed(1)

let nairaRiseCalc = (((Number(cashInNaira.innerHTML) - Number(initialCashInNaira.innerHTML))/
Number(initialCashInNaira.innerHTML)) * 100).toFixed(1);

nairaRise.innerHTML = nairaRiseCalc.toLocaleString()

invstValue.innerHTML = cashInDollars.innerHTML * fxRate.innerHTML;

profitPercent.innerHTML = (((invstValue.innerHTML - initialInvestment.innerHTML)/initialInvestment.innerHTML) * 
100).toFixed(1)

avgPurchasePrice.innerHTML = (initialInvestment.innerHTML / cashInDollars.innerHTML).toFixed(1)
