const register = document.getElementById('register');
register.addEventListener("click", function () {
    window.location.href = "login/login_page.html";
});

let service = document.getElementById('gsv');
service.addEventListener("click",function(){
    window.location.href = "./Service/service.html";
})