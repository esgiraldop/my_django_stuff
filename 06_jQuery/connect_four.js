let player1 = prompt("Player One: Enter Your Name, you will be Blue")
let player2 = prompt("Player Two: Enter Your Name, you will be Red")
let color1 = "blue"
let color2 = "red"
let cells = $("td")
let board = []; // Matrix to check who connects four first

for(var i=0; i<6; i++) {
    board[i] = [];
    for(var j=0; j<7; j++) {
        board[i][j] = 0;
    }
}

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
    var row = 5 //Starting from the bottom
    for(var i=start; i>=0; i-=7){
        if(cells.eq(i).css("background-color") === orgnlBckgrndColor){
            cells.eq(i).css({"background-color":background_color})
            if (playerInfo.text().includes("(Player name)") || playerInfo.text().includes(player1)) {
                board[row][cell_index] = 2
            }else if(playerInfo.text().includes(player2)){
                board[row][cell_index] = 1
            }
            console.log(board)
            break
        }
        row--
    }
}
function change_color(event){
    var background_color = ""
    if (playerInfo.text().includes("(Player name)") || playerInfo.text().includes(player2)) {
        background_color = "rgb(86, 151, 255)";
    }else if(playerInfo.text().includes(player1)){
        background_color = "rgba(237, 45, 73, 0.8)"
    }

    //console.log("When clicking the cell, the column number clicked is: ", cell_index)
    // Scanning through the cells in the same column that have a chip already.
    td_num = scan_chipAlready (background_color)
    //console.log("When clicking the cell, the td number is: ", td_num)
}

// First turn
change_playerInfo()
$('table').on('click', function(event) {
    // Capture the click event on the table itself
    //console.log('Table clicked');
    cell_index = event.target.cellIndex
    //console.log("When clicking table, the column number clicked is: ", cell_index)

    // Check if the click event target is a table cell
    if ($(event.target).is('td')) {
        change_playerInfo()
        change_color(event);
    }

    // Checking horizontally if there are four consecutive chips of the same color
    function scan_hor(){
        for(var i=0; i<6; i++) {
            var sum1=0 // If this or the next one gets to 4, the corresponding player wins
            var sum2=0
            for(var j=0; j<7; j++) {
                if (board[i][j] === 1){
                    sum1++
                    sum2=0 // resetting the counter
                }else if(board[i][j] === 2){
                    sum2++
                    sum1=0
                }else{
                    sum1=0
                    sum2=0
                }
                if(sum1 === 4 || sum2 === 4){
                    console.log("HORIZONTALLY")
                    return [sum1, sum2]
                }
            }
        }
        return [sum1, sum2]
    }

    // Checking vertically if there are four consecutive chips of the same color
    function scan_vert(){
        for(var i=0; i<7; i++) {
            sum1=0
            sum2=0
            for(var j=0; j<6; j++) {
                if (board[j][i] === 1){
                    sum1++
                    sum2=0 // resetting the counter
                }else if(board[j][i] === 2){
                    sum2++
                    sum1=0
                }else{
                    sum1=0
                    sum2=0
                }
                if(sum1 === 4 || sum2 === 4){
                    console.log("VERTICALLY")
                    return [sum1, sum2]
                }
            }
        }
        return [sum1, sum2]
    }

    function win_message(){
        var message = ``
        if(sum1 === 4){
            message = `${player1} has won! Refresh your browser to play again!`
        }else if(sum2 === 4){
            message = `${player2} has won! Refresh your browser to play again!`
        }
        //Changing the message at the top of the page
        $("h2").remove()
        $("h4").remove()
        $("h1").text(message)
        // Disabling event listeners
        $("table").unbind("click")
    }

    sums = scan_hor()
    sum1 = sums[0]
    sum2 = sums[1]

    if(sum1 < 4 && sum2 < 4){
        // If no player has won, then scan vertically
        sums = scan_vert()
        sum1 = sums[0]
        sum2 = sums[1]
    }
    if (sum1 === 4 || sum2 === 4){
        win_message()
    }

});