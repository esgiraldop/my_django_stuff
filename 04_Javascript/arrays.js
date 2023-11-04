var countries = ["USA", "Germany", "China"]

console.log(countries.length)

var myArr = ["one", "two", "three"]
var lastItem = myArr.pop() // Removes string's last element
console.log(myArr)

myArr.push("new_item") // Append last item
console.log(myArr)

myArr[myArr.length - 1] // To access array's last item

var matrix = [[1,2,3], [4,5,6], [7,8,9]]

// Array iteration

var arr=["A", "B", "C"]
for(var i=0; i<arr.length;i++){
    console.log(arr[i]);
}

//Another way
for(letter of arr){
    console.log(letter);
}

for(letter of arr){
    console.log("Hello"); //Any other string can be printed
}

for (letter of arr){
    alert(letter); // Giving elements of an array to a function
}
// The task above is so common, that there is a specific loop method for that
arr.forEach(alert);

function addAwesome(name){
    console.log(name+" is awesome")
}

var topics = ["Python", "Django", "Science"]
topics.forEach(addAwesome)