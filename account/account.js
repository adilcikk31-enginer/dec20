document.addEventListener('DOMContentLoaded', function() {

    const username = localStorage.getItem('username');
    const fullName = localStorage.getItem('userFullName');
    const email = localStorage.getItem('userEmail');
    

    const userDetailsContainer = document.querySelector('.card-body');
    
    if (userDetailsContainer && username) {
        userDetailsContainer.innerHTML = `
            <h5 class="card-title text-danger fw-bold">User Details</h5>
            <p class="mb-1"><strong>Name:</strong> ${fullName || 'Adil'}</p>
            <p class="mb-1"><strong>Surname:</strong> Ceferli</p>
            <p class="mb-1"><strong>Email:</strong> ${email || 'adilceferli40@gmail.com'}</p>
            <p class="mb-1"><strong>Username:</strong> ${username}</p>
        `;
    } else {
        userDetailsContainer.innerHTML = `
            <h5 class="card-title text-danger fw-bold">User Details</h5>
            <p class="text-warning">No user data found. Please log in.</p>
        `;
    }
});