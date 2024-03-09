const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const truesignin = document.querySelector('#truesignin');
const truesignup = document.querySelector('#truesignup');
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");

});
// truesignin.addEventListener('click', (event) => {
//     event.preventDefault();
//     alert('signin succesfull,redirecting to homepage...');
//     setTimeout(() => {
//         window.location.href = "../index.html";
//     }, 1000);
// });
// truesignup.addEventListener('click', (event) => {
//     event.preventDefault();
//     alert('signup succesfull');
// });
//event.preventDefault();