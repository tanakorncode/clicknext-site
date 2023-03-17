"use strict";

import Util from "./util";

// Component Definition
var Menu = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = Util.getById(elementId);
    var body = Util.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        // scrollable area with Perfect Scroll
        scroll: {
            rememberPosition: false
        },

        // accordion submenu mode
        accordion: {
            slideSpeed: 200, // accordion toggle slide speed in milliseconds
            autoScroll: false, // enable auto scrolling(focus) to the clicked menu item
            autoScrollSpeed: 1200,
            expandAll: true // allow having multiple expanded accordions in the menu
        },

        // dropdown submenu mode
        dropdown: {
            timeout: 500 // timeout in milliseconds to show and hide the hoverable submenu dropdown
        }
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Run plugin
         * @returns {Menu}
         */
        construct: function(options) {
            if (Util.data(element).has('menu')) {
                the = Util.data(element).get('menu');
            } else {
                // reset menu
                Plugin.init(options);

                // reset menu
                Plugin.reset();

                // build menu
                Plugin.build();

                Util.data(element).set('menu', the);
            }

            return the;
        },

        /**
         * Handles submenu click toggle
         * @returns {Menu}
         */
        init: function(options) {
            the.events = [];

            the.eventHandlers = {};

            // merge default and user defined options
            the.options = Util.deepExtend({}, defaultOptions, options);

            // pause menu
            the.pauseDropdownHoverTime = 0;

            the.uid = Util.getUniqueID();
        },

        update: function(options) {
            // merge default and user defined options
            the.options = Util.deepExtend({}, defaultOptions, options);

            // pause menu
            the.pauseDropdownHoverTime = 0;

             // reset menu
            Plugin.reset();

            the.eventHandlers = {};

            // build menu
            Plugin.build();

            Util.data(element).set('menu', the);
        },

        reload: function() {
             // reset menu
            Plugin.reset();

            // build menu
            Plugin.build();

            // reset submenu props
            Plugin.resetSubmenuProps();
        },

        /**
         * Reset menu
         * @returns {Menu}
         */
        build: function() {
            // General accordion submenu toggle
            the.eventHandlers['event_1'] = Util.on( element, '.menu-toggle', 'click', Plugin.handleSubmenuAccordion);

            // Dropdown mode(hoverable)
            if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) {
                // dropdown submenu - hover toggle
                the.eventHandlers['event_2'] = Util.on( element, '[data-menu-toggle="hover"]', 'mouseover', Plugin.handleSubmenuDrodownHoverEnter);
                the.eventHandlers['event_3'] = Util.on( element, '[data-menu-toggle="hover"]', 'mouseout', Plugin.handleSubmenuDrodownHoverExit);

                // dropdown submenu - click toggle
                the.eventHandlers['event_4'] = Util.on( element, '[data-menu-toggle="click"] > .menu-toggle, [data-menu-toggle="click"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownClick);
                the.eventHandlers['event_5'] = Util.on( element, '[data-menu-toggle="tab"] > .menu-toggle, [data-menu-toggle="tab"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownTabClick);
            }

            // Handle general link click
            the.eventHandlers['event_6'] = Util.on(element, '.menu-item > .menu-link:not(.menu-toggle):not(.menu-link-toggle-skip)', 'click', Plugin.handleLinkClick);

            // Init scrollable menu
            if (the.options.scroll && the.options.scroll.height) {
                Plugin.scrollInit();
            }
        },

        /**
         * Reset menu
         * @returns {Menu}
         */
        reset: function() {
            Util.off( element, 'click', the.eventHandlers['event_1']);

            // dropdown submenu - hover toggle
            Util.off( element, 'mouseover', the.eventHandlers['event_2']);
            Util.off( element, 'mouseout', the.eventHandlers['event_3']);

            // dropdown submenu - click toggle
            Util.off( element, 'click', the.eventHandlers['event_4']);
            Util.off( element, 'click', the.eventHandlers['event_5']);

            // handle link click
            Util.off(element, 'click', the.eventHandlers['event_6']);
        },

        /**
         * Init scroll menu
         *
        */
        scrollInit: function() {
            if ( the.options.scroll && the.options.scroll.height ) {
                Util.scrollDestroy(element, true);
                Util.scrollInit(element, {mobileNativeScroll: true, windowScroll: false, resetHeightOnDestroy: true, handleWindowResize: true, height: the.options.scroll.height, rememberPosition: the.options.scroll.rememberPosition});
            } else {
                Util.scrollDestroy(element, true);
            }
        },

        /**
         * Update scroll menu
        */
        scrollUpdate: function() {
            if ( the.options.scroll && the.options.scroll.height ) {
                Util.scrollUpdate(element);
            }
        },

        /**
         * Scroll top
        */
        scrollTop: function() {
            if ( the.options.scroll && the.options.scroll.height ) {
                Util.scrollTop(element);
            }
        },

        /**
         * Get submenu mode for current breakpoint and menu state
         * @returns {Menu}
         */
        getSubmenuMode: function(el) {
            if ( Util.isBreakpointUp('lg') ) {
                if (el && Util.hasAttr(el, 'data-menu-toggle') && Util.attr(el, 'data-menu-toggle') == 'hover') {
                    return 'dropdown';
                }

                if ( Util.isset(the.options.submenu, 'desktop.state.body') ) {
                    if ( Util.hasClasses(body, the.options.submenu.desktop.state.body) ) {
                        return the.options.submenu.desktop.state.mode;
                    } else {
                        return the.options.submenu.desktop.default;
                    }
                } else if ( Util.isset(the.options.submenu, 'desktop') ) {
                    return the.options.submenu.desktop;
                }
            } else if ( Util.isBreakpointUp('md') && Util.isBreakpointDown('lg') && Util.isset(the.options.submenu, 'tablet') ) {
                return the.options.submenu.tablet;
            } else if ( Util.isBreakpointDown('md') && Util.isset(the.options.submenu, 'mobile') ) {
                return the.options.submenu.mobile;
            } else {
                return false;
            }
        },

        /**
         * Get submenu mode for current breakpoint and menu state
         * @returns {Menu}
         */
        isConditionalSubmenuDropdown: function() {
            if ( Util.isBreakpointUp('lg') && Util.isset(the.options.submenu, 'desktop.state.body') ) {
                return true;
            } else {
                return false;
            }
        },


        /**
         * Reset submenu attributes
         * @returns {Menu}
         */
        resetSubmenuProps: function(e) {
            var submenus = Util.findAll(element, '.menu-submenu');
            if ( submenus ) {
                for (var i = 0, len = submenus.length; i < len; i++) {
                    var submenu = submenus[0];

                    Util.css(submenu, 'display', '');
                    Util.css(submenu, 'overflow', '');

                    if (submenu.hasAttribute('data-hor-direction')) {
                        Util.removeClass(submenu, 'menu-submenu-left');
                        Util.removeClass(submenu, 'menu-submenu-right');
                        Util.addClass(submenu, submenu.getAttribute('data-hor-direction'));
                    }
                }
            }
        },

        /**
         * Handles submenu hover toggle
         * @returns {Menu}
         */
        handleSubmenuDrodownHoverEnter: function(e) {
            if ( Plugin.getSubmenuMode(this) === 'accordion' ) {
                return;
            }

            if ( the.resumeDropdownHover() === false ) {
                return;
            }

            var item = this;

            if ( item.getAttribute('data-hover') == '1' ) {
                item.removeAttribute('data-hover');
                clearTimeout( item.getAttribute('data-timeout') );
                item.removeAttribute('data-timeout');
            }

            Plugin.showSubmenuDropdown(item);
        },

        /**
         * Handles submenu hover toggle
         * @returns {Menu}
         */
        handleSubmenuDrodownHoverExit: function(e) {
            if ( the.resumeDropdownHover() === false ) {
                return;
            }

            if ( Plugin.getSubmenuMode(this) === 'accordion' ) {
                return;
            }

            var item = this;
            var time = the.options.dropdown.timeout;

            var timeout = setTimeout(function() {
                if ( item.getAttribute('data-hover') == '1' ) {
                    Plugin.hideSubmenuDropdown(item, true);
                }
            }, time);

            item.setAttribute('data-hover', '1');
            item.setAttribute('data-timeout', timeout);
        },

        /**
         * Handles submenu click toggle
         * @returns {Menu}
         */
        handleSubmenuDropdownClick: function(e) {
            if ( Plugin.getSubmenuMode(this) === 'accordion' ) {
                return;
            }

            var item = this.closest('.menu-item');

            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }

            if ( item.getAttribute('data-menu-submenu-mode') == 'accordion' ) {
                return;
            }

            if ( Util.hasClass(item, 'menu-item-hover') === false ) {
                Util.addClass(item, 'menu-item-open-dropdown');
                Plugin.showSubmenuDropdown(item);
            } else {
                Util.removeClass(item, 'menu-item-open-dropdown' );
                Plugin.hideSubmenuDropdown(item, true);
            }

            e.preventDefault();
        },

        /**
         * Handles tab click toggle
         * @returns {Menu}
         */
        handleSubmenuDropdownTabClick: function(e) {
            if (Plugin.getSubmenuMode(this) === 'accordion') {
                return;
            }
            var item = this.closest('.menu-item');

            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }

            if (item.getAttribute('data-menu-submenu-mode') == 'accordion') {
                return;
            }

            if (Util.hasClass(item, 'menu-item-hover') == false) {
                Util.addClass(item, 'menu-item-open-dropdown');
                Plugin.showSubmenuDropdown(item);
            }

            e.preventDefault();
        },

        /**
         * Handles link click
         * @returns {Menu}
         */
        handleLinkClick: function(e) {
            var submenu = this.closest('.menu-item.menu-item-submenu');

            // Trigger click event handlers
            var result = Plugin.eventTrigger('linkClick', this, e);
            if (result === false) {
                return;
            }

            if ( submenu && Plugin.getSubmenuMode(submenu) === 'dropdown' ) {
                Plugin.hideSubmenuDropdowns();
            }
        },

        /**
         * Handles submenu dropdown close on link click
         * @returns {Menu}
         */
        handleSubmenuDropdownClose: function(e, el) {
            // exit if its not submenu dropdown mode
            if (Plugin.getSubmenuMode(el) === 'accordion') {
                return;
            }

            var shown = element.querySelectorAll('.menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)');

            // check if currently clicked link's parent item ha
            if (shown.length > 0 && Util.hasClass(el, 'menu-toggle') === false && el.querySelectorAll('.menu-toggle').length === 0) {
                // close opened dropdown menus
                for (var i = 0, len = shown.length; i < len; i++) {
                    Plugin.hideSubmenuDropdown(shown[0], true);
                }
            }
        },

        /**
         * helper functions
         * @returns {Menu}
         */
        handleSubmenuAccordion: function(e, el) {
            var query;
            var item = el ? el : this;

            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }

            if ( Plugin.getSubmenuMode(el) === 'dropdown' && (query = item.closest('.menu-item') ) ) {
                if (query.getAttribute('data-menu-submenu-mode') != 'accordion' ) {
                    e.preventDefault();
                    return;
                }
            }

            var li = item.closest('.menu-item');
            var submenu = Util.child(li, '.menu-submenu, .menu-inner');

            if (Util.hasClass(item.closest('.menu-item'), 'menu-item-open-always')) {
                return;
            }

            if ( li && submenu ) {
                e.preventDefault();
                var speed = the.options.accordion.slideSpeed;
                var hasClosables = false;

                if ( Util.hasClass(li, 'menu-item-open') === false ) {
                    // hide other accordions
                    if ( the.options.accordion.expandAll === false ) {
                        var subnav = item.closest('.menu-nav, .menu-subnav');
                        var closables = Util.children(subnav, '.menu-item.menu-item-open.menu-item-submenu:not(.menu-item-here):not(.menu-item-open-always)');

                        if ( subnav && closables ) {
                            for (var i = 0, len = closables.length; i < len; i++) {
                                var el_ = closables[0];
                                var submenu_ = Util.child(el_, '.menu-submenu');
                                if ( submenu_ ) {
                                    Util.slideUp(submenu_, speed, function() {
                                        Plugin.scrollUpdate();
                                        Util.removeClass(el_, 'menu-item-open');
                                    });
                                }
                            }
                        }
                    }

                    Util.slideDown(submenu, speed, function() {
                        Plugin.scrollToItem(item);
                        Plugin.scrollUpdate();

                        Plugin.eventTrigger('submenuToggle', submenu, e);
                    });

                    Util.addClass(li, 'menu-item-open');

                } else {
                    Util.slideUp(submenu, speed, function() {
                        Plugin.scrollToItem(item);
                        Plugin.scrollUpdate();
                        Plugin.eventTrigger('submenuToggle', submenu, e);
                    });

                    Util.removeClass(li, 'menu-item-open');
                }
            }
        },

        /**
         * scroll to item function
         * @returns {Menu}
         */
        scrollToItem: function(item) {
            // handle auto scroll for accordion submenus
            if ( Util.isBreakpointUp('lg')  && the.options.accordion.autoScroll && element.getAttribute('data-menu-scroll') !== '1' ) {
                Util.scrollTo(item, the.options.accordion.autoScrollSpeed);
            }
        },

        /**
         * Hide submenu dropdown
         * @returns {Menu}
         */
        hideSubmenuDropdown: function(item, classAlso) {
            // remove submenu activation class
            if ( classAlso ) {
                Util.removeClass(item, 'menu-item-hover');
                Util.removeClass(item, 'menu-item-active-tab');
            }

            // clear timeout
            item.removeAttribute('data-hover');

            if ( item.getAttribute('data-menu-toggle-class') ) {
                Util.removeClass(body, item.getAttribute('data-menu-toggle-class'));
            }

            var timeout = item.getAttribute('data-timeout');
            item.removeAttribute('data-timeout');
            clearTimeout(timeout);
        },

        /**
         * Hide submenu dropdowns
         * @returns {Menu}
         */
        hideSubmenuDropdowns: function() {
            var items;
            if ( items = element.querySelectorAll('.menu-item-submenu.menu-item-hover:not(.menu-item-tabs):not([data-menu-toggle="tab"])') ) {
                for (var j = 0, cnt = items.length; j < cnt; j++) {
                    Plugin.hideSubmenuDropdown(items[j], true);
                }
            }
        },

        /**
         * helper functions
         * @returns {Menu}
         */
        showSubmenuDropdown: function(item) {
            // close active submenus
            var list = element.querySelectorAll('.menu-item-submenu.menu-item-hover, .menu-item-submenu.menu-item-active-tab');

            if ( list ) {
                for (var i = 0, len = list.length; i < len; i++) {
                    var el = list[i];
                    if ( item !== el && el.contains(item) === false && item.contains(el) === false ) {
                        Plugin.hideSubmenuDropdown(el, true);
                    }
                }
            }

            // add submenu activation class
            Util.addClass(item, 'menu-item-hover');

            // Change the alignment of submenu is offscreen.
            var submenu = Util.find(item, '.menu-submenu');

            if (submenu && submenu.hasAttribute('data-hor-direction') === false) {
                if (Util.hasClass(submenu, 'menu-submenu-left')) {
                    submenu.setAttribute('data-hor-direction', 'menu-submenu-left');
                } else if (Util.hasClass(submenu, 'menu-submenu-right')) {
                    submenu.setAttribute('data-hor-direction', 'menu-submenu-right');
                }
            }

            if ( submenu && Util.isOffscreen(submenu, 'left', 15) === true ) {
                Util.removeClass(submenu, 'menu-submenu-left');
                Util.addClass(submenu, 'menu-submenu-right');
            } else if ( submenu && Util.isOffscreen(submenu, 'right', 15) === true ) {
                Util.removeClass(submenu, 'menu-submenu-right');
                // Util.addClass(submenu, 'menu-submenu-left');
            }

            if ( item.getAttribute('data-menu-toggle-class') ) {
                Util.addClass(body, item.getAttribute('data-menu-toggle-class'));
            }
        },

        /**
         * Handles submenu slide toggle
         * @returns {Menu}
         */
        createSubmenuDropdownClickDropoff: function(el) {
            var query;
            var zIndex = (query = Util.child(el, '.menu-submenu') ? Util.css(query, 'z-index') : 0) - 1;

            var dropoff = document.createElement('<div class="menu-dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + zIndex + '"></div>');

            body.appendChild(dropoff);

            Util.addEvent(dropoff, 'click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                Util.remove(this);
                Plugin.hideSubmenuDropdown(el, true);
            });
        },

        /**
         * Handles submenu hover toggle
         * @returns {Menu}
         */
        pauseDropdownHover: function(time) {
            var date = new Date();

            the.pauseDropdownHoverTime = date.getTime() + time;
        },

        /**
         * Handles submenu hover toggle
         * @returns {Menu}
         */
        resumeDropdownHover: function() {
            var date = new Date();

            return (date.getTime() > the.pauseDropdownHoverTime ? true : false);
        },

        /**
         * Reset menu's current active item
         * @returns {Menu}
         */
        resetActiveItem: function(item) {
            var list;
            var parents;

            list = element.querySelectorAll('.menu-item-active');

            for (var i = 0, len = list.length; i < len; i++) {
                var el = list[0];
                Util.removeClass(el, 'menu-item-active');
                Util.hide( Util.child(el, '.menu-submenu') );
                parents = Util.parents(el, '.menu-item-submenu') || [];

                for (var i_ = 0, len_ = parents.length; i_ < len_; i_++) {
                    var el_ = parents[i];
                    Util.removeClass(el_, 'menu-item-open');
                    Util.hide( Util.child(el_, '.menu-submenu') );
                }
            }

            // close open submenus
            if ( the.options.accordion.expandAll === false ) {
                if ( list = element.querySelectorAll('.menu-item-open') ) {
                    for (var i = 0, len = list.length; i < len; i++) {
                        Util.removeClass(parents[0], 'menu-item-open');
                    }
                }
            }
        },

        /**
         * Sets menu's active item
         * @returns {Menu}
         */
        setActiveItem: function(item) {
            // reset current active item
            Plugin.resetActiveItem();

            var parents = Util.parents(item, '.menu-item-submenu') || [];
            for (var i = 0, len = parents.length; i < len; i++) {
                Util.addClass(parents[i], 'menu-item-open');
            }

            Util.addClass(item, 'menu-item-active');
        },

        /**
         * Returns page breadcrumbs for the menu's active item
         * @returns {Menu}
         */
        getBreadcrumbs: function(item) {
            var query;
            var breadcrumbs = [];
            var link = Util.child(item, '.menu-link');

            breadcrumbs.push({
                text: (query = Util.child(link, '.menu-text') ? query.innerHTML : ''),
                title: link.getAttribute('title'),
                href: link.getAttribute('href')
            });

            var parents = Util.parents(item, '.menu-item-submenu');
            for (var i = 0, len = parents.length; i < len; i++) {
                var submenuLink = Util.child(parents[i], '.menu-link');

                breadcrumbs.push({
                    text: (query = Util.child(submenuLink, '.menu-text') ? query.innerHTML : ''),
                    title: submenuLink.getAttribute('title'),
                    href: submenuLink.getAttribute('href')
                });
            }

            return  breadcrumbs.reverse();
        },

        /**
         * Returns page title for the menu's active item
         * @returns {Menu}
         */
        getPageTitle: function(item) {
            var query;

            return (query = Util.child(item, '.menu-text') ? query.innerHTML : '');
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name, target, e) {
            for (var i = 0; i < the.events.length; i++ ) {
                var event = the.events[i];
                if ( event.name == name ) {
                    if ( event.one == true ) {
                        if ( event.fired == false ) {
                            the.events[i].fired = true;
                            return event.handler.call(this, target, e);
                        }
                    } else {
                        return event.handler.call(this, target, e);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        },

        removeEvent: function(name) {
            if (the.events[name]) {
                delete the.events[name];
            }
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Update scroll
     */
    the.scrollUpdate = function() {
        return Plugin.scrollUpdate();
    };

    /**
     * Re-init scroll
     */
    the.scrollReInit = function() {
        return Plugin.scrollInit();
    };

    /**
     * Scroll top
     */
    the.scrollTop = function() {
        return Plugin.scrollTop();
    };

    /**
     * Set active menu item
     */
    the.setActiveItem = function(item) {
        return Plugin.setActiveItem(item);
    };

    the.reload = function() {
        return Plugin.reload();
    };

    the.update = function(options) {
        return Plugin.update(options);
    };

    /**
     * Set breadcrumb for menu item
     */
    the.getBreadcrumbs = function(item) {
        return Plugin.getBreadcrumbs(item);
    };

    /**
     * Set page title for menu item
     */
    the.getPageTitle = function(item) {
        return Plugin.getPageTitle(item);
    };

    /**
     * Get submenu mode
     */
    the.getSubmenuMode = function(el) {
        return Plugin.getSubmenuMode(el);
    };

    /**
     * Hide dropdown
     * @returns {Object}
     */
    the.hideDropdown = function(item) {
        Plugin.hideSubmenuDropdown(item, true);
    };

    /**
     * Hide dropdowns
     * @returns {Object}
     */
    the.hideDropdowns = function() {
        Plugin.hideSubmenuDropdowns();
    };

    /**
     * Disable menu for given time
     * @returns {Object}
     */
    the.pauseDropdownHover = function(time) {
        Plugin.pauseDropdownHover(time);
    };

    /**
     * Disable menu for given time
     * @returns {Object}
     */
    the.resumeDropdownHover = function() {
        return Plugin.resumeDropdownHover();
    };

    /**
     * Register event
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    the.off = function(name) {
        return Plugin.removeEvent(name);
    };

    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////

    // Run plugin
    Plugin.construct.apply(the, [options]);

    // Handle plugin on window resize
    Util.addResizeHandler(function() {
        if (init) {
            the.reload();
        }
    });

    // Init done
    init = true;

    // Return plugin instance
    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Menu;
}

// Plugin global lazy initialization
document.addEventListener("click", function (e) {
    var body = Util.getByTagName('body')[0];
    var query;
    if ( query = body.querySelectorAll('.menu-nav .menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)[data-menu-toggle="click"]') ) {
        for (var i = 0, len = query.length; i < len; i++) {
            var element = query[i].closest('.menu-nav').parentNode;

            if ( element ) {
                var the = Util.data(element).get('menu');

                if ( !the ) {
                    break;
                }

                if ( !the || the.getSubmenuMode() !== 'dropdown' ) {
                    break;
                }

                if ( e.target !== element && element.contains(e.target) === false ) {
                    the.hideDropdowns();
                }
            }
        }
    }
});

export default Menu;