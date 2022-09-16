let rating = document.querySelector(".rating");
let rates = document.querySelectorAll(".landing-page span");
let choosen = false;
let submit = document.querySelector("button");
let modal = document.querySelector(".modal-page");
let float = document.querySelector(".float");
let h1 = document.querySelector(".float h1");

for (let i = 0; i < rates.length; i++) {
  function rate() {
    choosen = true;
    rating.textContent = rates[i].textContent;
  }

  rates[i].addEventListener("click", rate);
}

function submitted(e) {
  e.preventDefault();
  if (choosen) {
    modal.style.display = "block";
  } else {
    alert("You haven't rate");
  }
}

submit.addEventListener("click", submitted);

function modalUnroll() {
  choosen = false;
  modal.style.display = "none";
}

modal.addEventListener("click", modalUnroll);

setTimeout(function () {
  float.classList.add("transit");
}, 8000);
