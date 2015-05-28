var countUpBy = function(start, end, interval) {
  var array = [];
  for (var i = start; i <= end; i += interval) {
    array.push(i);
  }
  return array;
};
