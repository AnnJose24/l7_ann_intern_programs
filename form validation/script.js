var nameError =document.getElementById("name-error");
var phoneError =document.getElementById("phone-error");
var emailError =document.getElementById("email-error");
var messageError =document.getElementById("message-error");
var submitError =document.getElementById("submit-error");

function validateName(){
    var name=document.getElementById("contact-name").value;

    if(name.length=0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write full name';
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}
function validatePhone(){

    var phone=document.getElementById("contact-phone").value;

    if(phone.length==0){
        phoneError.innerHTML='Phone is required';
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML='10 digit Phone number is required';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='only digits';
        return false;
    }
    phoneError.innerHTML='valid';
    return true;

}
function validateEmail(){

    var email=document.getElementById("contact-email").value;

    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;
    }
   
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='email invalid';
        return false;
    }
    emailError.innerHTML='valid';
    return true;

}

function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left=required-message.length;

    if(left>0){
        messageError.innerHTML=left+'more characters required';
        return false;
    }

    messageError.innerHTML='valid';
    return true;
}
 
function validateForm(){
    if(!validateName()|| !validateEmail() || !validatePhone() || !validateMessage()){
        submitError.style.display='block'
        submitError.innerHTML='Please fix the error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}