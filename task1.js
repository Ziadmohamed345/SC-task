document.getElementById("saveBtn").addEventListener("click", function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let country = document.getElementById("country").value;

  let expDate = new Date();
  expDate.setMonth(expDate.getMonth() + 1);

  setCookie("username", username, expDate);
  setCookie("password", password, expDate);
  setCookie("country", country, expDate);

  alert("Cookies Saved!");
});

document.getElementById("showBtn").addEventListener("click", function () {
  document.getElementById("txt1").innerText = JSON.stringify(
    allCookieList(),
    null,
    2
  );
});

document.getElementById("deleteBtn").addEventListener("click", function () {
  deleteCookie("username");
  deleteCookie("password");
  deleteCookie("country");
  alert("Cookies Deleted!");
});
