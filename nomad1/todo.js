const toDoFrom = document.querySelector(".js-toDoForm"),
    toDoInput = toDoFrom.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];


function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // filter : array 의 모든 아이템을 통해 함수를 실행하고, true 인 아이템들만 가지고 새로운 array 를 만든다.
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    // local storage 에는 자바스크립트의 data 를 저장할 수 없다.
    // 오직 string 만 저장 가능하다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // 자바스크립트 object 를 string 으로 바꿔준다.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);  // string 을 object 으로 변환
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
    }

}

function init() {
    loadToDos();
    toDoFrom.addEventListener("submit", handleSubmit);
}

init();