// html

// let p = document.createElement("p");
// p.innerText = "haha kya?";
// p.setAttribute("style", "background-color: black; color:green");

// let body = document.querySelector("body");
// body.append(p);

// let button = document.createElement("button");
// button.innerText = "click me";
// p.prepend(button);

// let div = document.querySelector("div");
// div.setAttribute("class", `${div.getAttribute("class")} box2`);
// console.log(div.getAttribute("class"));

// css

// let div = document.querySelector("div");
// // div.setAttribute("class", "box");    its replace class

// div.classList.add("box");
// div.classList.add("box2");

// div.classList.remove("box2");

// div.classList.toggle("box2");

// console.log(div.className);

// Q

let button = document.querySelector("button");
let body = document.querySelector("body");
// let theme = "light";

// button.addEventListener("click", () => {
//   if (theme === "light") {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     theme = "black";
//   } else {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//     theme = "light";
//   }
// });

let div = document.querySelector("div");
button.addEventListener("click", () => {
  // if (body.className === "dark") {
  //   body.className = "light";
  // } else {
  //   body.className = "dark";
  // }
  body.classList.toggle("dark");
});
