(function () {
    var dotenv,
        through,
        transform;

    dotenv = require('dotenv');
    through = require('through2');

    transform = function (chunk, enc, cb) {
        var payload, file;
        if (chunk.isNull()) {
            this.push(chunk);
            return cb();
        }

        payload = dotenv.parse(chunk.contents.toString());
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
