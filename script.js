const nameContact = document.getElementById("nameContact");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const btnSubmit = document.getElementById("btn-submit");



function formValidation () {
    let nameContactValue = nameContact.value; 
    let emailValue = email.value;

    if(nameContactValue === "") {
        alert("Por favor preencha seu nome");
    } else if(emailValue === "") {
        alert("Por favor preencha seu email");
    }

}

btnSubmit.addEventListener("click", () => {
    formValidation();
})