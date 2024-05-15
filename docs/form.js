function validate_form()
{
    var user_id=document.myform.user_id.value;
    var passwd=document.myform.password.value;
    var passwd_repeat=document.myform.password_repeat.value;
    var name=document.myform.name.value;
    var gender=document.myform.gender.value;
    var address=document.myform.address.value;
    var country=document.myform.country.value;
    var pincode=document.myform.pincode.value;
    var mail_id=document.myform.mail_id.value;
    var contact=document.myform.contact.value;

    var m=document.getElementById("male");
    var f=document.getElementById("female");

    var alpha_num=/^[0-9a-zA-Z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    
    if(user_id==null || user_id=="")
    {
        alert("User ID can't be empty");
    }
    else if(!user_id.match(alpha_num))
    {
        window.alert("User ID should be alphanumeric !");
    }
    
    
    else if (passwd==null || passwd=="")
    {
        alert("Password can't be empty");
    }
    else if(passwd.length<6 || passwd.length>15)
    {
        alert("Password should be between 6-15 characters!");
    }
    else if(passwd!=passwd_repeat)
    {
        alert("Passwords do not match");
    }
    
    
    else if(name==null || name=="")
    {
        alert("Name can't be empty");
    }
    
    
    else if(!m.checked && !f.checked)
    {
        alert("Please select gender ! ");
    }
    
    
    else if(address==null || address=="")
    {
        alert("Address can't be empty ! ");
    }
    
    
    else if(country==null)
    {
        alert("Please select country ! ");
    }
    
    
    else if(pincode==null || pincode=="")
    {
        alert("Pincode can't be empty ! ");
    }
    
    
    else if(mail_id==null || mail_id=="")
    {
        alert("Email can't be empty ! ");
    }
    else if(!mail_id.match(mailformat))
    {
        alert("You have entered an invalid email address !");
    }


    else if(contact.length<7 || contact.length>15)
    {
        alert("Invalid contact number ! ");
    }


    else
    {
        alert("Success");
        return true;
    }

}
