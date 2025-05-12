document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form-container form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.querySelector('input[type="text"]').value;
            const password = document.querySelector('input[type="password"]').value;
          
            if (!username || !password) {
                alert('Zəhmət olmasa, bütün xanaları doldurun!');
                return;
            }
            

            localStorage.setItem('username', username);

            localStorage.setItem('userFullName', 'Adil Ceferli');
            localStorage.setItem('userEmail', 'adilceferli40@gmail.com');

            window.location.href = '../account/account.html';
        });
    }
});