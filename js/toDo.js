const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    pendingList = document.querySelector(".js-pending"),
    finishedList = document.querySelector(".js-finished");

const PENDING_LS = "Pending",
    FINISHED_LS = "Finished";

let pendingTasks, finishedTasks;

function getToDoObj(text){
    return {
        id: String(Date.now()),
        text
    };
}

function savePending(toDo){
    pendingTasks.push(toDo);
}

function removePending(toDoId){
    pendingTasks = pendingTasks.filter(function(toDo){
        return toDo.id !== toDoId;
    });
}

function removeFinished(toDoId){
    finishedTasks = finishedTasks.filter(function(toDo){
        return toDo.id !== toDoId;
    });
}

function findInFinished(toDoId){
    return finishedTasks.find(function(toDo){
        return toDo.id === toDoId;
    });
}

function findInPending(toDoId){
    return pendingTasks.find(function(toDo){
        return toDo.id === toDoId;
    });
}

function addFinished(toDo){
    finishedTasks.push(toDo);
}

function addPending(toDo){
    pendingTasks.push(toDo);
}

function backBtnClick(e){
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    const toDo = findInFinished(li.id);
    removeFinished(li.id);
    addPending(toDo);
    paintPending(toDo);
    saveToDo();
}

function finishedBtnClick(e){
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    const toDo = findInPending(li.id);
    removePending(li.id);
    addFinished(toDo);
    paintFinished(toDo);
    saveToDo();
}

function deleteBtnClick(e){
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    removeFinished(li.id);
    removePending(li.id);
    saveToDo();
}

function buildBaseList(toDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    span.innerText = toDo.text;
    deleteBtn.innerText = "🗑";
    deleteBtn.addEventListener("click", deleteBtnClick);
    li.append(span, deleteBtn);
    li.id = toDo.id;
    return li;
}

function paintPending(toDo){
    const baseList = buildBaseList(toDo);
    const finishedBtn = document.createElement("button");
    finishedBtn.innerText = "✔";
    finishedBtn.addEventListener("click", finishedBtnClick);
    baseList.append(finishedBtn);
    pendingList.append(baseList);
}

function paintFinished(toDo){
    const baseList = buildBaseList(toDo);
    const backBtn = document.createElement("button");
    backBtn.innerText = "↩";
    backBtn.addEventListener("click", backBtnClick);
    baseList.append(backBtn);
    finishedList.append(baseList);
}

function saveToDo(){
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingTasks));
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedTasks));
}

function loadToDo(){
    pendingTasks = JSON.parse(localStorage.getItem(PENDING_LS)) || [];
    finishedTasks = JSON.parse(localStorage.getItem(FINISHED_LS)) || [];
}

function restoreToDo(){
    pendingTasks.forEach(function(toDo){
        paintPending(toDo);
    });
    finishedTasks.forEach(function(toDo){
        paintFinished(toDo);
    });
}

function handleFormSubmit(e){
    e.preventDefault();
    const toDoObj = getToDoObj(toDoInput.value);
    console.log(toDoObj);
    toDoInput.value = "";
    paintPending(toDoObj);
    savePending(toDoObj);
    saveToDo();
}

function init(){
    toDoForm.addEventListener("submit", handleFormSubmit);
    loadToDo();
    restoreToDo();
}
init();
