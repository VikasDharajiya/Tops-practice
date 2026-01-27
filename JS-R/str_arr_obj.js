// let str = "okijas";
// console.log(str.indexOf("i"));

// Q-1
// let arryy = [1, 2, 3, 4, 5];
// let sum = arryy.reduce((acc, curr) => {
//   return acc + curr;
// });

// let avg = sum / arryy.length;
// console.log(`sum:${sum}`);
// console.log(`average:${avg}`);

// Q-2
// let n = Number(prompt("Entrer a number:"));
// let arr = new Array(n).fill(0);
// console.log(arr);

// Q-3
// let n = Number(prompt("Entrer a number:"));
// let arr = new Array(n).fill(0).map((item, index) => index + 1);
// // arr.forEach((item, index) => {
// //   arr[index] = index + 1;
// // });
// console.log(arr);

// Q-4
// let arr = ["ironman", "black", "captain america", "black panther"];
// console.log(arr);
// arr.push("spiderman");
// arr.unshift("thor");
// console.log(arr);
// // arr[2] = "hawk eye";
// arr.splice(2, 1, "hawk eye");
// console.log(arr);
// console.log(arr.includes("captain america"));

// Q-5
// let test = "vks";
// console.log(Array.isArray(test));
// console.log(Array.from(test));

// console.log(Array.of("vks", 22, true));
// console.log(Array(3));
// console.log(Array.of(3));

// Q-6
// let str = "hello";
// // let str2 = str.split("").reverse().join("");
// // let str2 = Array.from(str).reverse().join("");

// let str2 = [...str].reverse().join("");

// console.log(str2);

// if (str === str2) {
//   console.log("palindrome");
// } else {
//   console.log("not palindrome");
// }

// Q-7
// let str = "hello how are you";
// console.log(str);
// // let newArr = str.split(" ").map((elem) => {
// //   return elem.charAt(0).toUpperCase() + elem.slice(1);
// // });
// // let finalstr = newArr.join(" ");
// // console.log(finalstr);

// const finalStr = str
//   .split(" ")
//   .map((word) => word[0].toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(finalStr);

// object
// Q-1

// let obj = {
//   name: "fesfe",
//   age: 22,
//   city: "param",
// };

// obj.email = "abc@gmail.com";
// delete obj.city;

// for (let key in obj) {
//   console.log(`Value of ${key} is ${obj[key]}`);
// }

// Q-2

// let obj = {
//   first: "vikas",
//   last: "hiteshbhai",
//   middle: "dharajiya",
// };

// let fullName = (para) => {
//   return `full name is ${para.first} ${para.last} ${para.middle} `;
// };

// let fullname = fullName(obj);
// console.log(fullname);

// Q-3
// let obj = {
//   first: "vikas",
//   last: "hiteshbhai",
//   middle: "dharajiya",
// };
// let keys = Object.keys(obj).length;
// console.log(keys);

// Q-4

// let arr = [
//   { name: "vikas", role: "abc" },
//   { name: "tirth", role: "admin" },
//   { name: "chintu", role: "admin" },
// ];

// let filItem = arr.filter((item) => {
//   return item.role === "admin";
// });
// let finalArr = filItem.map(item=>{
//   return item.name
// });
// console.log(finalArr);

// Q-5

// let product = [
//   { id: "1", name: "apple" },
//   { id: "2", name: "samsung galaxy" },
//   { id: "3", name: "asus" },
// ];

// function search(product, searchkeyword) {
//   return product.filter((obj) => {
//     return obj.name.toLowerCase().includes(searchkeyword.toLowerCase());
//   });
// }
// let result = search(product, "sam");
// console.log(result);

// Q-6

// let cmts = [
//   { post: 1, comment: "hello" },
//   { post: 2, comment: "oaky" },
//   { post: 1, comment: "hahahha" },
// ];

// function grupBypost(cmts) {
//   let groupedComments = {};

//   cmts.forEach((obj) => {
//     if (groupedComments.hasOwnProperty(obj.post)) {
//       groupedComments[obj.post].push(obj.comment);
//     } else {
//       groupedComments[obj.post] = [obj.comment];
//     }
//   });
//   console.log(groupedComments);
// }
// grupBypost(cmts);

// Q-7

// let params = {
//   search: "abc",
//   page: 3,
//   sort: "asc",
// };

// function createUrl(params) {
//   // console.log(
//   //   `search=${params.search}&page=${params.page}&sort=${params.sort}`,
//   // );
//   let url = "";
//   for (let key in params) {
//     url = url + `${key}=${params[key]}&`;
//   }
//   console.log(url.slice(0, url.length - 1));
// }

// createUrl(params);

// function createUrl(params) {
//   return new URLSearchParams(params).toString();
// }

// console.log(createUrl(params));
