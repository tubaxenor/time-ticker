(function() {
  'use strict'

  window.TimeTicker = function(interval) {
    var expected, timeout;
    this.interval = interval;
    this.onStart = null;
    this.onStop = null;

    var tick = function(ticker) {
      var drift = Date.now() - expected;
      var interval = ticker.interval
      if (drift > interval) {
        // What should we do here? Will this ever happen?
        // return
      }
      expected += interval;

      if (typeof ticker.onStart == 'function') {
        ticker.onStart();
      }
      timeout = setTimeout(tick, Math.max(0, interval - drift), ticker);
    }

    this.start = function() {
      expected = Date.now() + this.interval;
      timeout = setTimeout(tick, this.interval, this);
    }

    this.stop = function() {
      clearTimeout(timeout);
      if (typeof this.onStop == 'function') {
        this.onStop();
      }
    }
  }

  TimeTicker.prototype.onStart = function(onStart) {
    this.onStart = onStart;
  }

  TimeTicker.prototype.onStop = function(onStop) {
    this.onStop = onStop;
  }
}());
