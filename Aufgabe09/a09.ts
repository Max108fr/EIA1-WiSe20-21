console.log("Groundcontrol to Major Tom: Check Ignition and may god's love be with you");

//Input in label -> erzeugt Listen-Element
let input: HTMLElement = document.getElementById("label");

let newElement: HTMLElement = document.createElement("li");

let trashIcon: HTMLElement = document.createElement("i");

//Index/Zähler für Tasks
let index01: number = 0;

//Eingabe/Text soll in neues Element übernommen werden
function addToHTML (): void {

    let list: HTMLElement = document.getElementById("Task");

//Eingabe aus label festlegen
    let currentElement: string = (<HTMLInputElement>document.getElementById("label")).value;

//Erstellen Liste + Einfügen "label" in Liste
    let newElement: HTMLElement = document.createElement("li");

    let inputText: HTMLElement = document.createElement("label");

//Trash und Checkbox sollen in/mit der Liste auftauchen 
    let newCheckbox: HTMLInputElement = document.createElement("input");

    let trashIcon: HTMLElement = document.createElement("i");

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
    trashIcon.addEventListener("click", function(): void {
        newElement.remove();
        index01--;
        counter();
    }
    );
}
//label nach Eingabe -> reset
function clear(): void {
    (<HTMLInputElement>document.getElementById("label")).value = "";
}
//Index/Zähler
function counter(): void {
    document.querySelector("#counter").innerHTML = index01 + " thing(s) to do";
}
counter();
//Funktion(en) auf Entertaste
input.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        addToHTML();
        clear();
        this.currentElement = null;
        index01++;
        counter();
    }
}
);