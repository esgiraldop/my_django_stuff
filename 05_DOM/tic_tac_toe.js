var reset = document.querySelector("#reset")
var cells = document.querySelectorAll("td")

function wipe_out(event){
    for(var i=0; i<cells.length; i++){
        //console.log(cells["cell_"+i])
        if (cells[i].textContent === "X" | cells[i].textContent === "O"){
        cells[i].textContent = "";
        }
    }
}

reset.addEventListener("click", wipe_out) // erases all the X's and O's in the tic tac toe board
function add_symbol(){
    if (this.textContent === ""){
        this.textContent = "X";
    }
    else if(this.textContent === "X"){
        this.textContent = "O";
    }else if(this.textContent === "O"){
        this.textContent = "";
    }
}

for(var i=0;0<cells.length;i++){
    cells[i].addEventListener("click", add_symbol)
}