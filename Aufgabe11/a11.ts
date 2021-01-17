console.log("Ground control to Major Tom: Check Ignition and may god's love be with you");

interface TodoInterface {
    text: string;
    checked: boolean;
}

var todosArray: TodoInterface[] = [
    {
        text: "Ene",
        checked: false
    },
    {
        text: "Mene",
        checked: false
    },
    {
        text: "Muh",
        checked: false
    }

];

var inputDOMElement: HTMLInputElement; 
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
 /**
    Zwei neue hinzugefügt+ArtyomOn
     */
// tslint:disable-next-line: variable-name
var OffenDOMElement: HTMLElement;
// tslint:disable-next-line: variable-name
var DoneDOMElement: HTMLElement;
var artyomOn: boolean = false;



window.addEventListener("load", function(): void {
    /**
    Zwei neue hinzugefügt
     */
    OffenDOMElement = document.querySelector("#Offen");
    DoneDOMElement = document.querySelector("#Done");

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

    
    addButtonDOMElement.addEventListener("click", function(): void {
        addTodo(inputDOMElement.value);
    });



    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosArray.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML =  "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                            + todosArray[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}
var done: number = 0;
// tslint:disable-next-line: variable-name
var OffenerTask: number = 3;

function updateCounter(): void {
    counterDOMElement.innerHTML = todosArray.length + " in total";
    OffenDOMElement.innerHTML = OffenerTask + " Tasks Offen";
    DoneDOMElement.innerHTML = done + " Tasks Done";
}

function addTodo(text: string): void {
    if (inputDOMElement.value != "") {
        todosArray.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        OffenerTask ++;
        drawListToDOM();
    }
    if (artyomOn == true) {
        todosArray.unshift({
            text: text,
            checked: false
        });
        artyomOn = false;
        OffenerTask++;
        drawListToDOM();
    }
}
function toggleCheckState(index: number): void {
    if (todosArray[index].checked == true) {
        todosArray[index].checked = false;
        done--;
        OffenerTask++;
    }
    else if (todosArray[index].checked == false) {
        todosArray[index].checked = true;
        done++;
        OffenerTask--;
    // tslint:disable-next-line: align
    }    drawListToDOM();
}

function deleteTodo(index: number): void {
    if (todosArray[index].checked == true) {
        done--;
    }
    else if (todosArray[index].checked == false) {
        OffenerTask--;
    }
    
    todosArray.splice(index, 1);
    drawListToDOM();
}

/**
    +ArtyomOn
     */
window.addEventListener("load", function(): void {
    // tslint:disable-next-line: no-any
    const artyom: any = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Erstelle Aufgabe *"],
        // tslint:disable-next-line: no-any
        action: function (i: any, wildcard: string): void {
            artyomOn = true;
            addTodo(wildcard);
        }
    });

    document.querySelector("#start-voice").addEventListener("click", function(): void {
        artyom.dontObey();
        artyom.initialize({
            lang: "de-DE"
        });
        artyom.say("Hallo, sage Erstelle Aufgabe und füge einen Task hinzu");
        setTimeout(function (): void {
            artyom.obey();
        },         8000);
        startArtyom();
    });
    document.querySelector("#stop-voice").addEventListener("click", function(): void {
        stopArtyom();
        artyom.say("Bis bald");
    });

    function startArtyom(): void {
        artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true,
                speed: 1
        });
    }
    function stopArtyom(): void {
        artyom.fatality();
    }
});