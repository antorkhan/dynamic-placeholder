dHolder = function(id, texts, interval) {
      var change, index, slicer, timeq;
      index = 0;
      slicer = 0;
      return timeq = window.setTimeout(change = function() {
        var delay, timerId;
        delay = interval;
        document.getElementById(id).placeholder = texts[index].slice(0, slicer) + '|';
        if (slicer === texts[index].length) {
          slicer = 0;
          index += 1;
          delay = 1000;
          if (index === texts.length) {
            index = 0;
          }
        } else {
          slicer += 1;
        }
        return timerId = window.setTimeout(change, delay);
      }, interval);
    };
