//the numbers work and can be added to each other
//and the numbers can be added together as strings
//to make duoble digit numbers , triple , quadriple, etc..

function Number1() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 1;
}
function Number2() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 2;
}
function Number3() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 3;
}
function Number4() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 4;
}
function Number5() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 5;
}
function Number6() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 6;
}
function Number7() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 7;
}
function Number8() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 8;
}
function Number9() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 9;
}
function Number0() {
  const text = document.getElementById("output").textContent;

  document.getElementById("output").innerHTML = text + 0;
}

//now the operators
//the point will act like a number
//except that if you press it once it stops working

function NumberPoint() {
  const text = document.getElementById("output").textContent;
  if (text.includes(".") === false) {
    document.getElementById("output").innerHTML = text + ".";
  }
}

//then ill work on the plus sign

function plus() {
  const text = document.getElementById("output").textContent;
  if (text.includes("+") === false) {
    document.getElementById("output").innerHTML = text + "+";
  }
}

function minus() {
  const text = document.getElementById("output").textContent;
  if (text.includes("-") === false) {
    document.getElementById("output").innerHTML = text + "-";
  }
}

function divide() {
  const text = document.getElementById("output").textContent;
  if (text.includes("/") === false) {
    document.getElementById("output").innerHTML = text + "/";
  }
}

function multiply() {
  const text = document.getElementById("output").textContent;
  if (text.includes("x") === false) {
    document.getElementById("output").innerHTML = text + "x";
  }
}

function result() {
  const text = document.getElementById("output").textContent;

  if (text.includes("+") === true) {
    const firstCharecter = text.split("+")[0];
    const secondCharecter = text.split("+")[1];
    const finalResult = parseInt(firstCharecter) + parseInt(secondCharecter);

    document.getElementById("output").innerHTML = finalResult;
  } else if (text.includes("-") === true) {
    const firstNumber = text.split("-")[0];
    const secondNumber = text.split("-")[1];
    const finalnumber = parseInt(firstNumber) - parseInt(secondNumber);

    document.getElementById("output").innerHTML = finalnumber;
  } else if (text.includes("/") === true) {
    const firstCharecter3 = text.split("/")[0];
    const secondCharecter3 = text.split("/")[1];
    parseInt(firstCharecter3);
    parseInt(secondCharecter3);
    const finalResult3 = firstCharecter3 / secondCharecter3;

    document.getElementById("output").innerHTML = finalResult3;
  } else if (text.includes("x") === true) {
    const firstCharecter4 = text.split("x")[0];
    const secondCharecter4 = text.split("x")[1];
    const finalResult4 = parseInt(firstCharecter4) * parseInt(secondCharecter4);

    document.getElementById("output").innerHTML = finalResult4;
  }
}
/*
function minusResult() {
  const text = document.getElementById("output").textContent;

  if (text.includes("", "-") === true) {
    const firstNumber = text.split("-")[0];
    const secondNumber = text.split("-")[1];
    const finalnumber = parseInt(firstNumber) - parseInt(secondNumber);

    document.getElementById("output").innerHTML = finalnumber;
  }
}*/
/*
function devideResult() {
  const text = document.getElementById("output").textContent;

  if (text.includes("", "/") === true) {
    const firstCharecter2 = text.split("/")[0];
    const secondCharecter2 = text.split("/")[1];
    parseInt(firstCharecter2);
    parseInt(secondCharecter2);
    const finalResult2 = firstCharecter2 / secondCharecter2;

    document.getElementById("output").innerHTML = finalResult2;
  }
}

function multiplyResult() {
  const text = document.getElementById("output").textContent;

  if (text.includes("", "x") === true) {
    const firstCharecter2 = text.split("x")[0];
    const secondCharecter2 = text.split("x")[1];
    const finalResult2 = parseInt(firstCharecter2) * parseInt(secondCharecter2);

    document.getElementById("output").innerHTML = finalResult2;
  }
}
*/
/*
function result() {
  plusResult();
  minusResult();
   devideResult();
  multiplyResult();
}*/
/*
document.getElementById("equal").addEventListener("click", function () {
  minusResult();
});*/
