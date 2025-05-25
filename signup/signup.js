document.addEventListener("DOMContentLoaded", function () {
  const signup = document.querySelector("#signup-form");
  const messageBox = document.getElementById("message-box");

  signup.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(signup);
    const userData = Object.fromEntries(formData.entries());

    if (Object.values(userData).some((value) => value.trim() === "")) {
      showMessage("All fields are required!", "danger");
      return;
    }

    const newUser = {
      ...userData,
    };

    console.log(newUser);

    addUser(newUser);
    // signup.reset();

    function showMessage(message, type) {
      messageBox.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
      setTimeout(() => {
        messageBox.innerHTML = "";
      }, 3000);
    }
    function addUser(user) {
      fetch("http://195.26.245.5:9505/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        showMessage("User created successfully!", "success");
      })
      .catch((error) => {
        if (error.status == 403) {
          showMessage(
            "User with this email or username already exists!",
            "warning"
          );
        }
      });
    }
    // window.location.href = "../account/account.html";
  });
});
