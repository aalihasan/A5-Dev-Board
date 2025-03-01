function disable(x) {
  if (x.disabled = true) {
    alert('Board update succefully')
   
    
  }
  else {
    alert('not')
  }
}

const quantityElement = document.querySelectorAll('#complete');
for (let btn of quantityElement) {
  btn.addEventListener("click", function (event) {
    const amout = event.target.innertext === "+" ? 1 : -1;
    const quantity = document.getElementById('total-number');
    const current = parseInt(quantity.innerText);
    const newQuantity = Math.max(0, current - amout);
    quantity.innerText = newQuantity;
  })
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
    document.getElementById('show').classList.remove("hidden")
  })
}
const payed = document.getElementsByClassName('add-pay');
for (let showing of payed) {
  showing.addEventListener('click', function () {
    document.getElementById('Pay').classList.remove('hidden');
  })
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

const clearHistory = document.getElementById('clear');
for (let clears of clearHistory) {
  clears.addEventListener('click', function () {
    document.getElementsByClassName('fix-mobile').classList.remove;
  })
}