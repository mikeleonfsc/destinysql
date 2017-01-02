Class.create(BaseController,{init:function(d){this.hitList=this.data.hitList;if(this.data.wpeHitList&&Object.isArray(this.data.wpeHitList.records)&&this.data.wpeHitList.records.length>0){this.hitList=this.data.wpeHitList}var a=Registry.lookup("ResourceListController.Master");var b=Registry.lookup("BooklistWidgetController.Load");if(this.name=="ResourceListController.ResourceList"){a.showResourceListOptions();if(this.hitList.records.length>0){a.showButtons()}else{a.hideButtons()}}else{if(this.name=="ResourceListController.MyInfo"){a.showMyInfoOptions()}else{a.hideOptions()}}if(!d){a.setTotalCount(this.data.totalCount);a.setListName(this.data.listName);var e=a.data;if(this.name=="ResourceListController.ResourceList"&&b&&Object.isFunction(b.updateTitleCounts)&&(!e.publicList||(e.publicList&&e.publicListOwnerUserID==e.loggedInUserID))){b.updateTitleCounts(this.data.totalCount);b.updateListName(this.data.listName);var h=Registry.lookup("BooklistSelectController.Widget");if(h){h.setBooklistValue(this.data.listID)
}}}var f=a.elementMap.get(ResourceListController_DIV_RESOURCE_LIST_DCPI_ERROR);if(this.data.dcpiErrorMessage){f.innerHTML=this.data.dcpiErrorMessage;f.style.display="block"}else{f.style.display="none"}if(this.hitList){if(this.hitList&&!this.hitList.options.hideQuickDetails){var g=Registry.lookup("HoverMasterController.HoverMaster");this.hoverGroup=g.createGroup({name:this.name,data:this.hitList.records,activatorContainer:this.container,hoverContainer:a.elementMap.get(ResourceListController_DIV_RESOURCE_LIST_WINDOW_CONTENT),controllerURL:this.hitList.hoverControllerURL,templateURL:this.hitList.hoverTemplateURL,openDelay:0.5,closeDelay:0.1,onShow:function(){a.elementMap.get(ResourceListController_DIV_RESOURCE_LIST_WINDOW_CONTENT).addClassName("high-zindex");var j=Utility.downToClass($("rlCacheInner"),"high-zindex");if(j){j.removeClassName("high-zindex")}var i=Utility.upToClass(this.currentActivator,"searchResult");i.addClassName("high-zindex")},onHide:function(){a.elementMap.get(ResourceListController_DIV_RESOURCE_LIST_WINDOW_CONTENT).removeClassName("high-zindex")
}})}a.setPageIndex(this.data.pageIndex,this.data.startIndex,this.data.endIndex);a.setNextButtonVisible(this.data.showNextButton);a.setPreviousButtonVisible(this.data.showPreviousButton);a.hideLoadingGraphic();if(!a.data.publicList){a.setTitle(this.data.title)}if(this.data.totalCount==0){a.hideResults()}a.modal.centerDialog();if(this.data.showNextButton&&!this.hasNextPage()){var c=a.fetchPage.bind(a,this.data.pageNumber+1);c.defer()}a.notifyPageDataUpdated(this.data.pageNumber)}},registerEvents:function(){var d=Registry.lookup("ResourceListController.Master");var l=Registry.lookup("TitleDetailsController.Master");var m=d.getListType();for(var g=0;g<this.hitList.records.length;g++){var a=g;var f=this.hitList.records[g];if(d.endpoint=="ResourceList"&&!d.data.publicList){var n=null;var h=null;if(m==ResourceListController_RESOURCE_LIST_TYPE_LIBRARY||m==ResourceListController_RESOURCE_LIST_TYPE_DCPI){if(f.dcpiRecordGUID){h=f.dcpiRecordGUID}else{n=f.bibID}}else{if(m==ResourceListController_RESOURCE_LIST_TYPE_WPE){n=f.recID
}else{n=f.resourceID}}var k=this.elementMap.get(CoverImageTemplate_DIV_TITLE_REMOVE_IMAGE+"rl_"+a);Event.observe(k,"mousedown",this.removeTitle.bind(this,n,h,m,f.dcpiRecordType,k));if(!window.isI18N){if(Object.isElement(this.elementMap.get(CoverImageTemplate_BUTTON_RESOURCE_LIST_CITATION_EDIT+"rl_"+a))){Event.observe(this.elementMap.get(CoverImageTemplate_BUTTON_RESOURCE_LIST_CITATION_EDIT+"rl_"+a),"mousedown",this.editCitation.bind(this,n,h,f.copySiteID,f.bibType,d.getListType()))}}}else{if(d.endpoint=="MyInfo"){if(Object.isElement(this.elementMap.get(HitListRecordTemplate_DIV_TITLE_RENEW_IMAGE+"rl_"+a))){Event.observe(this.elementMap.get(HitListRecordTemplate_DIV_TITLE_RENEW_IMAGE+"rl_"+a),"mousedown",this.renewTitle.bind(this,f.bibID,f.copyID,a))}if(Object.isElement(this.elementMap.get(CoverImageTemplate_DIV_RECOMMEND_TITLE_IMAGE+"rl_"+a))){Event.observe(this.elementMap.get(CoverImageTemplate_DIV_RECOMMEND_TITLE_IMAGE+"rl_"+a),"mousedown",this.sendRecommendation.bind(this,f.bibID))}}else{if(d.endpoint=="Holds"){var j=f.holdID;
if(!f.holdIsReady&&f.canDeleteHolds){Event.observe(this.elementMap.get(CoverImageTemplate_DIV_TITLE_REMOVE_IMAGE+"rl_"+a),"mousedown",this.deleteHold.bind(this,j))}}else{if(d.endpoint=="Recommendations"){var b=f.recommendationID;Event.observe(this.elementMap.get(CoverImageTemplate_DIV_TITLE_REMOVE_IMAGE+"rl_"+a),"mousedown",this.deleteRecommendation.bind(this,b));if(f.hasRecommendationComment){Event.observe(this.elementMap.get(CoverImageTemplate_DIV_RESOURCE_LIST_RECOMMENDATION_VIEW+b),"mousedown",this.viewRecommendation.bind(this,b));Event.observe(this.elementMap.get(HitListRecordTemplate_ID_RECOMMENDATION_PATRON_LINK_PREFIX+"rl_"+a),"mousedown",this.viewRecommendation.bind(this,b))}}}}}if((m==ResourceListController_RESOURCE_LIST_TYPE_LIBRARY||m==ResourceListController_RESOURCE_LIST_TYPE_DCPI)&&!this.hitList.options.hideLinkToTitleDetails){var e=Registry.lookup("SearchController.SearchMaster");var c=(f.digitalMediaProviderName)?(f.follettEBookTitleDetailsURL)?(function(i){return function(){var o=window.open(i.follettEBookTitleDetailsURL,"shelfcontent_blank");
if(o){o.focus()}}})(f):e.dcpiRedirectorLoader.bind(e,f.dcpiRecordGUID||f.bibID,null,f.copySiteID,!!f.dcpiRecordGUID):l.loadTitleDetails.bind(l,f.bibID,null);Event.observe(this.elementMap.get(HitListRecordTemplate_DIV_TITLE_PREFIX+"rl_"+a),"click",c);Event.observe(this.elementMap.get(CoverImageTemplate_DIV_TITLE_IMAGE_PREFIX+"rl_"+a),"click",c)}}},showTitleDetails:function(a){var b=Registry.lookup("TitleDetailsController.Master");b.loadTitleDetails(a)},showTitleDetailsDCPI:function(a){var b=Registry.lookup("TitleDetailsController.Master");b.loadTitleDetails(a,null,null,true)},checkResultsLoaded:function(){var b=true;for(var c=0;(c<this.recordControllers.length)&&b;c++){b==b&&this.recordControllers[c].isLoaded()}if(b){var a=Registry.lookup("ResourceListController.Master");a.setPageIndex(this.data.pageIndex,this.data.startIndex,this.data.endIndex);a.setNextButtonVisible(this.data.showNextButton);a.setPreviousButtonVisible(this.data.showPreviousButton);a.hideLoadingGraphic();if(!a.data.publicList){a.setTitle(this.data.title)
}a.modal.centerDialog()}else{this.resultsLoadedChecker.delay(250)}},dataAppended:function(b){var a=Registry.lookup("ResourceListController.Master");a.notifyPageDataUpdated(b)},removeTitle:function(b,e,d,c,f){var a=Registry.lookup("ResourceListController.Master");if(!a.isFetching){if(DAO.load({endpoint:"ResourceListController.RemoveTitle"},b,e,a.data.listID,this.data.pageNumber,d,c)){this.truncatePagedData();a.showLoading();if(Object.isElement(f)){Event.stopObserving(f)}}}},deleteRecommendation:function(b){var a=Registry.lookup("ResourceListController.Master");this.truncatePagedData();a.showLoading();DAO.load({endpoint:"ResourceListController.DeleteRecommendation"},b,this.data.pageNumber)},viewRecommendation:function(c){var b={width:"",height:"",id:ResourceListController_DIV_RECOMMENDATION_VIEW_DIALOG,zIndex:"50000",hideOnOutsideClick:"true"};var a=new ModalDialog(b);DAO.load({endpoint:"ResourceListController.ViewRecommendation",modal:a},c)},deleteHold:function(b){var a=Registry.lookup("ResourceListController.Master");
this.truncatePagedData();a.showLoading();DAO.load({endpoint:"ResourceListController.DeleteHold"},b,this.data.pageNumber)},renewTitle:function(b,a,e){var d={width:"500px",height:"400px",id:ResourceListRenewController_DIV_RENEW_MESSAGE_BOX+"Modal",zIndex:"30000",hideOnOutsideClick:"true"};var c=new ModalDialog(d);DAO.load({endpoint:"ResourceListRenewController.RenewCopy",modal:c},b,a,e)},updateTitleOnRenew:function(c,f,a,e){var b=this.elementMap.get(HitListRecordTemplate_DIV_DUE_DATE_PREFIX+"rl_"+f);var d=this.elementMap.get(HitListRecordTemplate_DIV_TITLE_RENEW+"rl_"+f);if(b){b.removeClassName(ResourceListRenewController_CLASS_SEARCH_RESULT_DUE_DATE_NORMAL);b.removeClassName(ResourceListRenewController_CLASS_SEARCH_RESULT_DUE_DATE_OVERDUE);b.addClassName(ResourceListRenewController_CLASS_SEARCH_RESULT_DUE_DATE_RECENTLY_RENEWED);b.update(e);if(d){d.hide()}}this.updateResults([c],"hitList","bibID",true,"overDueItem");this.updateResults([c],"hitList","bibID",a,"dueDate")},sendRecommendation:function(a){var c={width:"610",id:RecommendationController_DIV_ADD_RECOMMENDATION_DIALOG,zIndex:"50000",hideOnOutsideClick:"true"};
var b=new ModalDialog(c);DAO.load({endpoint:"RecommendationController.RecommendationDialog",modal:b},a)},editCitation:function(a,g,f,c,b){var e={width:"",id:ResourceListCitationController_DIV_CITATION_EDIT_DIALOG,zIndex:"50000",hideOnOutsideClick:"true"};var d=new ModalDialog(e);DAO.load({endpoint:"ResourceListCitationController.Dialog",modal:d},a,g,f,c,b)},updateResults:function(IDs,listID,key,value,propertyToUpdate){for(var i=this.pagedData.length-1;i>=0;i--){if(eval("this.pagedData[i]."+listID)){var records=eval("this.pagedData[i]."+listID+".records;");for(var j=0;j<records.length;j++){var record=records[j];if(IDs.indexOf(eval(eval("record."+key)))>=0){record[propertyToUpdate]=value}}}}}});