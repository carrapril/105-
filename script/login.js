function login(){
    console.log("Executing login function");

    //get the values from the input
    let Username = $("#txtUsername").val();
    let Password = $("#txtPassword").val();

    //medium display values into console
    console.log(Username);
    console.log(Password);


    //high: compare the value with the email and password in the local storage


    //readUsers() function in localstorage

    let users=readUsers();

    console.log(users);

    //travel the users array ** loop

    for(let i=0;i<users.length;i++){

        //then compare if(variables ==users attributes)
        if(Username===users[i].email  && password===users[i].password){
            console.log("I found it");
        }
    }
   
}

function init(){
    console.log("Login script");

    $("#btnLogin").click(login);
}

window.onload=init;