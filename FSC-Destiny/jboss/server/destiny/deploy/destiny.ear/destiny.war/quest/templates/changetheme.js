/* changetheme.js */
Class.create(BaseController, {
    init: function() {
		$("themeSS").href = this.data.newCSS;
    },

    registerEvents: function() {        
    	
    }

});