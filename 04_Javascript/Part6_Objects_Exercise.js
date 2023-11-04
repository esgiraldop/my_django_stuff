// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  namelength: function(){
    console.log(this.name.length)
  }
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.
employee.namelength()

///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  print: function(){
    var toPrint = ""
    for(key in this){
      if(key !== "print") {
        toPrint = toPrint + key + " is " + this[key] + ", "
      }
    }
    alert(toPrint)
  }
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.
employee.print()


///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
    console.log(this.name.split(" ")[1])
  }
}

// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
employee.lastName()