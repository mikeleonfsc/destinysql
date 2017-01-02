/* newarrivals.js */
Class.create(BaseController, {
	init: function() {
		this.showLoading();
		DAO.load({endpoint: "NewArrivalsController.Contents", container: this.elementMap.get(NewArrivalsController_DIV_NEW_ARRIVALS_CONTENT)});
	},
	
	registerEvents: function() {
		Event.observe(this.elementMap.get(NewArrivalsController_ANCHOR_NEW_ARRIVALS_PREV), "mousedown", this.previousButtonHandler.bind(this));
		Event.observe(this.elementMap.get(NewArrivalsController_ANCHOR_NEW_ARRIVALS_NEXT), "mousedown", this.nextButtonHandler.bind(this));
	},
	
	nextButtonHandler: function() {
		var contents = Registry.lookup("NewArrivalsController.Contents");
		if (contents) {
			contents.nextPage();
		}
    },
    
    previousButtonHandler: function() {
        var contents = Registry.lookup("NewArrivalsController.Contents");
        if (contents) {
        	contents.previousPage();
        }
    },
    
    showLoading: function() {
    	this.elementMap.get(NewArrivalsController_DIV_NEW_ARRIVALS_LOADING).show();
    },
    
    hideLoading: function() {
    	this.elementMap.get(NewArrivalsController_DIV_NEW_ARRIVALS_LOADING).hide();
    },
    
    showNextButton: function() {
    	this.elementMap.get(NewArrivalsController_ANCHOR_NEW_ARRIVALS_NEXT).show();
    },
    
    hideNextButton: function() {
    	this.elementMap.get(NewArrivalsController_ANCHOR_NEW_ARRIVALS_NEXT).hide();
    },

    showPreviousButton: function() {
    	this.elementMap.get(NewArrivalsController_ANCHOR_NEW_ARRIVALS_PREV).show();
    },
    
    hidePreviousButton: function() {
    	this.elementMap.get(NewArrivalsController_ANCHOR_NEW_ARRIVALS_PREV).hide();
    }
});