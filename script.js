let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
const loginBTN = document.querySelector('#login--btn');
const errorMess = document.querySelector('.error--txt');

loginBTN.addEventListener('click', () =>{
    const username = usernameInput.value;
    const password = passwordInput.value;

    if(username == 'admin' && password == 'qwerty'){
        alert('Login Sucessfully!');
        window.location="dashboard.html";
    }else{
       errorMess.classList.add('active');
    }
})

