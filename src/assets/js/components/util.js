
// Global variables
window.UtilElementDataStore = {};
window.UtilElementDataStoreID = 0;
window.UtilDelegatedEventHandlers = {};

var ClicknextUtil = function () {
  var resizeHandlers = [];

  var breakpoints = {
    sm: 544, // Small screen / phone
    md: 768, // Medium screen / tablet
    lg: 992, // Large screen / desktop
    xl: 1200 // Extra large screen / wide desktop
  };

  var _windowResizeHandler = function () {
    var _runResizeHandlers = function () {
      // reinitialize other subscribed elements
      for (var i = 0; i < resizeHandlers.length; i++) {
        var each = resizeHandlers[i];
        each.call();
      }
    };

    var timer;

    window.addEventListener('resize', function () {
      ClicknextUtil.throttle(timer, function () {
        _runResizeHandlers();
      }, 200);
    });
  };

  return {
    getById: function (el) {
      if (typeof el === 'string') {
        return document.getElementById(el);
      } else {
        return el;
      }
    },

    getBody: function () {
      return document.getElementsByTagName('body')[0];
    },

    data: function (el) {
      return {
        set: function (name, data) {
          if (!el) {
            return;
          }

          if (el.customDataTag === undefined) {
            window.UtilElementDataStoreID++;
            el.customDataTag = window.UtilElementDataStoreID;
          }

          if (window.UtilElementDataStore[el.customDataTag] === undefined) {
            window.UtilElementDataStore[el.customDataTag] = {};
          }

          window.UtilElementDataStore[el.customDataTag][name] = data;
        },

        get: function (name) {
          if (!el) {
            return;
          }

          if (el.customDataTag === undefined) {
            return null;
          }

          return this.has(name) ? window.UtilElementDataStore[el.customDataTag][name] : null;
        },

        has: function (name) {
          if (!el) {
            return false;
          }

          if (el.customDataTag === undefined) {
            return false;
          }

          return (window.UtilElementDataStore[el.customDataTag] && window.UtilElementDataStore[el.customDataTag][name]) ? true : false;
        },

        remove: function (name) {
          if (el && this.has(name)) {
            delete window.UtilElementDataStore[el.customDataTag][name];
          }
        }
      };
    },

    deepExtend: function (out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj) continue;

        for (var key in obj) {
          if (!obj.hasOwnProperty(key)) {
            continue;
          }

          // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
          if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
            out[key] = ClicknextUtil.deepExtend(out[key], obj[key]);
            continue;
          }

          out[key] = obj[key];
        }
      }

      return out;
    },

    on: function (element, selector, event, handler) {
      if (!selector) {
        return;
      }

      var eventId = ClicknextUtil.getUniqueID('event');

      window.UtilDelegatedEventHandlers[eventId] = function (e) {
        var targets = element.querySelectorAll(selector);
        var target = e.target;

        while (target && target !== element) {
          for (var i = 0, j = targets.length; i < j; i++) {
            if (target === targets[i]) {
              handler.call(target, e);
            }
          }

          target = target.parentNode;
        }
      }

      ClicknextUtil.addEvent(element, event, window.UtilDelegatedEventHandlers[eventId]);

      return eventId;
    },

    off: function (element, event, eventId) {
      if (!element || !window.UtilDelegatedEventHandlers[eventId]) {
        return;
      }

      ClicknextUtil.removeEvent(element, event, window.UtilDelegatedEventHandlers[eventId]);

      delete window.UtilDelegatedEventHandlers[eventId];
    },

    getUniqueID: function (prefix) {
      return prefix + Math.floor(Math.random() * (new Date()).getTime());
    },

    getViewPort: function () {
      var e = window,
        a = 'inner';
      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }

      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    },

    getBreakpoint: function (mode) {
      return breakpoints[mode];
    },

    isBreakpointUp: function (mode) {
      var width = this.getViewPort().width;
      var breakpoint = this.getBreakpoint(mode);

      return (width >= breakpoint);
    },

    isBreakpointDown: function (mode) {
      var width = this.getViewPort().width;
      var breakpoint = this.getBreakpoint(mode);

      return (width < breakpoint);
    },

    getScrollTop: function () {
      return (document.scrollingElement || document.documentElement).scrollTop;
    },

    getByTagName: function (query) {
      return document.getElementsByTagName(query);
    },

    hasClass: function (el, className) {
      if (!el) {
        return;
      }

      return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    },

    addEvent: function (el, type, handler, one) {
      if (typeof el !== 'undefined' && el !== null) {
        el.addEventListener(type, handler);
      }
    },

    removeEvent: function (el, type, handler) {
      if (el !== null) {
        el.removeEventListener(type, handler);
      }
    },

    isset: function (obj, keys) {
      var stone;

      keys = keys || '';

      if (keys.indexOf('[') !== -1) {
        throw new Error('Unsupported object path notation.');
      }

      keys = keys.split('.');

      do {
        if (obj === undefined) {
          return false;
        }

        stone = keys.shift();

        if (!obj.hasOwnProperty(stone)) {
          return false;
        }

        obj = obj[stone];

      } while (keys.length);

      return true;
    },

    init: function (settings) {
      if (settings && settings.breakpoints) {
        breakpoints = settings.breakpoints;
      }

      _windowResizeHandler();
    },

    addResizeHandler: function (callback) {
      resizeHandlers.push(callback);
    },

    ready: function (callback) {
      if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        callback();
      } else {
        document.addEventListener('DOMContentLoaded', callback);
      }
    },

    hasAttr: function (el, name) {
      if (el == undefined) {
        return;
      }

      return el.getAttribute(name) ? true : false;
    },

    attr: function (el, name, value) {
      if (el == undefined) {
        return;
      }

      if (value !== undefined) {
        el.setAttribute(name, value);
      } else {
        return el.getAttribute(name);
      }
    },

    addClass: function (el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          if (classNames[i] && classNames[i].length > 0) {
            el.classList.add(ClicknextUtil.trim(classNames[i]));
          }
        }
      } else if (!ClicknextUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className += ' ' + ClicknextUtil.trim(classNames[x]);
        }
      }
    },

    removeClass: function (el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          el.classList.remove(ClicknextUtil.trim(classNames[i]));
        }
      } else if (ClicknextUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className = el.className.replace(new RegExp('\\b' + ClicknextUtil.trim(classNames[x]) + '\\b', 'g'), '');
        }
      }
    },

    trim: function (string) {
      return string.trim();
    },

    find: function (parent, query) {
      parent = ClicknextUtil.getById(parent);
      if (parent) {
        return parent.querySelector(query);
      }
    },

    isOffscreen: function (el, direction, offset) {
      offset = offset || 0;

      var windowWidth = ClicknextUtil.getViewPort().width;
      var windowHeight = ClicknextUtil.getViewPort().height;

      var top = ClicknextUtil.offset(el).top;
      var height = ClicknextUtil.outerHeight(el) + offset;
      var left = ClicknextUtil.offset(el).left;
      var width = ClicknextUtil.outerWidth(el) + offset;

      if (direction == 'bottom') {
        if (windowHeight < top + height) {
          return true;
        } else if (windowHeight > top + height * 1.5) {
          return true;
        }
      }

      if (direction == 'top') {
        if (top < 0) {
          return true;
        } else if (top > height) {
          return true;
        }
      }

      if (direction == 'left') {
        if (left < 0) {
          return true;
        } else if (left * 2 > width) {
          //console.log('left 2');
          //return true;
        }
      }

      if (direction == 'right') {
        if (windowWidth < left + width) {
          return true;
        } else {
          //console.log('right 2');
          //return true;
        }
      }

      return false;
    },

    offset: function (el) {
      var rect, win;

      if (!el) {
        return;
      }

      // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error

      if (!el.getClientRects().length) {
        return { top: 0, left: 0 };
      }

      // Get document-relative position by adding viewport scroll to viewport-relative gBCR
      rect = el.getBoundingClientRect();
      win = el.ownerDocument.defaultView;

      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },

    outerHeight: function (el, withMargin) {
      var height = el.offsetHeight;
      var style;

      if (typeof withMargin !== 'undefined' && withMargin === true) {
        style = getComputedStyle(el);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);

        return height;
      } else {
        return height;
      }
    },

    outerWidth: function (el, margin) {
      var width;

      if (margin === true) {
        width = parseFloat(el.offsetWidth);
        width += parseFloat(ClicknextUtil.css(el, 'margin-left')) + parseFloat(ClicknextUtil.css(el, 'margin-right'));

        return parseFloat(width);
      } else {
        width = parseFloat(el.offsetWidth);

        return width;
      }
    },

    throttle: function (timer, func, delay) {
      // If setTimeout is already scheduled, no need to do anything
      if (timer) {
        return;
      }

      // Schedule a setTimeout after delay seconds
      timer = setTimeout(function () {
        func();

        // Once setTimeout function execution is finished, timerId = undefined so that in <br>
        // the next scroll event function execution can be scheduled by the setTimeout
        timer = undefined;
      }, delay);
    },

    findAll: function (parent, query) {
      parent = ClicknextUtil.getById(parent);
      if (parent) {
        return parent.querySelectorAll(query);
      }
    },

    css: function (el, styleProp, value) {
      if (!el) {
        return;
      }

      if (value !== undefined) {
        el.style[styleProp] = value;
      } else {
        var defaultView = (el.ownerDocument || document).defaultView;
        // W3C standard way:
        if (defaultView && defaultView.getComputedStyle) {
          // sanitize property name to css notation
          // (hyphen separated words eg. font-Size)
          styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
          return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        } else if (el.currentStyle) { // IE
          // sanitize property name to camelCase
          styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
            return letter.toUpperCase();
          });
          value = el.currentStyle[styleProp];
          // convert other units to pixels on IE
          if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function (value) {
              var oldLeft = el.style.left,
                oldRsLeft = el.runtimeStyle.left;
              el.runtimeStyle.left = el.currentStyle.left;
              el.style.left = value || 0;
              value = el.style.pixelLeft + "px";
              el.style.left = oldLeft;
              el.runtimeStyle.left = oldRsLeft;
              return value;
            })(value);
          }
          return value;
        }
      }
    },

    hasClasses: function (el, classes) {
      if (!el) {
        return;
      }

      var classesArr = classes.split(" ");

      for (var i = 0; i < classesArr.length; i++) {
        if (ClicknextUtil.hasClass(el, ClicknextUtil.trim(classesArr[i])) == false) {
          return false;
        }
      }

      return true;
    },

    insertAfter: function (el, referenceNode) {
      return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    },

    removeAttr: function (el, name) {
      if (el == undefined) {
        return;
      }

      el.removeAttribute(name);
    },

    remove: function (el) {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    },

    child: function (el, selector, log) {
      var children = ClicknextUtil.children(el, selector, log);

      return children ? children[0] : null;
    },

    children: function (el, selector, log) {
      if (!el || !el.childNodes) {
        return;
      }

      var result = [],
        i = 0,
        l = el.childNodes.length;

      for (var i; i < l; ++i) {
        if (el.childNodes[i].nodeType == 1 && ClicknextUtil.matches(el.childNodes[i], selector, log)) {
          result.push(el.childNodes[i]);
        }
      }

      return result;
    },

    matches: function (el, selector, log) {
      var p = Element.prototype;
      var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      };

      if (el && el.tagName) {
        return f.call(el, selector);
      } else {
        return false;
      }
    },

    slide: function (el, dir, speed, callback, recalcMaxHeight) {
      if (!el || (dir == 'up' && ClicknextUtil.visible(el) === false) || (dir == 'down' && ClicknextUtil.visible(el) === true)) {
        return;
      }

      speed = (speed ? speed : 600);
      var calcHeight = ClicknextUtil.actualHeight(el);
      var calcPaddingTop = false;
      var calcPaddingBottom = false;

      if (ClicknextUtil.css(el, 'padding-top') && ClicknextUtil.data(el).has('slide-padding-top') !== true) {
        ClicknextUtil.data(el).set('slide-padding-top', ClicknextUtil.css(el, 'padding-top'));
      }

      if (ClicknextUtil.css(el, 'padding-bottom') && ClicknextUtil.data(el).has('slide-padding-bottom') !== true) {
        ClicknextUtil.data(el).set('slide-padding-bottom', ClicknextUtil.css(el, 'padding-bottom'));
      }

      if (ClicknextUtil.data(el).has('slide-padding-top')) {
        calcPaddingTop = parseInt(ClicknextUtil.data(el).get('slide-padding-top'));
      }

      if (ClicknextUtil.data(el).has('slide-padding-bottom')) {
        calcPaddingBottom = parseInt(ClicknextUtil.data(el).get('slide-padding-bottom'));
      }

      if (dir == 'up') { // up
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          ClicknextUtil.animate(0, calcPaddingTop, speed, function (value) {
            el.style.paddingTop = (calcPaddingTop - value) + 'px';
          }, 'linear');
        }

        if (calcPaddingBottom) {
          ClicknextUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = (calcPaddingBottom - value) + 'px';
          }, 'linear');
        }

        ClicknextUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = (calcHeight - value) + 'px';
        }, 'linear', function () {
          el.style.height = '';
          el.style.display = 'none';

          if (typeof callback === 'function') {
            callback();
          }
        });


      } else if (dir == 'down') { // down
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          ClicknextUtil.animate(0, calcPaddingTop, speed, function (value) {//
            el.style.paddingTop = value + 'px';
          }, 'linear', function () {
            el.style.paddingTop = '';
          });
        }

        if (calcPaddingBottom) {
          ClicknextUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = value + 'px';
          }, 'linear', function () {
            el.style.paddingBottom = '';
          });
        }

        ClicknextUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = value + 'px';
        }, 'linear', function () {
          el.style.height = '';
          el.style.display = '';
          el.style.overflow = '';

          if (typeof callback === 'function') {
            callback();
          }
        });
      }
    },

    slideUp: function (el, speed, callback) {
      ClicknextUtil.slide(el, 'up', speed, callback);
    },

    slideDown: function (el, speed, callback) {
      ClicknextUtil.slide(el, 'down', speed, callback);
    },

    animate: function (from, to, duration, update, easing, done) {
      /**
       * TinyAnimate.easings
       *  Adapted from jQuery Easing
       */
      var easings = {};
      var easing;

      easings.linear = function (t, b, c, d) {
        return c * t / d + b;
      };

      easing = easings.linear;

      // Early bail out if called incorrectly
      if (typeof from !== 'number' ||
        typeof to !== 'number' ||
        typeof duration !== 'number' ||
        typeof update !== 'function') {
        return;
      }

      // Create mock done() function if necessary
      if (typeof done !== 'function') {
        done = function () { };
      }

      // Pick implementation (requestAnimationFrame | setTimeout)
      var rAF = window.requestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 50);
      };

      // Animation loop
      var canceled = false;
      var change = to - from;

      function loop(timestamp) {
        var time = (timestamp || +new Date()) - start;

        if (time >= 0) {
          update(easing(time, from, change, duration));
        }
        if (time >= 0 && time >= duration) {
          update(to);
          done();
        } else {
          rAF(loop);
        }
      }

      update(from);

      // Start animation loop
      var start = window.performance && window.performance.now ? window.performance.now() : +new Date();

      rAF(loop);
    },

    visible: function (el) {
      return !(el.offsetWidth === 0 && el.offsetHeight === 0);
    },

    actualHeight: function (el, cache) {
      return ClicknextUtil.actualCss(el, 'height', cache);
    },

    actualWidth: function (el, cache) {
      return ClicknextUtil.actualCss(el, 'width', cache);
    },

    actualCss: function (el, prop, cache) {
      var css = '';

      if (el instanceof HTMLElement === false) {
        return;
      }

      if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
        var value;

        // the element is hidden so:
        // making the el block so we can meassure its height but still be hidden
        css = el.style.cssText;
        el.style.cssText = 'position: absolute; visibility: hidden; display: block;';

        if (prop == 'width') {
          value = el.offsetWidth;
        } else if (prop == 'height') {
          value = el.offsetHeight;
        }

        el.style.cssText = css;

        // store it in cache
        el.setAttribute('kt-hidden-' + prop, value);

        return parseFloat(value);
      } else {
        // store it in cache
        return parseFloat(el.getAttribute('kt-hidden-' + prop));
      }
    },

    scrollTop: function (offset, duration) {
      ClicknextUtil.scrollTo(null, offset, duration);
    },

    scrollTo: function (target, offset, duration) {
      var duration = duration ? duration : 500;
      var targetPos = target ? KTUtil.offset(target).top : 0;
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var from, to;

      if (offset) {
        scrollPos += offset;
      }

      from = scrollPos;
      to = targetPos;

      ClicknextUtil.animate(from, to, duration, function (value) {
        document.documentElement.scrollTop = value;
        document.body.parentNode.scrollTop = value;
        document.body.scrollTop = value;
      }); //, easing, done
    },

    /**
     * Checks whether current device is mobile touch.
     * @returns {boolean}
     */
    isMobileDevice: function () {
      let test = this.getViewPort().width < this.getBreakpoint('lg')

      if (test === false) {
        // For use within normal web clients
        test = navigator.userAgent.match(/iPad/i) != null
      }

      return test
    },

    /**
     * Checks whether current device is desktop.
     * @returns {boolean}
     */
    isDesktopDevice: function () {
      return !Util.isDesktopDevice()
    },

  }
}();

ClicknextUtil.ready(function () {
  if (typeof AppSettings !== 'undefined') {
    ClicknextUtil.init(AppSettings);
  } else {
    ClicknextUtil.init();
  }
});

export default ClicknextUtil;