var myStorage = window.localStorage;
for (let index = 0; index < localStorage.length; index++) {
  $("#tab").append(localStorage.getItem(index));
}
$("#btnPlus").click(function () {
  calcolo("+");
});
$("#btnSub").click(function () {
  calcolo("-");
});
$("#btnMulti").click(function () {
  calcolo("*");
});
$("#btnDivide").click(function () {
  calcolo("/");
});
var calcolo= function (segno) {
  var input1 = $("#num1");
  var input2 = $("#num2");
  var n1 = parseInt(input1.val());
  var n2 = parseInt(input2.val());
  switch (segno) {
    case "+":
        var risultato = n1 + n2;
      break;
    case "-":
        var risultato = n1 - n2;
      break;
    case "*":
        var risultato = n1 * n2;
        break;
    case "/":
        var risultato = n1 / n2;
        break;
  };
  if (input1.val() && input2.val()) {
    var string =
    "<tr><td>" +
    n1 +
    "</td>" +
    "<td style=text-align:center>" +
    segno +
    "</td>" +
    "<td>" +
    n2 +
    "</td>" +
    "<td>" +
    risultato +
    "</td></tr>";
    localStorage.setItem(localStorage.length, string)
    $("#tab").append(string);
  input1.val("");
  input2.val("");
  }
}
