# async-map
> Transform each value in an array asynchronously

## install
```sh
npm install async-map
```

## usage
```js
const map = require('async-map')
const load = require('img-load')

var paths = ['images/foo.png', 'images/bar.png']
var images = map(paths, load, (error, image, index) => {
  if (error) throw error

  // Immediately add image to DOM...
  document.body.appendChild(image)

  // or, only display when all images have been loaded
  if (images.length === paths.length) {
    for (var image of images) {
      document.body.appendChild(image)
    }
  }
})
```

### `result = map(values, iterator, callback)`
Performs `iterator` on each value in `values` in sequence. `result` is populated as each value in the initial array is transformed.
- `values`: An array of values to be transformed
- `iterator`: A function of the form `iterator(value, callback)`, e.g. [`fs.stat(path, callback)`](https://nodejs.org/api/fs.html#fs_fs_stat_path_callback)
- `callback`: A function of the form `callback(error, value, index)` which receives each transformed value as `iterator` completes

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
