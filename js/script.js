function disable(x) {
  if ((x.disabled = true)) {
    alert('Board update succefully');
  } else {
    alert('not');
  }
}

const button = document.getElementById('colorButton');
let clickCount = 0;

const colors = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#FF33A1',
  '#A133FF',
  '#33FFF5',
];

button.addEventListener('click', function () {
  clickCount++;
  const colorIndex = (clickCount - 1) % colors.length;
  document.body.style.backgroundColor = colors[colorIndex];
});

const quantityElement = document.querySelectorAll('#complete');
for (let btn of quantityElement) {
  btn.addEventListener('click', function (event) {
    const amout = event.target.innertext === '+' ? 1 : -1;
    const quantity = document.getElementById('total-number');
    const current = parseInt(quantity.innerText);
    const newQuantity = Math.max(0, current - amout);
    quantity.innerText = newQuantity;
  });
}

const quantityElemen = document.querySelectorAll('#complete');
for (let btn of quantityElement) {
  btn.addEventListener('click', function (event) {
    const amout = event.target.innertext === '+' ? 1 : -1;
    const quantity = document.getElementById('Task-number');
    const current = parseInt(quantity.innerText);
    const newQuantity = Math.max(0, amout + current);
    quantity.innerText = newQuantity;
  });
}
const showed = document.getElementsByClassName('fix-mobile');
for (let showing of showed) {
  showing.addEventListener('click', function () {
    document.getElementById('show').classList.remove('hidden');
  });
}
const payed = document.getElementsByClassName('add-pay');
for (let showing of payed) {
  showing.addEventListener('click', function () {
    document.getElementById('Pay').classList.remove('hidden');
  });
}
const reactions = document.getElementsByClassName('reaction');
for (let showing of reactions) {
  showing.addEventListener('click', function () {
    document.getElementById('reaction').classList.remove('hidden');
  });
}
const videos = document.getElementsByClassName('fix-video');
for (let showing of videos) {
  showing.addEventListener('click', function () {
    document.getElementById('video').classList.remove('hidden');
  });
}
const integrates = document.getElementsByClassName('integrate');
for (let showing of integrates) {
  showing.addEventListener('click', function () {
    document.getElementById('integrate').classList.remove('hidden');
  });
}
const reviews = document.getElementsByClassName('review');
for (let showing of reviews) {
  showing.addEventListener('click', function () {
    document.getElementById('review').classList.remove('hidden');
  });
}

//  current date 

const currentDate = new Date();
const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};
const formattedDate = currentDate.toLocaleDateString('en-US', options);

document.getElementById('currentDate').textContent = formattedDate;


// current time



 function getFormattedTime() {
   const currentTime = new Date();
   const hours = currentTime.getHours();
   const minutes = currentTime.getMinutes();
   const seconds = currentTime.getSeconds();
   return `${hours % 12 || 12}:${String(minutes).padStart(2, '0')}:${String(
     seconds
   ).padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
 }

 function setTimes() {
   const timeIds = ['time1', 'time2', 'time3', 'time4', 'time5', 'time6'];
   const formattedTime = getFormattedTime();

   timeIds.forEach(id => {
     document.getElementById(id).textContent = formattedTime;
   });

 }

setTimes();
 



// clear History

document.getElementById('clear-history').addEventListener('click', function () {
  let clearContainer = document.getElementById('activity-log');
  let clearEntries = clearContainer.querySelectorAll('.log-entry');

  clearEntries.forEach(entry => entry.remove());
});




        
       

