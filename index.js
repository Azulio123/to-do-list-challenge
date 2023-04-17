
/* for single item show 
const txt1 = document.getElementById("form");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");

function list() {
    output1.innerHTML = txt1.value;
}

btn1.addEventListener("click", list); */
const btn1 = document.getElementById("btn1");
function newItem() {
    var item = document.getElementById("form").value;

    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(" " + item));
    ul.appendChild(li);

    document.getElementById("form").value = "";   // erase what is currently in todo list
    
    li.onclick = removeItem;
}

btn1.addEventListener("click", newItem);

function removeItem(e) {
    e.target.setAttribute("class", "done");
  }

 