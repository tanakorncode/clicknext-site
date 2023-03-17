"use strict";

import ClicknextHeader from "@/assets/js/components/header.js";
import ClicknextUtil from "@/assets/js/components/util.js";

var LayoutHeader = function() {
    // Private Properties
    var _element;
    var _elementForMobile;
    var _object;

	// Private Functions
	var _init = function() {
		var options = {
            offset: {
                desktop: 300,
                tabletAndMobile: false
            }
		};

		_object = new ClicknextHeader(_element, options);
	}

    // Get Height
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = ClicknextUtil.actualHeight(_element) + 1;
        }

        return height;
    }

    // Get Height
    var _getHeightForMobile = function() {
        var height;

        height = ClicknextUtil.actualHeight(_elementForMobile);

        return height;
    }

    // Public Methods
	return {
		init: function(id, idForMobile) {
            _element = ClicknextUtil.getById(id);
            _elementForMobile = ClicknextUtil.getById(idForMobile);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
		},

        isFixed: function() {
            return ClicknextUtil.hasClass(ClicknextUtil.getBody(), 'header-fixed')
        },

        isFixedForMobile: function() {
            return ClicknextUtil.hasClass(ClicknextUtil.getBody(), 'header-mobile-fixed')
        },

        getElement: function() {
            return _element;
        },

        getElementForMobile: function() {
            return _elementForMobile;
        },

        getHeader: function() {
            return _object;
        },

        getHeight: function() {
            return _getHeight();
        },

        getHeightForMobile: function() {
            return _getHeightForMobile();
        }
	};
}();



export default LayoutHeader;