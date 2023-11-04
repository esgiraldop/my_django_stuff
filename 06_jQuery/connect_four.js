let player1 = prompt("Player One: Enter Your Name, you will be Blue")
let player2 = prompt("Player Two: Enter Your Name, you will be Red")
let color1 = "blue"
let color2 = "red"
let cells = $("td")

let chipAlready = Array(cells.length).fill(0) // To track what cells are filled with a chip already
let orgnlPlayerInfo = $("h4")
let orgnlBckgrndColor = $("td").eq(0).css("background-color")
let playerInfo = orgnlPlayerInfo
let cell_index

// To protect from user entering an empty name
if (player1 === ""){
    player1 = "  "
}
if (player2 === ""){
    player2 = "  "
}

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
function scan_chipAlready (background_color){
    var start = 6*6-1+cell_index // always start from the bottom
    for(var i=start; i>=0; i-=7){
        if(cells.eq(i).css("background-color") === orgnlBckgrndColor){
            cells.eq(i).css({"background-color":background_color})
            break
        }
    }
}
function change_color(event){
    var background_color = ""
    if (playerInfo.text().includes("(Player name)") | playerInfo.text().includes(player2)) {
        background_color = "rgb(86, 151, 255)";
    }else if(playerInfo.text().includes(player1)){
        background_color = "rgba(237, 45, 73, 0.8)"
    }
    // Here, I would call "scan_chipAlready()" to scan through the cells that have a chip already.
        // I would scan backwards, starting from the cell I clicked, and scanning every 7 positions (The next cell above)
    console.log("When clicking the cell, the column number clicked is: ", cell_index)
    td_num = scan_chipAlready (background_color) // Still something to fix here
    console.log("When clicking the cell, the td number is: ", td_num)
}

// First turn
change_playerInfo()
$('table').on('click', function(event) {
    // Capture the click event on the table itself
    console.log('Table clicked');
    cell_index = event.target.cellIndex
    console.log("When clicking table, the column number clicked is: ", cell_index)

    // Check if the click event target is a table cell
    if ($(event.target).is('td')) {
        change_playerInfo()
        change_color(event);
    }

    // Checking horizontally if there are four consecutive chips of the same color

    // Checking vertically if there are four consecutive chips of the same color

});