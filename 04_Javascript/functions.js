function formal(name="Sam", title="sir"){
    return title + " " + name;
}

function timesFive(numInput){
    var result = numInput*5;
    return result
}

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
    console.log(v); // JS checks first global scope. If not, then local scope
    stuff = "Reassign stuff inside func";
    console.log(stuff);
}

fun()
console.log(stuff);

// Part 2