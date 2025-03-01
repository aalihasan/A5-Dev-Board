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

