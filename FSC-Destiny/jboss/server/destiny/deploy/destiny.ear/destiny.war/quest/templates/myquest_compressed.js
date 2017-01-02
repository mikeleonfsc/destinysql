Class.create(BaseController,{init:function(){var a=Registry.lookup("MyQuestController.MyShelves");$(Top10Controller_DIV_TOP10).hide();$(NewArrivalsController_DIV_NEW_ARRIVALS_MAIN).hide();$(PublicListsController_DIV_PUBLIC_LISTS_MAIN).hide();if(a){var b=a.getCurrentlyLoadingShelf();if(b){this.loadShelf(b);a.clearCurrentlyLoadingShelf()}}else{if(this.data.loadInbox){this.loadInBox()}else{this.loadUpdates()}}var c=Registry.lookup("MenuBarController.MenuData");c.setViewMode(MenuBarController_VIEW_MODE_BOOK_CLUB)},registerEvents:function(){},loadShelf:function(a){Registry.unregister("NewArrivalsController.Loader");Registry.unregister("Top10Controller.Top10");Registry.unregister("PublicListsController.Load");Registry.unregister("LimiterController.Limiters");Registry.unregister("VisualSearchController.VisualSearch");var b=Registry.lookup("SearchTypeController.Selector");if(b&&Object.isFunction(b.hide)){b.hide()}this.updateWrapperClass("myQuestShelf"+a);return DAO.load({endpoint:"MyQuestShelfController.Loader",container:$(MyQuestController_DIV_MYQUEST_MAIN_CONTENT)},a)
},loadUpdates:function(){this.updateWrapperClass("myQuestUpdates");return DAO.load({endpoint:"MyQuestUpdatesController.Loader",container:$(MyQuestController_DIV_MYQUEST_MAIN_CONTENT)})},loadInBox:function(){this.updateWrapperClass("myQuestInbox");return DAO.load({endpoint:"MyQuestInboxController.Loader",container:$(MyQuestController_DIV_MYQUEST_MAIN_CONTENT)})},loadFriends:function(){this.updateWrapperClass("myQuestFriends");return DAO.load({endpoint:"MyQuestFriendsController.Loader",container:$(MyQuestController_DIV_MYQUEST_MAIN_CONTENT)})},loadPreferences:function(){this.updateWrapperClass("myQuestPref");return DAO.load({endpoint:"MyQuestPreferencesController.Loader",container:$(MyQuestController_DIV_MYQUEST_MAIN_CONTENT)})},updateWrapperClass:function(a){if($(MyQuestController_DIV_MYQUEST_MAIN_CONTENT_WRAPPER)){$(MyQuestController_DIV_MYQUEST_MAIN_CONTENT_WRAPPER).className=a}},showLoading:function(){var a=ReusableTemplates.load("EmptyImageTemplate",{id:"loading",styleClass:"loading",altText:MessageHelper.format("myQuestController_loading")});
this.elementMap.get(MyQuestController_DIV_MYQUEST_MAIN_CONTENT).update(a)},updateContent:function(a){this.elementMap.get(MyQuestController_DIV_MYQUEST_MAIN_CONTENT).innerHTML=a},updateShelfCounts:function(a){this.elementMap.get(MyQuestController_DIV_MYQUEST_HAVE_READ_COUNT).down("a").update(a.haveread);this.elementMap.get(MyQuestController_DIV_MYQUEST_CURRENT_COUNT).down("a").update(a.current);this.elementMap.get(MyQuestController_DIV_MYQUEST_TO_READ_COUNT).down("a").update(a.toread)}});