"use strict";

import Toggle from '../../components/toggle'
import Util from '../../components/util'

var LayoutHeaderTopbar = function() {
    // Private properties
	var _toggleElement;
    var _toggleObject;

    // Private functions
    var _init = function() {
		_toggleObject = new Toggle(_toggleElement, Util.getBody(), {
			targetState: 'topbar-mobile-on',
			toggleState: 'active'
		});
    }

    // Public methods
	return {
		init: function(id) {
            _toggleElement = Util.getById(id);

			if (!_toggleElement) {
                return;
            }

            // Initialize
            _init();
		},

        getToggleElement: function() {
            return _toggleElement;
        }
	};
}();



export default LayoutHeaderTopbar;