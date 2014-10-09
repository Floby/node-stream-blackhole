var stream = require('stream');

function Blackhole (options) {
  if(!(this instanceof Blackhole)) return new Blackhole(options);
  stream.Writable.call(this, options);
  this._write = function (chunk, encoding, callback) {
    setImmediate(callback);;
  }
}

Blackhole.object = function () {
  return new Blackhole({objectMode: true});
}
