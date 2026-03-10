// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((respo) => respo.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(`Error:`, err));

// Async await with fetch

// async function getUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// getUser();

// Post

// async function addUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: "Vikas", age: 22 }),
//     });
//     const data = await response.json();
//     console.log("User added:", data);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// addUser();

//using Localstorage with fetch

// async function fetchAndStore() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const user = await res.json();

//     // store in localStorage
//     localStorage.setItem("user", JSON.stringify(user));

//     console.log("User saved:", user);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchAndStore();

//Abort fetch

// const controller = new AbortController();

// fetch("https://jsonplaceholder.typicode.com/users", {
//   signal: controller.signal,
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log("Aborted:", err));

// controller.abort();

// e.g

async function egFetch() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    // if (!response.ok) {
    //   throw new Error("Network response failed");
    // }

    const user = await response.json();

    localStorage.setItem("user", JSON.stringify(user));
    console.log(user.name);

    let updatedUser = { ...user, name: "Vikas Dharajiya" };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    console.log(updatedUser.name);
  } catch (err) {
    console.log(err);
  }
}
egFetch();

//
let btn = document.querySelector("#Btn");

function firFun() {
  console.log("clicked");
}
function secFun() {
  console.log("2nd fun");
}
btn.onclick = function () {
  console.log("3rd");
};
