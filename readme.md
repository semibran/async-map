# async-map
> Transform multiple values asynchronously

## install
```sh
npm install async-map
```

## usage
```js
const asyncMap = require('async-map')
const loadImage = require('img-load')

let paths = ['images/foo.png', 'images/bar.png']
asyncMap(paths, loadImage, (err, images) => {
  if (err) throw err
  for (let image of images) {
    document.body.appendChild(image)
  }
})
```

### `asyncMap(values, iterator, callback) -> result`
Performs `iterator` on each value in `values` in parallel, and passes the result into `callback` when complete.
- `values`: An array of values to be transformed
- `iterator(value, callback)`: Any function that receives a value and a callback, e.g. [`fs.stat(path, callback)`](https://nodejs.org/api/fs.html#fs_fs_stat_path_callback)
- `callback(err, result)`: The function called upon completion or abortion of the mapping process

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
