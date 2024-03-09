// console.log("Hi");
let form = document.querySelector("form");
let nam = document.getElementById("name");
let email = document.getElementById("email");
let type = document.getElementById("type")

function SendEmail(){
    let msg = `Name : ${nam.value} <br> Email : ${email.value} <br> Text : ${type.value}`;

    Email.send({
        SecureToken :"94a5da-95eb-4215-94a4-421c005c01a6",
        Host : "smtp.elasticemail.com",
        Username : "18ranajit2005@gmail.com",
        Password : "36F2CE795E2A99273F3BDE52A11908CBE9EC",
        To : '18ranajit2005@gmail.com',
        From : email.value.toString(),
        Subject : "This is the subject",
        Body : msg
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Thank You !!!",
                text: "Our team give you comformation Email soon",
                icon: "success"
            });
              
        }
      }
    );
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    SendEmail();
});