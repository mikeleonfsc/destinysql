Class.create(BaseController,{init:function(){var b=Registry.lookup("TitleDetailsController.TitleDetails");var a=Registry.lookup("HoverMasterController.HoverMaster");if(b){this.hoverGroup=a.createGroup({name:this.name,data:this.data.recList,activatorContainer:this.container,hoverContainer:b.getSuggestionsHoverBoundary(),controllerURL:this.data.hoverControllerURL,templateURL:this.data.hoverTemplateURL,openDelay:0.5,closeDelay:0.1,onShow:function(){b.getSuggestionsHoverBoundary().addClassName("high-zindex")},onHide:function(){b.getSuggestionsHoverBoundary().removeClassName("high-zindex")}})}},registerEvents:function(){for(var c=0;c<this.data.recList.length;c++){var a=this.data.recList[c];var b=this.elementMap.get(TitleDetailsController_CLASS_TITLE_DETAIL_SUGGESTIONS_CONTENT_TITLE+TitleDetailsController_DIV_TITLE_DETAIL_SUGGESTION_HOVER+c);if(Object.isElement(b)){Event.observe(b,"mousedown",this.openTitleDetails.bind(this,a.bibID,a.shelfNumber))}}},openTitleDetails:function(b,a){this.hoverGroup.disable();
var d=Registry.lookup("TitleDetailsController.TitleDetails");var c=Registry.lookup("TitleDetailsController.Master");d.closeDialog();c.loadTitleDetails(b,null)},updateSearchResults:function(IDs,key,value,propertyToUpdate){var pagedData=this.pagedData;for(var i=0;i<pagedData.length;i++){var records=pagedData[i].recList;for(var j=0;j<records.length;j++){var record=records[j];if(IDs.indexOf(eval("record."+key))>=0){record[propertyToUpdate]=value}}}}});