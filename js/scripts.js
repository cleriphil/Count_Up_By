var countUpBy = function(start, end, interval) {
  var array = [];

  if (interval < end) {
    for (var i = start; i <= end; i += interval) {
      array.push(i);
    }
    return array;
  } else {
    alert("Interval must be less than the end number.")
  };
};


$(function() {
  $('form#numbers').submit(function(event) {
    $('#result').show();
    var start = parseInt(($('input#start')).val());
    var end = parseInt(($('input#end')).val());
    var interval = parseInt(($('input#interval')).val());

    var output = countUpBy(start, end, interval);
    output = output.join(', ');

    $(".result").text(output);

    event.preventDefault();
  });
});
