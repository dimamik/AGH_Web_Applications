/* JavaScript */

let ulEl = document.getElementById("list");
let listElements = ulEl.getElementsByTagName("li");
let add_to_listEl = document.getElementById("add_to_list");
let remove_from_listEl = document.getElementById("remove_from_list");


add_to_listEl.addEventListener("click", addToList);
remove_from_listEl.addEventListener("click", removeFrmomList);


function addToList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + (listElements.length + 1)));
    ulEl.appendChild(li);
}
function removeFrmomList() {
    ulEl.removeChild(ulEl.firstElementChild);
}