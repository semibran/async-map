# async-map
> Map over values in a list asynchronously

```js
const map = require('async-map')
const load = require('image-load')

var paths = ['images/foo.png', 'images/bar.png']
var images = map(paths, load, (error, image) => {
	if (error) throw error
	document.body.appendChild(image)
})
```

## install
```sh
npm install async-map
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
