function valid(){
  var email=document.form1.email;
  var phone=document.form1.phone;
  var password=document.form1.password;

  if(checkmail(email))
  {
  if(checkphone(phone))
  {
  if(CheckPassword(password))
  {
  }
  }
  }
  return false;
 }
 function checkmail(email){
   var mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if(email.value.match(mail))
 {
  return true;
 }
 else
 {
 alert("You have entered an invalid email address!");
 return false;
 }
 }
 function checkphone(phone){
   var numbers = /^[0-9]+$/;
 if(phone.value.match(numbers))
 {
 return true;
 }
 else
 {
 alert('Phone Number must have numeric characters only');
 return false;
 }
 }
 function CheckPassword(password)
 {
 var passw = /^[A-Z]{1}(?!.*[\s])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7}$/;
 if(password.value.match(passw))
 {
   alert('Succesfully Submitted');
   window.location.reload()
   location.replace('index.html')
   return true;
 }
 else
 {
 alert('Input Password must be [8 characters which contain at least one numeric digit and a special character]')
 return false;
 }
}
