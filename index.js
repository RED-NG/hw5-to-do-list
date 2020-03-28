const now = moment().startOf("hour");
$("#date").text(now.format("DD MMM YYYY"));

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

$(".todo-section").on("click", "#saveBtn", function() {
  const hour = $(this)
    .parent()
    .attr("data-index");
  console.log(hour);
});
