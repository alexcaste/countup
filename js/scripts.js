var result = function(input, countby) {
  var output = []
  var score = 0

// debugger;
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
