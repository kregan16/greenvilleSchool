var answerKey = [];
var studentAnswers = [];
var correctCount = 0;
var problemId = 0;

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
  var answer = a + b;
  answerKey.push(answer);
  // } else {
  //   var top = a;
  //   var bottom = b;
  //<td></td>
  // + '</td><td>'
  // }
  return '<table class="problem">' +
   '<tr><td>' + top + '</td></tr>' +
   '<tr><td>' + operator + bottom + '</td></tr>' +
   "<tr><td><input class='studentAnswers' id='problem" + problemId + "' type='text'></td></tr>" +
  '</table>';   
}

function getAnswers() {
  $(".studentAnswers").each(function() {
    studentAnswers.push($(this).val());
  });
  // alert(studentAnswers);
}

function checkAnswers() {
  for(var i = 0; i < studentAnswers.length; i++) {
    if(studentAnswers[i] == answerKey[i]){
      correctCount += 1;
      $('#problem' + i).css('color', 'green');
    } else {
      $('#problem' + i).css('color', 'red');
    }
  }
  // alert(correctCount);

}

for (i=0; i<4; i++){
  document.write("<tr>");
  for (j=0; j<4; j++) {
    document.write('<td>' + single_problem() + '</td>');
    problemId += 1;
  }
  document.write('</tr>');
}

console.log(answerKey);

$(document).ready(function(){
  $("#quizSubmit").click(function() {
    studentAnswers = [];
    correctCount = 0;

    getAnswers();
    checkAnswers();
  })
});

  