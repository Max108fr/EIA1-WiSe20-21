// // tslint:disable-next-line: typedef
// function drawListToDOM() {
//     // alle todos erst einmal aus dem DOM löschen
//     todosDOMElement.innerHTML = "";
//     // tslint:disable-next-line: variable-name
//     // tslint:disable-next-line: typedef
//     var loop1 = function (index: number) {
//         /**
//          * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
//          * die Objekt-Instansierung ist aber übersichtlicher)
//          */
//         // tslint:disable-next-line: typedef
//         var todo = document.createElement("div");
//         todo.classList.add("todo");
//         /**
//          * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
//          * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
//          *
//          * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
//          * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
//          * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
//          * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
//          * hier muss die Zeichenkette unterbrochen werden.
//          */
//         todo.innerHTML = "<span class='check " + list.key2[index] + "'><i class='fas fa-check'></i></span>"
//             + list.key1[index] +
//             "<span class='trash fas fa-trash-alt'></span>";
//         // Zuweisen der Event-Listener für den Check- und den Trash-Button
//         // tslint:disable-next-line: typedef
//         todo.querySelector(".check").addEventListener("click", function () {
//             // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
//             // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
//             toggleCheckState(index);
//         });
//         // tslint:disable-next-line: typedef
//         todo.querySelector(".trash").addEventListener("click", function () {
//             // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
//             // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
//             deleteTodo(index);
//         });
//         // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
//         todosDOMElement.appendChild(todo);
//     };
//     // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
//     // tslint:disable-next-line: typedef
//     for (var index = 0; index < list.key1.length; index++) {
//         loop1(index);
//     }
//     updateCounter();
// }
//# sourceMappingURL=drawListToDOM.js.map