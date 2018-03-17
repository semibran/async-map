module.exports = function asyncMap(values, iterator, callback) {
  var results = []
  var count = values.length
  if (!count) {
    return callback(null, results)
  }
  for (var i = count; i--;) {
    (function (i) {
      iterator(values[i], function (err, result) {
        if (err) return callback(err)
        results[i] = result
        if (!--count) {
          callback(null, results)
        }
      })
    })(i)
  }
}
