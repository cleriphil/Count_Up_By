var countUpBy = function(start, end, interval) {
  var array = [];
  for (var i = start; i <= end; i += interval) {
    array.push(i);
  }
  return array;
};


$(function() {
  $('form#numbers').submit(function(event) {
    $('#result').show();
    var start = parseInt(($('input#start')).val());
    var end = parseInt(($('input#end')).val());
    var interval = parseInt(($('input#interval')).val());

    var output = countUpBy(start, end, interval);

    $(".result").text(output);

    event.preventDefault();
  });
});
