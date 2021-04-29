let inputBox = document.querySelector(".input-box"); //gets input box element
let taskList = document.querySelector(".task-list"); //gets the task list element using class

//CRUD Create-create elem , Read - querySelector , Update- append child , Delete- remove()
console.log("before");
//async code , function(e) is cb function dont disturb flow of code

//event listener listens to events , when out req event occur , we do following ..
inputBox.addEventListener("keypress", function (e) {
  console.log("key press was called");
  //now if event e happen , do this ->
  if (e.code == "Enter" && inputBox.value != "") {
    //page add
    let task = inputBox.value;
    //create
    let taskElem = document.createElement("li");
    //set attribute
    taskElem.setAttribute("class", "task"); //class set to task coz all li in html have class task;
    //text of li is ipbox.val i.e in task var
    taskElem.innerText = task;
    //element append
    taskList.appendChild(taskElem);
    inputBox.value = ""; //reset

    //add another event listener to added task , ie doublce click to delete
    taskElem.addEventListener("dblclick", function () {
      //remove
      taskElem.remove();
    });
  }
});

console.log("after");
