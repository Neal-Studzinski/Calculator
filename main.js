// Returns a list of the elements within the html document
var numberButtons = document.querySelectorAll('.numbers button');
var operatorButtons = document.querySelectorAll('.operators button');
// Returns a reference to the element by its ID; the ID is a string
//which can be used to identify the element
var answerArea = document.getElementById('answer');
// Returns the first Element within the html document that matches the
// specified group of selectors
var clearButton = document.querySelector('.clear');
var equalsButton = document.querySelector('#equalsButton');

var firstNumber;
var operator;

for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function(e) {
    // For all buttons wait for a click then grab the value from the
    // inner HTML of the document.
    var newNumberVal = e.target.innerHTML; //Returns the innerHTML property
    // stores the value of the button clicked into newNUmberVal
    var oldNumberVal = document.getElementById('answer').innerHTML;
    // stores the value of the number input into the answer area of the html doc
    if (answerArea.innerHTML.length < 11) { // Allows 11 numbers to be input
      document.getElementById('answer').innerHTML = oldNumberVal + newNumberVal;
      // Allows for more than one digit input buy placing them together
    } else {
      alert('Sorry, up to 11 digits please.');
    }
       
  });
}
// Grabs the operator selected and clears the screen
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function(e) {
    firstNumber = answerArea.innerHTML;
    operator = e.target.innerHTML;
    answerArea.innerHTML = '';
  });
}
// Clears the screen
clearButton.addEventListener('click', function() {
  answerArea.innerHTML = '';
});


// Takes the firstNumber, coerces it into a number and performs
// the operators function with second number provided
equalsButton.addEventListener('click', function() {
  var answer;
  if (operator === '+') {
    answer = Number(firstNumber) + Number(answerArea.innerHTML);
  }
  else if (operator === '-') {
    answer = Number(firstNumber) - Number(answerArea.innerHTML);
  }
  else if (operator === 'x') {
    answer = Number(firstNumber) * Number(answerArea.innerHTML);
  }

  else  {
  answer = Number(firstNumber) / Number(answerArea.innerHTML);
}
// Only allows 11 digits to fit the output screen
if (answer > 9999999999) {
  answerArea.innerHTML = 'Try a smaller number';
} else {
  answerArea.innerHTML = String(answer).slice(0,7);
}
})
