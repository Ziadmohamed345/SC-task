function getCookie(cookieName) {
  try {
    if (!cookieName) throw new Error("getCookie requires a cookie name!");
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      let [name, value] = cookies[i].split("=");
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

function setCookie(cookieName, cookieValue, expiryDate) {
  try {
    if (!cookieName || cookieValue === undefined) 
        throw new Error("setCookie requires name and value!");
    let cookieStr = cookieName + "=" + encodeURIComponent(cookieValue);
    if (expiryDate) cookieStr += ";expires=" + expiryDate.toUTCString();
    cookieStr += ";path=/"; 
    document.cookie = cookieStr;
  } catch (error) {
    console.error(error.message);
  }
}

function deleteCookie(cookieName) {
  try {
    if (!cookieName) throw new Error("deleteCookie requires a cookie name!");
    let pastDate = new Date();
    pastDate.setTime(pastDate.getTime() - 1);
    document.cookie = cookieName + "=;expires=" + pastDate.toUTCString() + ";path=/";
  } catch (error) {
    console.error(error.message);
  }
}

function allCookieList() {
  let cookies = document.cookie.split("; ");
  let cookieObj = {};
  for (let i = 0; i < cookies.length; i++) {
    let [name, value] = cookies[i].split("=");
    cookieObj[name] = decodeURIComponent(value || "");
  }
  return cookieObj;
}

function hasCookie(cookieName) {
  try {
    if (!cookieName) throw new Error("hasCookie requires a cookie name!");
    return getCookie(cookieName) !== null;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}