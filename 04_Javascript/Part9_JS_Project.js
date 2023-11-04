var firstName = prompt("What is your first name?")
var lastName = prompt("What is your last name?")
var age = prompt("What is your age?")
var height = prompt("What is your height in centimeters?")
var petName = prompt("What is your pet name?")
alert("Thank you for your information!")

if(firstName[0] === lastName[0] && (age>20 && age<30) && height>=170 &&
    petName.slice(-1)==="y"){
    console.log("Welcome to our secret page spy!")
}else{
    console.log("Nothing to see here mudafuka!")
}


//Jose Johnson
//26 years old
//175 cm tall
//Pet name is "Sammy"