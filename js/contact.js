// function sendemail()
// { 

//   Email.send({
//     Host:"smtp.gmail.com",
//     Username:"saurabhbagal1234@gmail.com",
//     Password:"password",
//     To:"saurabhbagal1234@gmail.com",
//     From :document.querySelector('.email_field').value,
//     Subject:".", 
//     Body:`Name : ${document.querySelector(".name-field").value} <br>
//     Email: ${document.querySelector(".email-field").value} <br>
//     Message : ${document.querySelector(".message-field").value}`,
    
//   }).then(message=>alert("message sent successfully."));
  
// }
function sendemail(){

Email.send({
  Host : "smtp.elasticemail.com",
  Username : "saurabhbagal1234@gmail.com",
  Password : "9E85BDAB7D72A5F3E6B1F8D5A5194DB6ABDA",
  To : 'saurabhbagal1234@gmail.com',
  From : document.querySelector(".email-field").value,
  Subject : "SB Portfolio ",
  Body : `Name : ${document.querySelector(".namef-ield").value} <br>
       Email: ${document.querySelector(".email-field").value} <br>
       Message : ${document.querySelector(".messagebox-field").value}`,
}).then(
message => alert("sent successfully...")
);
}