# time-ticker
Adjusted timer for javascript based on https://stackoverflow.com/a/44337628

# Usage

```javascript
// Initialize a ticker with 1000ms as interval
var timeTicker = new TimeTicker(1000);
var timerElapsed = 0;

// Setup an onStart callback
timeTicker.onStart = function(){
  timerElapsed++;

  console.log(timerElapsed)
}

// Setup an onStop callback
timeTicker.onStop = function(){
  // Clear elapsed time
  timerElapsed = 0;
}

timeTicker.start();
```
