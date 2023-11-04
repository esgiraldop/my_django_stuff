var orgnlColor = $("h2").css("color")
var orgnlBackgrnd = $("h2").css("background")
var orgnlBorder = $("h2").css("border")

$("h1").click(function(){
    console.log("There was a click")
    $(this).text("I was changed!")// "This is for calling specific attributes or methods from the variable
})

$("li").click(function(){
    console.log("any li was clicked!")
})

$("h2").dblclick(function(){
    if($(this).css("color")==="rgb(51, 51, 51)"){
        $(this).css({"color":"white",
        "background":"blue",
        "border":"red"})
    }else{
        $(this).css({"color":orgnlColor,
        "background":orgnlBackgrnd,
        "border":orgnlBorder})
    }
})

// Key press events
$("input").eq(0).keypress(function(event){
    // Grabbing the event as object
    console.log(event);
    //$("h3").toggleClass("turnBlue") // activates with any key

    // But it is also possible to activate the event with an specific key
    if(event.which == 13){ //13 is Enter
        $("h3").toggleClass("turnBlue")
    }

})

// on() method. Which is the same, but the event type can be called as an argument

$("h1").on("dblclick", function(){
    $(this).toggleClass("turnBlue")
})

$("p").on("mouseenter", function(){
    $(this).toggleClass("turnBlue")
})

// Effects and animations
$("input").eq(1).on("click", function(){
    $(".container").slideUp(3000)
})