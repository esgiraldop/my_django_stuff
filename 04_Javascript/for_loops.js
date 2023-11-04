var word="ABCDEFGHIJK"
var word2="ABABABABABAB"

for(var i=0;i<5;i++){
    console.log("Number is "+i);
}
// Another kind of loop
for(var i=0; i<word.length;i++){
    console.log(word[i]);
}
// Another kind of loop
for(var i=0; i<word.length;i=i+2){
    console.log(word2[i]);
}