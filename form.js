function formValidation()
{
var name=document.signup.username.value;
var email=document.signup.email.value;
var phno=document.signup.mobile.value;

if(name=="")
{
  alert("Do not leave name blank");
}

else if(!email.match( /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/))
{
    alert("Enter Valid Email");
}
else if(phno.length!=10)
{
  alert("Enter a valid phone number");
}
else
{
  return true;
}
}
