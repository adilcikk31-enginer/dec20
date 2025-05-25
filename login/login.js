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
      fetch("http://195.26.245.5:9505/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.body) {
            localStorage.setItem("user", JSON.stringify(data.body));
            window.location.href = "../account/account.html";
          } else {
            showMessage("Invalid email or password!", "danger");
          }
        });

    });
  }
});
