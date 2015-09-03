

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

  