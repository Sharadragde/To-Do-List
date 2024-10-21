var input = document.getElementById("input-text")
var getInput = document.getElementById("add-task")







function addTask(){
    var  inputValue = input.value;

    
    let newElement = document.createElement("li")
    newElement.innerHTML = `${inputValue}  <button>remove</button>`
    getInput.appendChild(newElement)

    newElement.querySelector("button").addEventListener("click", remover)

    input.value = ""

    function remover() {
        newElement.remove();

    }
    

}