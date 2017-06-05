module.exports = function map(values, iterator, callback) {
	var result = []
	var length = values.length
	if (length) {
		iterate(0)
		function iterate(index) {
			var value = values[index]
			iterator(value, function next(error, value) {
				if (error) {
					callback(error)
				} else {
					result[index] = value
					callback(null, value, index)
				}
				if (index + 1 < length) {
					iterate(index + 1)
				}
			})
		}
	}
	return result
}
