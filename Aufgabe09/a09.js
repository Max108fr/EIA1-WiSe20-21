var _this = this;
console.log("Groundcontrol to Major Tom: Check Ignition and may god's love be with you");
//Input in label -> erzeugt Listen-Element
var input = document.getElementById("label");
var newElement = document.createElement("li");
var trashIcon = document.createElement("i");
//Index/Zähler für Tasks
var index01 = 0;
//Eingabe/Text soll in neues Element übernommen werden
function addToHTML() {
    var list = document.getElementById("Task");
    //Eingabe aus label festlegen
    var currentElement = document.getElementById("label").value;
    //Erstellen Liste + Einfügen "label" in Liste
    var newElement = document.createElement("li");
    var inputText = document.createElement("label");
    //Trash und Checkbox sollen in/mit der Liste auftauchen 
    var newCheckbox = document.createElement("input");
    var trashIcon = document.createElement("i");
    //Eingabe/Text "Task" in Liste übernehmen + Trash/Check
    inputText.innerHTML = currentElement;
    newElement.className = "Task";
    trashIcon.className = "fas fa-recycle trash";
    //css-Tricks "checkbox" mit function
    newCheckbox.type = "checkbox";
    newCheckbox.className = "checkbox";
    //Neues Element(Task) zum Body hinzufügen
    list.appendChild(newElement);
    //Elemente zum Task hinzufügen
    newElement.appendChild(newCheckbox);
    newElement.appendChild(inputText);
    newElement.appendChild(trashIcon);
    //function "Trash"/remove
    trashIcon.addEventListener("click", function () {
        newElement.remove();
        index01--;
        counter();
    });
}
//label nach Eingabe -> reset
function clear() {
    document.getElementById("label").value = "";
}
//Index/Zähler
function counter() {
    document.querySelector("#counter").innerHTML = index01 + " thing(s) to do";
}
counter();
//Funktion(en) auf Entertaste
input.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        addToHTML();
        clear();
        _this.currentElement = null;
        index01++;
        counter();
    }
});
//# sourceMappingURL=a09.js.map