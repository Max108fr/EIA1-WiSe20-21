// console.log("Ground control to Major Tom: Check Ignition and may god's love be with you");

// /**
//  * Die ToDos werden in dem Array todosText gespeichert
//  * Jedes ToDo hat aber, neben dem ToDo-Text, einen zweiten
//  * Wert, nämlich ob es erledigt ist oder nicht
//  * (checked / unchecked). Der Einsatz von einem eindimensionalen
//  * Array ermöglicht aber nur, dass wir ein Wert nach dem anderen auflisten.
//  * Den zweiten Wert zu einem ToDo speichern wir also in einem
//  * zweiten Array. Beide Arrays beinhalten also Infos zu einem ToDo,
//  * den ToDo-Text und den Erledigtstatus eines ToDos. Die entsprechende
//  * Stelle eines ToDos zeigt jetzt in den Arrays auf die entsprechenden
//  * Werte, bspw. Stelle 0 im Array todosText und Stelle 0 im Array
//  * todosChecked gehören zusammen zu einem ToDo.
//  */
// // tslint:disable-next-line: typedef
// var list = {
//     key1: ["Eins", "Zwei", "Drei"],
//     key2: [true, false, false]
// };
// /**
//  * Die Anwendung wird immer wieder auf die selben
//  * DOM-Elemente zugreifen müssen. Damit diese Elemente nicht
//  * jedes mal neu selektiert werden müssen, werden hier
//  * Variablen deklariert, die später die entsprechenden DOM-Elemente
//  * speichern.
//  */
// // tslint:disable-next-line: typedef
// var inputDOMElement;
// var addButtonDOMElement: { addEventListener: (arg0: string, arg1: () => void) => void; };
// var todosDOMElement: { innerHTML: string; appendChild: (arg0: HTMLDivElement) => void; };
// var counterDOMElement: { innerHTML: string; };
// /**
//  * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
//  * initialisiert werden
//  */
// // tslint:disable-next-line: typedef
// window.addEventListener("load", function () {
//     /**
//      * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
//      * in ihre Variablen gespeichert werden, um später auf sie
//      * zugreifen zu können
//      */
//     inputDOMElement = document.querySelector("#inputTodo");
//     addButtonDOMElement = document.querySelector("#addButton");
//     todosDOMElement = document.querySelector("#todos");
//     counterDOMElement = document.querySelector("#counter");
//     /**
//      * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
//      * auf den AddToDo Button gesetzt werden.
//      */
//     addButtonDOMElement.addEventListener("click", addTodo);
//     /**
//      * Initial soll einmal die Liste an bereit definierten ToDos
//      * aus den Arrays in den DOM gezeichnet werden.
//      */
//     drawListToDOM();
// });
// // tslint:disable-next-line: typedef
// function updateCounter() {
//     counterDOMElement.innerHTML = list.key1.length + " in total";
// }
// /**
//  * Ein neues ToDo wird folgendermaßen erstellt:
//  */
// // tslint:disable-next-line: typedef
// function addTodo() {
//     /**
//      * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
//      * (ansonsten würde ein leerer ToDo-Text erstellt werden,
//      * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
//      */
//     if (inputDOMElement.value != "") {
//         /**
//          * Der Eingabe-Wert aus dem Input-Feld (.value) wird
//          * als neues Element in das ToDo-Array gepusht.
//          * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
//          * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
//          * der Status "unchecked", hier false, gepusht.
//          */
//         list.key1.unshift(inputDOMElement.value);
//         list.key2.unshift(false);
//         // Jetzt wird der Text aus dem Eingabefeld gelöscht
//         inputDOMElement.value = "";
//         /**
//          * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
//          * wird wieder getriggert
//          */
//         drawListToDOM();
//     }
// }
// /**
//  * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
//  */
// // tslint:disable-next-line: typedef
// function toggleCheckState(index) {
//     /**
//      * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
//      * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
//      * an der übergebenen Index-Stelle) geändert werden.
//      * Von checked zu unchecked bzw. von unchecked zu checked
//      * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
//      * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
//      * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
//      * kurz schreiben: wert = !wert
//      * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
//      * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
//      * Kurs behandelt wurden) nutzen.
//      */
//     list.key2[index] = !list.key2[index];
//     /**
//      * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
//      * wird wieder getriggert
//      */
//     drawListToDOM();
// }
// /**
//  * Diese Funktion löscht ein ToDo
//  */
// // tslint:disable-next-line: typedef
// function deleteTodo(index) {
//     /**
//      * Durch "index" ist die entsprechende Stelle im Array
//      * bekannt, an der das ToDo steht.
//      * Jetzt muss diese Stelle beider Arrays gelöscht werden,
//      * das ToDo-Text-Array und das Checked/Unchecked-Array
//      */
//     list.key1.splice(index, 1);
//     list.key2.splice(index, 1);
//     /**
//      * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
//      * wird wieder getriggert
//      */
//     drawListToDOM();
// }
// //# sourceMappingURL=script.js.map