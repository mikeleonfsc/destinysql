Class.create(BaseController,{init:function(){if(this.data.mapping==MyQuestController_MAPPING_UPDATES){var a=Registry.lookup("MyQuestUpdatesController.Loader")}else{if(this.data.mapping==MyQuestController_MAPPING_INBOX){var a=Registry.lookup("MyQuestInboxController.Loader")}else{if(this.data.mapping==MyQuestController_MAPPING_FRIENDS){var a=Registry.lookup("MyQuestFriendsController.Loader")}}}if(a&&Object.isFunction(a.addFriendCallback)){a.addFriendCallback(this.data)}},registerEvents:function(){}});