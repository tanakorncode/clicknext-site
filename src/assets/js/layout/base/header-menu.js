"use strict";

import Menu from '@/assets/js/components/menu'
import Offcanvas from '@/assets/js/components/offcanvas'
import Util from '@/assets/js/components/util'

var LayoutHeaderMenu = function() {
    // Private properties
	var _menuElement;
    var _menuObject;
    var _offcanvasElement;
    var _offcanvasObject;

    // Private functions
	var _init = function() {
		_offcanvasObject = new Offcanvas(_offcanvasElement, {
			overlay: true,
			baseClass: 'header-menu-wrapper',
			closeBy: 'cn_header_menu_mobile_close_btn',
			toggleBy: {
				target: 'cn_header_mobile_toggle',
				state: 'burger-icon-active'
			}
		});

		_menuObject = new Menu(_menuElement, {
			submenu: {
				desktop: 'dropdown',
				tablet: 'accordion',
				mobile: 'accordion'
			},
			accordion: {
				slideSpeed: 200, // accordion toggle slide speed in milliseconds
				expandAll: false // allow having multiple expanded accordions in the menu
			}
		});

		// Close aside offcanvas panel before page reload On tablet and mobile
        _menuObject.on('linkClick', function(menu) {
            if (Util.isBreakpointDown('lg')) { // Tablet and mobile mode
                _offcanvasObject.hide(); // Hide offcanvas after general link click
            }
        });
	}

    // Public methods
	return {
        init: function(menuId, offcanvasId) {
            _menuElement = Util.getById(menuId);
            _offcanvasElement = Util.getById(offcanvasId);

            if (!_menuElement) {
                return;
            }

            // Initialize menu
            _init();
		},

		getMenuElement: function() {
			return _menuElement;
		},

        getOffcanvasElement: function() {
			return _offcanvasElement;
		},

        getMenu: function() {
			return _menuObject;
		},

		pauseDropdownHover: function(time) {
			if (_menuObject) {
				_menuObject.pauseDropdownHover(time);
			}
		},

        getOffcanvas: function() {
			return _offcanvasObject;
		},

		closeMobileOffcanvas: function() {
			if (_menuObject && Util.isMobileDevice()) {
				_offcanvasObject.hide();
			}
		}
	};
}();



export default LayoutHeaderMenu;