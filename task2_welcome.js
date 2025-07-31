let username = getCookie("username2");
let gender = getCookie("gender");
let color = getCookie("color");
let visits = parseInt(getCookie("visits")) || 0;

if (!username || !gender) {
  alert("No registration found! Redirecting...");
  location.href = "task2_register.html";
} else {
  visits++;
  let expDate = new Date();
  expDate.setMonth(expDate.getMonth() + 1);
  setCookie("visits", visits, expDate);

  let greeting = document.getElementById("greeting");
  greeting.innerText = "Welcome, " + username + "!";
  greeting.style.color = color;

  document.getElementById("profilePic").src =
    gender === "male" ? "imgs/1.jpg" : "imgs/2.jpg";

  let visitInfo = document.getElementById("visitInfo");
  visitInfo.innerText = "This is your visit number: " + visits;
  visitInfo.style.color = color;
}
