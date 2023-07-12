const pencil = document.getElementById("pencil");
const userInput = document.getElementById("input-bar");
const allItems = document.getElementsByClassName("allItems")[0];

pencil.addEventListener("click",function clearName(){
    userInput.value = " ";
})

userInput.addEventListener("keydown", function (event){
    if (event.key == "Enter"){
        addItems()
    }
})

function addItems(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "-" + userInput.value;

    h2.addEventListener("click", function clear(){
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = ""
}