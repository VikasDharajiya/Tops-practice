let h2 = document.querySelector("h2");
h2.innerHTML = "This is chnage by innerhtml";

let a = document.querySelector("h2");
a.style.backgroundColor = "yellow";

h2.addEventListener("click", () => {
  a.style.backgroundColor = "red";
  a.innerHTML = "This is appear when h2 clicked!";
});

let box = document.querySelector("div");

let button = document.querySelector("button");
let offbutton = document.querySelector(".off");

button.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
  box.classList.add("spin");
  box.style.borderRadius = "30%";
});

offbutton.addEventListener("click", () => {
  box.style.backgroundColor = "red";
  box.classList.remove("spin");
  box.style.borderRadius = "0%";
});
