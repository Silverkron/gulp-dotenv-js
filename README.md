Gulp dotenv js
===============
[![GitHub last commit](https://img.shields.io/github/last-commit/Silverkron/gulp-dotenv-js.svg?style=flat-square)](https://github.com/Silverkron/gulp-dotenv-js)
[![Latest Stable Version](https://img.shields.io/github/release/Silverkron/gulp-dotenv-js.svg?style=flat-square)](https://github.com/Silverkron/gulp-dotenv-js)
[![Jarvis approved](https://img.shields.io/badge/jarvis-approved-blue.svg?style=flat-square)](http://marvel-movies.wikia.com/wiki/J.A.R.V.I.S.)
[![GitHub license](https://img.shields.io/github/license/Silverkron/gulp-dotenv-js.svg?style=flat-square)](https://github.com/Silverkron/gulp-dotenv-js/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/Silverkron/gulp-dotenv-js.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FSilverkron%2Fgulp-dotenv-js)


A .env file plugin for gulp:  compiling .env to js

Install
-------

Gulp-dotend-js require gulp-rename for change name
```
$ npm install gulp-rename --save
```
next you install gulp-dotenv-js

```
$ npm install gulp-dotenv-js --save
```

Use
-------

Include gulp-dotenv-js and gulp-rename
```js
var dotenv = require('gulp-dotenv-js');
var rename = require('gulp-rename');

gulp.task('dotenv', function () {
  return gulp.src('.env')
    .pipe(dotenvjs())
    .pipe(rename('env.js'))
    .pipe(gulp.dest('dist'));
});
```

Include
--------

Include `env.js` file
```html
<script src="assets/dist/js/env.js"></script>
```

end you can use `window.ENV` with your options

## License
MIT License