var player1 = prompt("Player One: Enter Your Name, you will be Blue")
var player2 = prompt("Player Two: Enter Your Name, you will be Red")
var color1 = "blue"
var color2 = "red"

var orgnlPlayerInfo = $("h4")
var playerInfo = orgnlPlayerInfo
var lastRowArray = [0, 0, 0, 0, 0, 0, 0] // Every position is the column number.
                                                // Every number is the next row to be filled in the table

function change_playerInfo(){
    if (playerInfo.text().includes("(Player name)")) {
        playerInfo.text(playerInfo.text().replace("(Player name)", player1)); //Changing name
        playerInfo.text(playerInfo.text().replace("(Chip color)", color1));
    }
        else if(playerInfo.text().includes(player2)){
        playerInfo.text(playerInfo.text().replace(player2, player1)); //Changing name
        playerInfo.text(playerInfo.text().replace(color2, color1));
    }else if(playerInfo.text().includes(player1)){
        playerInfo.text(playerInfo.text().replace(player1, player2)); //Changing name
        playerInfo.text(playerInfo.text().replace(color1, color2));
    }
}

function change_color(event){
    var lastRow = lastRowArray[j]
    if (playerInfo.text().includes("(Player name)")) {
        event.target.eq(lastRow).children().eq(j).css({"color":"blue"})
    }
        else if(playerInfo.text().includes(player2)){
        event.target.eq(lastRow).children().eq(j).css({"color":"blue"})
    }else if(playerInfo.text().includes(player1)){
        event.target.eq(lastRow).children().eq(j).css({"color":"red"})
    }

}
// First turn
change_playerInfo(player1, color1)

$("td").click(change_playerInfo)

var rows = $("tr")

for(var i=0; i<rows.length; i++){
    var cols = rows.eq(i).children()
    for(var j=0;j<cols.length; j++){
        rows.click(change_color) // Accessing to rows and then to columns
        lastRowArray[j] = lastRowArray[j] + 1
        // somehow, use "lastRowArray" to know what is the next row to fill in the current column and store the new
        // number.
    }
}

console.log(lastRowArray)