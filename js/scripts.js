$(document).ready(function() {
  $("form#vacation-goals").submit(function() {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());
    var total = 0;
    total = (answer1+answer2+answer3+answer4+answer5)
    if (0 <= total && total <=5) {
      $(location).attr("href", "option1.html")
    } else if (6 <= total && total <=25) {
      $(location).attr("href", "option2.html")
    } else if (total >= 26) {
      $(location).attr("href", "option3.html")
    }
  });
});
