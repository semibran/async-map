module.exports = function asyncMap(values, iterator, callback) {
  var results = []
  var count = values.length
  var error
  if (!count) {
    return callback(null, results)
  }
  for (var i = count; i--;) {
    (function (i) {
      iterator(values[i], function (err, result) {
        if (error) return
        if (err) error = err
        if (error) return callback(error)
        results[i] = result
        if (!--count) {
          callback(null, results)
        }
      })
    })(i)
  }
}
