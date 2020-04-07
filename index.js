const now = moment().startOf("hour");
$("#date").text(now.format("DD MMM YYYY"));

const nine = moment().hour(9).startOf("hour");
const toFive = moment().hour(17).startOf("hour");

let todolist = {};

const storedToDos = localStorage.getItem("to-do");
console.log(storedToDos);
if (storedToDos !== null) {
  todolist = JSON.parse(storedToDos);
} else {
  todolist = {};
}

for (let hour = nine.clone(); hour.isSameOrBefore(toFive); hour.add(1, "h")) {
  const currentTime = hour.hour();
  const clonedList = $("#clonedDiv").clone();
  const present = now.hour();

  if (currentTime < present) {
    clonedList.addClass("past");
  }
  if (currentTime === present) {
    clonedList.addClass("present");
  }
  if (currentTime > present) {
    clonedList.addClass("future");
  }

  clonedList.removeAttr("id");
  clonedList.attr("data-index", currentTime);

  const thisHour = hour.format("hA");
  clonedList.find("#hour").text(thisHour);

  // console.log(planner[hour]);
  // console.log(todolist[hour]);
  if (todolist[currentTime] !== undefined) {
    clonedList.find("#inputBox").val(todolist[currentTime]);
  }
  $(".todo-section").append(clonedList);
}

$(".todo-section").on("click", "#saveBtn", function () {
  const hour = $(this).parent().attr("data-index");
  const userTodo = $(this).parent().find("#inputBox").val();

  todolist[hour] = userTodo;

  console.log(todolist);

  localStorage.setItem("to-do", JSON.stringify(todolist));
});
