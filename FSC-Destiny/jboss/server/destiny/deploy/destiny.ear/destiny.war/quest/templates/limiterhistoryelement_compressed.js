Class.create(BaseController,{init:function(){var a=Registry.lookup("LimiterController.History");a.notifyHistoryLoaded(this.data)},registerEvents:function(){}});