const now = moment().startOf("hour");
$("#date").text(now.format("DD MMM YYYY"));
const list = { 9: "sdfsdf", 10: "sdlkf" };

const nine = moment()
  .hour(9)
  .startOf("hour");
const toFive = moment()
  .hour(17)
  .startOf("hour");

for (let hour = nine.clone(); hour.isSameOrBefore(toFive); hour.add(1, "h")) {
  const clonedList = $("#clonedDiv").clone();
  clonedList.removeAttr("id");
  clonedList.attr("data-index", hour.hour());
  clonedList.find("#hour").text(hour.format("HA"));
  $(".todo-section").append(clonedList);
}

const storedTodos = localStorage.getItem(list);
if (storedTodos !== null) {
  list = JSON.parse(storedTodos);
}

$(".todo-section").on("click", "#saveBtn", function() {
  const hour = $(this)
    .parent()
    .attr("data-index");
  const userTodo = $(this)
    .parent()
    .find(".inputBox")
    .val();

  list[hour] = userTodo;

  console.log(list);

  localStorage.setItem("to-do", JSON.stringify(list));
});
