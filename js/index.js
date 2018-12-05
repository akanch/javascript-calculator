$(document).ready(function() {
  // store user input
  var inputs = [""];
  // store current input string
  var totalString;
  // an array of operators for validation without the decimal
  var operators1 = ["+", "-", "/", "*"];
  // an array of operators for validation with the decimal
  var operators2 = ["."];
  var nums = [0,1,2,3,4,5,6,7,8,9];
  
  function getValue(input) {
    if (operators2.includes(inputs[inputs.length-1] === true && input === ".")) {
      console.log("Duplicate '.'")
    }
    else if (inputs.length === 1 && operators1.includes(input) === false) {
      inputs.push(input);
    }
    else if (operators1.includes(inputs[inputs.length-1]) === false) {
      inputs.push(input);
    }
    else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }
  
  // updates what calculator shows
  function update() {
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }
  
  // evaluates operations and shows result on calculator
  function getTotal() {
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }
  
  $("a").on("click", function() {
    if(this.id==="deleteAll") {
      inputs=[""];
      update();
    }
    else if (this.id==="backOne") {
      inputs.pop();
      update();
    }
    else if (this.id==="total") {
      getTotal();
    }
    else {
      if (inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".") === -1) {
          getValue(this.id);
          }
      else {
        getValue(this.id);
      }
    }
  });
});