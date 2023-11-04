var x=0;
var even=2;

while(x < 5){
    console.log("X is currently: "+x);

    if(x===3){
        console.log("X IS EQUAL TO THREE")
        break
    }

    console.log("X is still less than 5, adding 1 to x");
    x=x+1;
}

// Writing a while loop that prints out only the
// even numbers from 1 to 10.

while(even <= 10){
    console.log("even is currently: "+even);
    console.log("even is still less than 10, adding 2 to even");
    even=even+2;
}
even=2;
// Another way
while(even<11){
    if(even%2===0){
        console.log(even)
    }
    even=even+1
}