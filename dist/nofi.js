/*!
 *  NoFi v1.0.0
 *  No WiFi, detecting offline states with HTML5
 *  Project: https://github.com/toddmotto/nofi
 *  by Todd Motto: http://toddmotto.com
 *
 *  Copyright 2013. MIT licensed.
 */
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
