const now = moment().startOf("hour");
// const hour = now.hour();
$("#date").text(now.format("DD MMM YYYY"));

const nine = moment()
  .hour(9)
  .startOf("hour");
const toFive = moment()
  .hour(17)
  .startOf("hour");

// console.log("from time: ", nine.format());
// console.log("to time: ", toFive.format());

// $("#clonedDiv").hide();

for (let hour = nine.clone(); hour.isSameOrBefore(toFive); hour.add(1, "h")) {
  // console.log(hour.format());
  const clonedList = $("#clonedDiv").clone();
  clonedList.removeAttr("id");
  clonedList.attr("data-hour", hour.hour());
  clonedList.find("#hour").text(hour.format("HA"));

  //   $(".todo-section")
  //     .append($("#clonedDiv").clone())
  //     .removeAttr("id");
  $(".todo-section").append(clonedList);
}
