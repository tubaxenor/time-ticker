function TimeTicker(interval) {
  this.interval = interval;
  this.onStart = null;
  this.onStop = null;
  var expected, timeout;
  var that = this;

  this.start = function() {
    expected = Date.now() + this.interval;
    timeout = setTimeout(step, this.interval);
  }

  this.stop = function() {
    clearTimeout(timeout);
    if (this.onStop !== null) {
      this.onStop();
    }
  }

  function step() {
    var drift = Date.now() - expected;
    if (drift > that.interval) {
      // You could have some default stuff here too...
      console.log("Timer Error!")
    }
    expected += that.interval;

    if (that.onStart !== null) {
      that.onStart();
    }
    timeout = setTimeout(step, Math.max(0, that.interval - drift));
  }
}

TimeTicker.prototype.onStart = function(onStart) {
  this.onStart = onStart;
}

TimeTicker.prototype.onStop = function(onStop) {
  this.onStop = onStop;
}
