Class.create(BaseController,{init:function(){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).update(MessageHelper.format("recommendationController_enterYourCommentsHere"));this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FIND_PATRON_LABEL).update(MessageHelper.format("recommendationController_findPatron"));this.modal.show();var b=this.data.mainTitle;var a=this.data.bibTypeDescription;var e=this.data.miniBibTypeIconURL;this.bibID=this.data.bibID;var d=new Element("img",{alt:a,title:a,height:16,border:0,width:20,src:e});var c=new Element("span");c.update(b);this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_DEFAULT_TITLE).insert(d);this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_DEFAULT_TITLE).insert(c);this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE).disable();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).enable();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).show();
this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).clear();this.elementMap.get(RecommendationController_SPAN_ADD_RECOMMENDATION_SELECTED_PATRON).hide();if(this.data.useBookClub){this.elementMap.get(RecommendationController_DIV_FRIENDS_WRAPPER).show();this.elementMap.get(RecommendationController_DIV_FIND_PATRON_AUTO_SUGGESTION_CONTROL).hide();this.elementMap.get(RecommendationController_RADIO_FRIENDS).checked=true;if(this.data.allowCommentMyQuest){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).show()}else{this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).hide()}if(this.data.friendApprovalRequired){this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL_FRIENDS).show()}else{this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL_FRIENDS).hide()}this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL).hide()}else{this.elementMap.get(RecommendationController_DIV_FRIENDS_WRAPPER).hide();
this.elementMap.get(RecommendationController_RADIO_FIND_PATRON).checked=true;if(this.data.allowCommentDestiny){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).show()}else{this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).hide()}if(this.data.approvalRequired){this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL).show()}else{this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL).hide()}this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL_FRIENDS).hide()}if(this.data.recommendToOthers){this.elementMap.get(RecommendationController_DIV_FIND_PATRON_AREA_WRAPPER).show();if(!this.data.useBookClub){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).activate()}}else{this.elementMap.get(RecommendationController_DIV_FIND_PATRON_AREA_WRAPPER).hide()}this.elementMap.get(RecommendationController_IMG_ADD_RECOMMENDATION_SEARCH_IN_PROGRESS).hide();
this.autocompleter=new PatronFindAutoComplete(this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON),this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FIND_PATRON_RESULTS),this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FIND_PATRON_RESULTS),this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON),function(){DAO.load({endpoint:"RecommendationController.AutoSuggest",container:this.update},this.getToken()+"z",this.bibID)},{indicator:this.elementMap.get(RecommendationController_IMG_ADD_RECOMMENDATION_SEARCH_IN_PROGRESS)});this.autocompleter.startMe();this.autocompleter.bibID=this.bibID;if(this.data.useBookClub){this._loadFriends()}},registerEvents:function(){Event.observe(this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_CLOSE),"mousedown",this.closeDialog.bind(this));Event.observe(this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT),"focus",this._defaultTextListener.bind(this));
Event.observe(this.elementMap.get(RecommendationController_RADIO_FRIENDS),"click",this._toggleFriend.bind(this));Event.observe(this.elementMap.get(RecommendationController_RADIO_FIND_PATRON),"click",this._togglePatron.bind(this));Event.observe(this.elementMap.get(RecommendationController_BUTTON_SELECT_ALL),"mousedown",this._setAllFriends.bind(this,true));Event.observe(this.elementMap.get(RecommendationController_BUTTON_CLEAR_ALL),"mousedown",this._setAllFriends.bind(this,false));Event.observe(this.elementMap.get(RecommendationController_SPAN_ADD_RECOMMENDATION_SELECTED_PATRON),"mousedown",this._clickSelectedPatron.bind(this));Event.observe(this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE),"click",this._saveAction.bind(this))},closeDialog:function(){this.modal.closeDialog()},_defaultTextListener:function(a){if(this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).value==MessageHelper.format("recommendationController_enterYourCommentsHere")){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).value=""
}},_selectPatron:function(){if(this.autocompleter.selectedPatron>=0){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).disable();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).hide();this.elementMap.get(RecommendationController_SPAN_ADD_RECOMMENDATION_SELECTED_PATRON).down().update(this.autocompleter.selectedPatronName);this.elementMap.get(RecommendationController_SPAN_ADD_RECOMMENDATION_SELECTED_PATRON).show();this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FIND_PATRON_LABEL).update(MessageHelper.format("recommendationController_to"));this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE).enable()}var a=this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT);if(a.visible()){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).activate()}},_saveAction:function(b,c,k){var a=this.bibID;var g=this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).value;
if(g==MessageHelper.format("recommendationController_enterYourCommentsHere")){g=""}var j;var h=[];var l=this.elementMap.get(RecommendationController_RADIO_FIND_PATRON).checked;if(l||!this.data.useBookClub){if(!this.autocompleter.saveEnabled||!this.autocompleter.selectedPatron){k.stop()}else{j=this.autocompleter.selectedPatron}}else{var e=$$("input[name='friendCheckboxes']");var f=0;for(var d=0;d<e.size();d++){if(!e[d].disabled&&e[d].checked){f++;h.push(e[d].value)}}}if(Object.isElement(this.elementMap.get(RecommendationController_RADIO_FRIENDS))){this.elementMap.get(RecommendationController_RADIO_FRIENDS).disable()}if(Object.isElement(this.elementMap.get(RecommendationController_RADIO_FIND_PATRON))){this.elementMap.get(RecommendationController_RADIO_FIND_PATRON).disable()}if(Object.isElement(this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE))){this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE).disable()}DAO.load({endpoint:"RecommendationController.Saver",method:"post"},a,j,h,g)
},_addFriend:function(b,a){var c=new Element("li",{id:"recommendationFriend_"+a.patronID});var e={type:"checkbox",name:"friendCheckboxes",id:"friendCheckboxes_"+a.patronID,value:a.patronID};if(a.duplicateRecommendationForTitle){e.disabled=true}var d="";if(a.siteName){d="&nbsp;["+a.siteName+"]"}c.insert(new Element("input",e));c.insert(a.displayName+d);b.insert(c);if(!a.duplicateRecommendationForTitle){Event.observe(c,"click",this._validateRecommendation.bind(this))}},updateFriends:function(d){if(d.friends!=null){var c=new Element("ul",{"class":"addRecommendationFriendsCheckboxList"});this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FRIENDS).update(c);var b=d.friends.dateGroups[0].items;for(var a=0;a<b.length;a++){this._addFriend(c,b[a])}this.autocompleter.enabled=false;this.elementMap.get(RecommendationController_DIV_EMPTY_FRIENDS_LIST_MSG).hide();this.elementMap.get(RecommendationController_DIV_FRIENDS_WRAPPER).show();if(this.data.useBookClub&&this.data.recommendToOthers){this.elementMap.get(RecommendationController_RADIO_FRIENDS).show();
this.elementMap.get(RecommendationController_RADIO_FIND_PATRON).show()}this.elementMap.get(RecommendationController_DIV_FRIENDS_CONTROLS).show();this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FRIENDS).show();this._setAllFriends(true);if(this.data.friendApprovalRequired){this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL_FRIENDS).show()}else{this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL_FRIENDS).hide()}this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL).hide()}else{this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FRIENDS).hide();this.elementMap.get(RecommendationController_BUTTON_SELECT_ALL).hide();this.elementMap.get(RecommendationController_BUTTON_CLEAR_ALL).hide();this.elementMap.get(RecommendationController_DIV_EMPTY_FRIENDS_LIST_MSG).show();this.elementMap.get(RecommendationController_RADIO_FRIENDS).disable();if(this.data.recommendToOthers){this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE).disable();
this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).enable();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).show();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).clear();this.elementMap.get(RecommendationController_SPAN_ADD_RECOMMENDATION_SELECTED_PATRON).hide();this.elementMap.get(RecommendationController_DIV_FIND_PATRON_AUTO_SUGGESTION_CONTROL).show();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).activate();this.autocompleter.reset();this.elementMap.get(RecommendationController_RADIO_FIND_PATRON).checked=true;if(this.data.allowCommentDestiny){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).show()}else{this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).clear();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).hide()}}if(this.data.approvalRequired){this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL).show()
}else{this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL).hide()}this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL_FRIENDS).hide()}},_toggleFriend:function(b){this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FIND_PATRON_LABEL).update(MessageHelper.format("recommendationController_findPatron"));this.elementMap.get(RecommendationController_DIV_FIND_PATRON_AUTO_SUGGESTION_CONTROL).hide();this.elementMap.get(RecommendationController_DIV_FRIENDS_CONTROLS).show();this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FRIENDS).show();if(this.data.friendApprovalRequired){this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL_FRIENDS).show()}else{this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL_FRIENDS).hide()}this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL).hide();var a=this.data;if(a.allowCommentMyQuest){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).show()
}else{this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).clear();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).hide()}this.elementMap.get(RecommendationController_DIV_FRIENDS_CONTROLS).show();this._setAllFriends(true);this.autocompleter.disable()},_togglePatron:function(b){this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE).disable();this.elementMap.get(RecommendationController_DIV_FRIENDS_CONTROLS).hide();this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FRIENDS).hide();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).enable();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).show();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).clear();this.elementMap.get(RecommendationController_SPAN_ADD_RECOMMENDATION_SELECTED_PATRON).hide();this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FIND_PATRON_LABEL).update(MessageHelper.format("recommendationController_findPatron"));
this.elementMap.get(RecommendationController_DIV_FIND_PATRON_AUTO_SUGGESTION_CONTROL).show();if(this.data.approvalRequired){this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL).show()}else{this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL).hide()}this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_NEEDS_APPROVAL_FRIENDS).hide();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).activate();var a=this.data;if(a.allowCommentDestiny){this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).show()}else{this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).clear();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_TEXT).hide()}this.autocompleter.reset();this.autocompleter.enable()},_clickSelectedPatron:function(a){this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE).disable();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).enable();
this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).show();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).clear();this.elementMap.get(RecommendationController_SPAN_ADD_RECOMMENDATION_SELECTED_PATRON).hide();this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FIND_PATRON_LABEL).update(MessageHelper.format("recommendationController_findPatron"));this.elementMap.get(RecommendationController_DIV_FIND_PATRON_AUTO_SUGGESTION_CONTROL).show();this.elementMap.get(RecommendationController_FIELD_ADD_RECOMMENDATION_FIND_PATRON).activate();this.autocompleter.reset()},_validateRecommendation:function(c,d){if(d==null){d=$$("input[name='friendCheckboxes']")}var b=false;for(var a=0;a<d.size();a++){if(!d[a].disabled&&d[a].checked){b=true;break}}if(b){this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE).enable()}else{this.elementMap.get(RecommendationController_BUTTON_ADD_RECOMMENDATION_SAVE).disable()
}},_setAllFriends:function(a){var c=$$("input[name='friendCheckboxes']");for(var b=0;b<c.size();b++){if(!c[b].disabled){c[b].checked=a}}this._validateRecommendation(null,c)},_loadFriends:function(){this.elementMap.get(RecommendationController_DIV_ADD_RECOMMENDATION_FRIENDS).update('<div id="myQuestLoadingDiv"><img src="/images/icons/general/spacer.gif" alt="'+MessageHelper.format("recommendationController_loading")+'" class="loading" /></div>');DAO.load({endpoint:"RecommendationController.FriendsList"},this.bibID)},showSuggestions:function(){this.autocompleter.updateChoices()}});