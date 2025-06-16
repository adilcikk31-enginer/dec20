document.addEventListener("DOMContentLoaded", function () {
  const email = localStorage.getItem("userEmail");

  let user = JSON.parse(localStorage.getItem("user"));

  const userDetailsContainer = document.querySelector(".card-body");

  if (userDetailsContainer && user) {
    fetch(" http://195.26.245.5:9505/api/clients/get-details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { name, surname, email, username } = data;
        userDetailsContainer.innerHTML = `
       <h5 class="card-title text-danger fw-bold">User Details</h5>
            <p class="mb-1"><strong>Name:</strong>${name} </p>
            <p class="mb-1"><strong>Surname:</strong>${surname}</p>
            <p class="mb-1"><strong>Email:</strong> ${email}</p>
            <p class="mb-1"><strong>Username:</strong>${username}</p>        
           `;
      });
  } else {
    userDetailsContainer.innerHTML = `
            <h5 class="card-title text-danger fw-bold">User Details</h5>
            <p class="text-warning">No user data found. Please log in.</p>
        `;
  }
});
