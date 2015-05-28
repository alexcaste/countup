var countUp = function(input, countby) {
  var output = []
  var score = 0

  for (var i = countby; i <= input ; i++) {
    var countby = countby
    var score = countby + score
    if (score <= input ) {
      output.push(score);
    }
    if (score > input) {
      return output.join(",");
    }
  }
};

$(document).ready(function() {
  $("form#counter").submit(function(event) {
    $(".input").empty();
    $(".upby").empty();
    var userinput = parseInt($("input#input").val());
    var upby = parseInt($("input#upby").val());
    var result = countUp(userinput, upby);

    $(".result").text(result);

    $("#result").show();

    event.preventDefault();
  });
});
