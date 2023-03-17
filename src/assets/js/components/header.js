"use strict";

import Util from "./util";

// Component Definition
var ClicknextHeader = function (elementId, options) {
  // Main object
  var the = this;
  var init = false;

  // Get element object
  var element = Util.getById(elementId);
  var body = Util.getBody();

  if (element === undefined) {
    return;
  }

  // Default options
  var defaultOptions = {
    offset: {
      desktop: true,
      tabletAndMobile: true,
    },
    releseOnReverse: {
      desktop: false,
      tabletAndMobile: false,
    },
  };

  ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {ClicknextHeader}
     */
    construct: function (options) {
      if (Util.data(element).has("header")) {
        the = Util.data(element).get("header");
      } else {
        // reset header
        Plugin.init(options);

        // build header
        Plugin.build();

        Util.data(element).set("header", the);
      }

      return the;
    },

    /**
     * Handles subheader click toggle
     * @returns {ClicknextHeader}
     */
    init: function (options) {
      the.events = [];

      // merge default and user defined options
      the.options = Util.deepExtend({}, defaultOptions, options);
    },

    /**
     * Reset header
     * @returns {ClicknextHeader}
     */
    build: function () {
      var eventTriggerState = true;
      var lastScrollTop = 0;

      window.addEventListener("scroll", function () {
        var offset = 0,
          st,
          attrName;

        if (Util.isBreakpointDown("lg") && the.options.offset.tabletAndMobile === false) {
          return;
        }

        if (Util.isBreakpointUp("lg") && the.options.offset.desktop === false) {
          return;
        }

        if (Util.isBreakpointUp("lg")) {
          offset = the.options.offset.desktop;
        } else if (Util.isBreakpointDown("lg")) {
          offset = the.options.offset.tabletAndMobile;
        }

        st = Util.getScrollTop();

        if (
          (Util.isBreakpointDown("lg") && the.options.releseOnReverse.tabletAndMobile) ||
          (Util.isBreakpointUp("lg") && the.options.releseOnReverse.desktop)
        ) {
          if (st > offset && lastScrollTop < st) {
            // down scroll mode
            if (body.hasAttribute("data-header-scroll") === false) {
              body.setAttribute("data-header-scroll", "on");
            }

            if (eventTriggerState) {
              Plugin.eventTrigger("scrollOn", the);
              eventTriggerState = false;
            }
          } else {
            // back scroll mode
            if (body.hasAttribute("data-header-scroll") === true) {
              body.removeAttribute("data-header-scroll");
            }

            if (eventTriggerState == false) {
              Plugin.eventTrigger("scrollOff", the);
              eventTriggerState = true;
            }
          }

          lastScrollTop = st;
        } else {
          if (st > offset) {
            // down scroll mode
            if (body.hasAttribute("data-header-scroll") === false) {
              body.setAttribute("data-header-scroll", "on");
            }

            if (eventTriggerState) {
              Plugin.eventTrigger("scrollOn", the);
              eventTriggerState = false;
            }
          } else {
            // back scroll mode
            if (body.hasAttribute("data-header-scroll") === true) {
              body.removeAttribute("data-header-scroll");
            }

            if (eventTriggerState == false) {
              Plugin.eventTrigger("scrollOff", the);
              eventTriggerState = true;
            }
          }
        }
      });
    },

    /**
     * Trigger events
     */
    eventTrigger: function (name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];
        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },

    addEvent: function (name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false,
      });
    },
  };

  //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };

  /**
   * Register event
   */
  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };

  ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////

  // Run plugin
  Plugin.construct.apply(the, [options]);

  // Init done
  init = true;

  // Return plugin instance
  return the;
};

// webpack support
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = ClicknextHeader;
}

export default ClicknextHeader;
