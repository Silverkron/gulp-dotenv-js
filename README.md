# gulp-dotenv-js

A .env file plugin for gulp:  compiling .env to js

## Installation

Gulp-dotend-js require gulp-rename for change name
```
$ npm install gulp-rename --save
```
next you install gulp-dotenv-js

```
$ npm install gulp-dotenv-js --save
```

## Usage

include gulp-dotenv-js and gulp-rename
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

## License
MIT License