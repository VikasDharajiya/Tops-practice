// class cars {
//   constructor(name, brand, user) {
//     this.name = name;
//     this.brand = brand;
//     this.user = user;
//   }
//   login() {
//     console.log(`${this.brand} ${this.name} buying by ${this.user}`);
//   }
// }
// const car1 = new cars("M4CS", "BMW", "Vikas");
// const car2 = new cars("Scorpio S11", "Mahindra", "Tirth");
// const car3 = new cars("Classic 350", "Royal Enfield", "Chintan");

// // car1.login();
// // car2.login();
// // car3.login();
// // console.log(car1.name);

// class carsDetail extends cars {
//   constructor(name, brand, user, fuel) {
//     super(name, brand, user);
//     this.fuel = fuel;
//   }
//   fuelType() {
//     console.log(`${this.name} is a ${this.fuel}  Vehical`);
//   }
// }
// const carT1 = new carsDetail("M4CS", "BMW", "Vikas", "Disel");
// carT1.fuelType();
// carT1.login();

// Promises

// let data;

// setTimeout(() => {
//   data = "User data";
// }, 2000);

// console.log(data);

// ex :

// const foodPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("pizza");
//   }, 2000);
// });
// foodPromise.then((food) => {
//   console.log(food);
// });
// foodPromise.catch((error) => {
//   console.log(error);
// });

// let result = foodPromise;
// console.log(result); // Promise object, not Pizza

//
// const hyPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello promise");
//   }, 1000);
// });

// hyPromise.then((hy) => {
//   console.log(hy);
// });
// hyPromise.catch((err) => {
//   console.log(err);
// });

// const hyPromise = new Promise((resolve, reject) => {
//   const success = false;

//   setTimeout(() => {
//     if (success) {
//       resolve("hello promise");
//     } else {
//       reject("no need to hello");
//     }
//   }, 1000);
// });

// hyPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// chain promis , callback hell soln
// const chainPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(2), 4000); // Step 1
// });

// chainPromise
//   .then((num) => {
//     console.log("Step 1:", num); // 2
//     return num * 2; // Step 2
//   })
//   .then((num) => {
//     console.log("Step 2:", num); // 4
//     return num + 3; // Step 3
//   })
//   .then((num) => {
//     console.log("Step 3:", num); // 7
//   })
//   .catch((err) => console.log("Error:", err));

// // with failure

// const chainFail = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(10), 6000);
// });

// chainFail

//   .then((num) => {
//     console.log("Step 1:", num);
//     return num / 0;
//   })
//   .then((num) => {
//     if (num === Infinity) throw "Invalid number";
//     console.log("Step 2:", num);
//   })
//   .catch((err) => console.log("Caught error:", err));

// ex of chaining

// const exPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(5), 3000);
// });
// exPromise
//   .then((num) => {
//     console.log(`step 1: ${num}`);
//     return num * 2;
//   })
//   .then((num) => {
//     console.log(`step 2: ${num}`);
//     return num - 3;
//   })
//   .then((num) => {
//     console.log(`step 3: ${num}`);
//     return num ** 2;
//   })
//   .then((num) => console.log(`step 4: ${num}`))
//   .catch((Err) => console.log(`caught Error : ${Err}`));

// class clock {
//   start() {
//     this.intervalId = setInterval(() => {
//       console.log("running...");
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     console.log("Stopped");
//   }
// }

// const t1 = new clock();
// t1.start();

// setTimeout(() => t1.stop(), 5000);

//
// const user = {
//   name: "vikas",
//   age: 33,
// };
// localStorage.setItem("user", JSON.stringify(user));

// // const savedUser = JSON.parse(localStorage.getItem("user"));
// // console.log(savedUser.name);

// let userName = JSON.parse(localStorage.getItem("user"));
// console.log(userName.name);

// let updatedUser = { ...user, age: 23 };
// localStorage.setItem("user", JSON.stringify(updatedUser));
// localStorage.removeItem("user");

// let span = document.querySelector("span");
// let Btn = document.querySelector("#Btn");
// let count = 0;

// function countAdd() {
//   count++;
//   span.innerText = count;
//   console.log(count);
// }

// Btn.addEventListener("click", countAdd);

// const user = {
//   name: "Vikas",
//   skills: ["JS", "React"],
// };

// console.log(user.name);
// console.log(user.skills[1]);

// function printAge(age) {
//   console.log(age.toUpperCase());
// }

// printAge(123);
