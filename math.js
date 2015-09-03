
function single_problem() {
      var operator = "+";
      // if (Math.random() < .6) {
      //   // operator = "&#8722;";
      // }
      var a = Math.floor(Math.random()* 10) + 1;
      var b = Math.floor(Math.random()* 2)+ 1;
      operator == "+"
      var top = a;
      var bottom = b;
      // } else {
      //   var top = a;
      //   var bottom = b;
      // }
      return '<table class="problem">' +
                     '<tr><td></td><td>' + top + '</td></tr>' +
                     '<tr><td>' + operator + '</td><td>' + bottom + '</td></tr>' +
                    '</table>';
                  
    }
      for (i=0; i<5; i++){
        document.write("<tr>");
        for (j=0; j<5; j++) {
          document.write('<td>' + single_problem() + '</td>');
        }
        document.write('</tr>');
      }

    





// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6 ) + 1;
// var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
// if (parseInt(guess) === randomNumber ) {
//   correctGuess = true;
// } else if ( parseInt(guess) < randomNumber ) {
//   var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
//   if (parseInt(guessMore) === randomNumber) {
//       correctGuess = true;
//   }
// } else if ( parseInt(guess) > randomNumber ) {
//    var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
//   if (parseInt(guessLess) === randomNumber) {
//       correctGuess = true;
//   }
// }
// if ( correctGuess ) {
//     document.write('<p>You guessed the number!</p>');
// } else {
//     document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
// }