document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formobject = new FormData(loginForm);
      let data = {};
      formobject.forEach((value, key) => {
        data[key] = value;
      });
  console.log(data);
      fetch("http://195.26.245.5:9505/api/auth", {
        method: "POST",
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));

 

   //   window.location.href = "../account/account.html";
    });
  }
});
