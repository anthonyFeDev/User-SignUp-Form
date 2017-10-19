
  
//Create an Object that will store a users info

let newUser = {};

function storeNewUser(){
    //

    //Name
    let firstName = document.getElementById("#first_name");
    let lastName = document.getElementById("#last_name ");

    newUser.name = firstName + " " + lastName;

    //Email
    newUser.email = document.getElementById("#email");

    //Phone Number
    newUser.phoneNumber = document.getElementById("#phone_number");

}