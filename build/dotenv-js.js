(function () {
    var dotenvjs,
        through,
        transform;

    dotenvjs = require('dotenvjs');
    through = require('through2');

    transform = function (chunk, enc, cb) {
        var payload, file;
        if (chunk.isNull()) {
            this.push(chunk);
            return cb();
        }

        payload = dotenvjs.parse(chunk.contents.toString());
        file = chunk.clone();
        file.contents = new Buffer(
            ('window.END = ' + JSON.stringify(payload))
        );

        this.push(file);
        cb();
    };

    module.exports = function () {
        return through.obj(transform);
    };
}).call(this);
