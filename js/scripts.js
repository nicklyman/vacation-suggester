$(document).ready(function() {
  $("form#vacation-goals").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=question1]:checked").val());
    var answer2 = parseInt($("input:radio[name=question2]:checked").val());
    var answer3 = parseInt($("input:radio[name=question3]:checked").val());
    var answer4 = parseInt($("input:radio[name=question4]:checked").val());
    var answer5 = parseInt($("input:radio[name=question5]:checked").val());
    var total = 0;
    total = (answer1+answer2+answer3+answer4+answer5)
    if (0 <= total && total <=5) {
      $(location).attr("href", "el-chalten.html")
    } else if (6 <= total && total <=25) {
      $(location).attr("href", "vancouver-bc.html")
    } else if (total >= 26) {
      $(location).attr("href", "dubai.html")
    }
  });
});


//I want to incorporate the profile information below but am having trouble incorporating two form types in this scripts.js file

// $(document).ready(function() {
//   $("form#profile").submit(function(event) {
//     var firstNameInput = ($("input#firstname").val();
//     var lastNameInput = ($("input#lastname").val();
//     var residenceInput = ($("input#residence").val();
//     $(".firstname").text(firstNameInput);
//     $(".lastname").text(lastNameInput);
//     $(".residence").text(residenceInput);
//     }
//     $('#dream-vacation').show();
//
//     event.preventDefault();
//   });
// });
