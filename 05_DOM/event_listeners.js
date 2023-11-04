function clickit(event){
    event.target.textContent = "CLICKED ON";
    event.target.style.color = "blue";
}

var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree = document.querySelector("#three")

console.log("Connected")

var originalTextOne = headOne.textContent
var originalColor = headOne.style.color
var originalTextTwo = headTwo.textContent
var originalTextThree = headThree.textContent

headOne.addEventListener("mouseover", function(){
    headOne.textContent = "Mouse Currently Over";
    headOne.style.color = "red";
})

headOne.addEventListener("mouseout", function(){
    headOne.textContent = originalTextOne;
    headOne.style.color = originalColor;
})

headTwo.addEventListener("click", function(){
    if(headTwo.textContent === originalTextTwo){
        headTwo.textContent = "CLICKED ON";
        headTwo.style.color = "blue";
    }else{
        headTwo.textContent = originalTextTwo;
        headTwo.style.color = originalColor;
    }
})

headThree.addEventListener("dblclick", function(){
    if(headThree.textContent === originalTextThree){
        headThree.textContent = "I WAS DOUBLE CLICKED";
        headThree.style.color = "green";
    }else{
        headThree.textContent = originalTextThree;
        headThree.style.color = originalColor;
    }
})