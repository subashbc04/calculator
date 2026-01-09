let button = document.getElementById("uniq");

function result(val) {
  button.value += val;
}

function double() {
  button.value += "00";
}

function AC() {
  button.value = "";
}

function del() {
  button.value = button.value.slice(0, -1);
}

function calculate() {
  try {
    button.value = eval(button.value);
  } catch (a) {
    button.value = "Error";
  }
}
