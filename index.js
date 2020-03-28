const now = moment().startOf("hour");
const currentHour = now.hour();
$("#date").text(now.format("DD MMM YYYY"));

$(".todo-section")
  .append($("#clonedDiv").clone())
  .removeAttr("id");

$("#clonedDiv").hide();

const nine = now.hour(9);
const toFive = now.hour(5);
