//create the constructor ES2015 /class
class User{
    //this are the parameter
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.fname=first; //** */
        this.lname=last;  //** */
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}

//validation

function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    //we need to reset the orignal apperance
    //by removing the class alert-error
    $("input").removeClass("alert-error");



    //validations with if statements
    if(user.email.length==0){
        //if we get here the email is empty and not valid
        valid=false;
        $("#txtEmail").addClass("alert-error");
        console.log("Missing Email");
    }
    if(user.password.length==0){
        valid=false;
        $("#txtPassword").addClass("alert-error");
        console.log("Missing Password");
    }
    if(user.fname.length==0){
        valid=false;
        $("#txtFirst").addClass("alert-error");
        console.log("Missing First Name");
    }
    if(user.lname.length==0){
        valid=false;
        $("#txtLast").addClass("alert-error");
        console.log("Missing Last Name ");
    }

    return valid;

}


//user login information

function registerUser(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();   //*Check your Id on the html
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color);
    //validate the user
    if(isValid(user)){
        saveUser(user);
    }
    clearForm();
    
}
function clearForm(){
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#selPayment").val("");
    $("#txtColor").val("");
}


function init(){
    console.log("Register");
    // hook events
    $("#btnRegister").click(registerUser);
}
window.onload=init;