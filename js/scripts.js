var countUpBy = function(limit, counter) {
  var output = [];
  for (var i = counter; i <= limit; i+=counter) {
    output.push(i);
  }
  return output;
};

$(document).ready(function() {
  $("form#countup").submit(function(event){
    var limiter =  parseInt($("input#limit").val());
    var counter = parseInt($("input#counter").val());
    var result = countUpBy(limiter, counter);

    for(var i = 0; i < result.length; i++) {
      $('#result').append('<p>' + result[i] + '</p>')
    }

    $("#result").show();
    event.preventDefault();
  });
});
