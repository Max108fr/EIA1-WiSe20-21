console.log("Ground control to Major Tom: Check Ignition and may god's love be with you");
var todosArray = [
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
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
/**
   Zwei neue hinzugefügt+ArtyomOn
    */
// tslint:disable-next-line: variable-name
var OffenDOMElement;
// tslint:disable-next-line: variable-name
var DoneDOMElement;
var artyomOn = false;
window.addEventListener("load", function () {
    /**
    Zwei neue hinzugefügt
     */
    OffenDOMElement = document.querySelector("#Offen");
    DoneDOMElement = document.querySelector("#Done");
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", function () {
        addTodo(inputDOMElement.value);
    });
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todosArray[index_1].checked + "'><i class='fas fa-check'></i></span>"
            + todosArray[index_1].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index_1);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index_1 = 0; index_1 < todosArray.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
var done = 0;
// tslint:disable-next-line: variable-name
var OffenerTask = 3;
function updateCounter() {
    counterDOMElement.innerHTML = todosArray.length + " in total";
    OffenDOMElement.innerHTML = OffenerTask + " Tasks Offen";
    DoneDOMElement.innerHTML = done + " Tasks Done";
}
function addTodo(text) {
    if (inputDOMElement.value != "") {
        todosArray.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        OffenerTask++;
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
function toggleCheckState(index) {
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
    }
    drawListToDOM();
}
function deleteTodo(index) {
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
window.addEventListener("load", function () {
    // tslint:disable-next-line: no-any
    var artyom = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Erstelle Aufgabe *"],
        // tslint:disable-next-line: no-any
        action: function (i, wildcard) {
            artyomOn = true;
            addTodo(wildcard);
        }
    });
    document.querySelector("#start-voice").addEventListener("click", function () {
        artyom.dontObey();
        artyom.initialize({
            lang: "de-DE"
        });
        artyom.say("Hallo, sage Erstelle Aufgabe und füge einen Task hinzu");
        setTimeout(function () {
            artyom.obey();
        }, 8000);
        startArtyom();
    });
    document.querySelector("#stop-voice").addEventListener("click", function () {
        stopArtyom();
        artyom.say("Bis bald");
    });
    function startArtyom() {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true,
            speed: 1
        });
    }
    function stopArtyom() {
        artyom.fatality();
    }
});
//# sourceMappingURL=a11.js.map