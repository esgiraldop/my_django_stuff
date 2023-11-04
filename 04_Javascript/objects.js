var carInfo = {make:"Toyota", year:1990,model:"Camry"};
carInfo["make"] //= Toyota

//Objects within objects
var myNewO = {a:"hello", b:[1,2,3], c:{inside:["a", "b"]}};
myNewO["c"]["inside"][1] // ="b"

//Objects are mutable
carInfo["year"] = 2006;

//iterating through an object
for(key in carInfo){
    console.log(key);
    console.log(carInfo[key])
}

// Objects can have methods, that are functions inside of an object
var myObj={
    prop:37,
    reportProp: function(){
        return this.prop // This is like "self" in python
    }
};
console.log(myObj.reportProp()); // = 37

var simple={
    prop: "Hello",
    myMethod: function(){
        console.log("The myMethod was called")
    }
}

simple.myMethod()// Calling the method of the object

//Another example of how to use "this"
var myObj={
    name:"Jose",
    greet: function(){
        console.log("Hello "+this.name)
    }
}

myObj.greet() // Calling the object's method