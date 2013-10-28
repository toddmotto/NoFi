window.NoFi = (function (window, document, undefined) {

  'use strict';

  var emitEvent = function (name) {

    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    window.dispatchEvent(event);

  };

  var init = function (obj) {

    var options = obj || {};
    var interval = options.interval || 10000;
    var eventName = options.eventName || 'offline';
    var exit = options.exit || false;

    if ('onLine' in navigator) {
      (function checkStatus() {
        setTimeout(function () {
          if (!navigator.onLine) {
            emitEvent(eventName);
            if (exit) {
              return;
            }
          }
          checkStatus();
        }, interval);
      })();
    }

  };

  return {
    init: init
  };

})(window, document);
