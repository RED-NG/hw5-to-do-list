const now = moment().startOf("hour");
$("#date").text(now.format("DD MMM YYYY"));
const present = now.hour();

const nine = moment()
  .hour(9)
  .startOf("hour");
const toFive = moment()
  .hour(17)
  .startOf("hour");

let todolist;

const storedToDos = localStorage.getItem("to-do");
if (storedToDos !== null) {
  todolist = JSON.parse(storedToDos);
} else {
  todolist = {};
}

for (let hour = nine.clone(); hour.isSameOrBefore(toFive); hour.add(1, "h")) {
  const clonedList = $("#clonedDiv").clone();
  clonedList.removeAttr("id");
  const currentTime = hour.hour();
  clonedList.attr("data-index", currentTime);
  const thisHour = hour.format("HA");
  clonedList.find("#hour").text(thisHour);

  if (currentTime < present) {
    $("#hour").addClass("past");
  }
  if (currentTime === present) {
    $("#hour").addClass("present");
  }
  if (currentTime > present) {
    $("#hour").addClass("future");
  }

  if (todolist[hour] !== undefined) {
    clonedList.find(".inputBox").val(todolist[hour]);
  }
  $(".todo-section").append(clonedList);
}

$(".todo-section").on("click", "#saveBtn", function() {
  const hour = $(this)
    .parent()
    .attr("data-index");
  const userTodo = $(this)
    .parent()
    .find("#inputBox")
    .val();

  todolist[hour] = userTodo;

  console.log(todolist);

  localStorage.setItem("to-do", JSON.stringify(todolist));
});
