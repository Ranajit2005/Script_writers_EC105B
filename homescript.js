const register = document.getElementById('register');
register.addEventListener("click", function () {
    window.location.href = "login/login_page.html";
});

let service = document.getElementById('gsv');
service.addEventListener("click", function () {
    window.location.href = "./Service/service.html";
});

gsap.from("#HOME,#ABOUT,#INS,#SER,#CONT", {
    opacity: 0,
    x: 100,
    stagger: 0.2,
    duration: 1
});
gsap.from(".content h1", {
    opacity: 0,
    x: -50,
    stagger: 0.1,
    duration: 0.5
});
gsap.from(".content p", {
    opacity: 0,
    x: 50,
    stagger: 0.1,
    delay:0.2,
    duration: 1
});
