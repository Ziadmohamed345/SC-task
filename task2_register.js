document.getElementById("registerBtn").addEventListener("click", function () {
  let username = document.getElementById("username").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');
  let color = document.getElementById("colorPicker").value;

  if (!username || !gender) {
    alert("Please enter username and select gender!");
    return;
  }

  gender = gender.value;
  let expDate = new Date();
  expDate.setMonth(expDate.getMonth() + 1);

  // Save cookies
  setCookie("username2", username, expDate);
  setCookie("gender", gender, expDate);
  setCookie("color", color, expDate);
  setCookie("visits", 0, expDate);

  // Redirect to welcome page
  location.href = "task2_welcome.html";
});
