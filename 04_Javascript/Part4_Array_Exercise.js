function checkName(name) {
  var newArr = []
    for(elem of stdntArray){
      if (elem !== name){
          newArr.push(elem)
      }
  }
    return newArr
}

var askStart = true
while(askStart) {
    var start = prompt("Do you want to start the array program? y/n")
    if(start!=="y" & start!=="n"){
        alert("Please enter a valid input")
    }else{
        break
    }
}

if(start == "y"){
    var stdntArray = []
    while(start == "y"){

        var action = prompt("Please select an action: add, remove, display, quit")
        if(action!=="add" & action!=="remove" & action!=="display" & action!=="quit"){
            alert("Please enter a valid input")
        }else{
            if(action==="add"){
                var name = prompt("Please enter a name: ")
                stdntArray.push(name)
            }else if(action==="remove"){
                while(action==="remove"){
                    var name = prompt("Please select the name")
                    if(!stdntArray.includes(name)){
                        alert("Please select a name that is in the array: ",stdntArray)
                    }else{
                        stdntArray = checkName(name)
                        break
                    }
                }
            }else if(action==="display"){
                console.log(stdntArray)
            }else{
                break
            }
        }
    }

    alert("Thanks for using the array program!")
}
alert("Program finished")