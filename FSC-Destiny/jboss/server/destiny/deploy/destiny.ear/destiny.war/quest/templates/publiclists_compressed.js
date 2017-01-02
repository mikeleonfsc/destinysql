Class.create(BaseController,{init:function(){this.showLoading();if(this.data.canViewMyLists){this.myLists=true;this.loadMyListsTab()}else{this.hideMyListsTab();this.loadPublicListsTab()}if(!this.data.canViewPublicLists){this.hidePublicListsTab()}},registerEvents:function(){Event.observe(this.elementMap.get(PublicListsController_LI_PUBLIC_LISTS_TAB_MY_LISTS),"click",this.loadMyListsTab.bind(this));Event.observe(this.elementMap.get(PublicListsController_LI_PUBLIC_LISTS_TAB_PUBLIC_LISTS),"click",this.loadPublicListsTab.bind(this))},showLoading:function(){this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_LOADING).show();this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_TAB_WIDGET).hide()},hideLoading:function(){this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_LOADING).hide();this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_TAB_WIDGET).show()},hidePublicListsTab:function(){this.elementMap.get(PublicListsController_LI_PUBLIC_LISTS_TAB_PUBLIC_LISTS).hide();
this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTENT_PUBLIC_LISTS).hide()},hideMyListsTab:function(){this.elementMap.get(PublicListsController_LI_PUBLIC_LISTS_TAB_MY_LISTS).hide();this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTENT_MY_LISTS).hide()},loadMyListsTab:function(){this.myLists=true;DAO.load({endpoint:"PublicListsController.MyLists",container:this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTENT_MY_LISTS)})},loadPublicListsTab:function(){this.myLists=false;DAO.load({endpoint:"PublicListsController.PublicLists",container:this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTENT_PUBLIC_LISTS)})},useMyListsTab:function(){this.elementMap.get(PublicListsController_LI_PUBLIC_LISTS_TAB_MY_LISTS).addClassName("tabActive");this.elementMap.get(PublicListsController_LI_PUBLIC_LISTS_TAB_PUBLIC_LISTS).removeClassName("tabActive");this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTENT_MY_LISTS).show();this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTENT_PUBLIC_LISTS).hide();
this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTROLS).hide();this.myLists=true},usePublicListsTab:function(){this.elementMap.get(PublicListsController_LI_PUBLIC_LISTS_TAB_MY_LISTS).removeClassName("tabActive");this.elementMap.get(PublicListsController_LI_PUBLIC_LISTS_TAB_PUBLIC_LISTS).addClassName("tabActive");this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTENT_MY_LISTS).hide();this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTENT_PUBLIC_LISTS).show();this.elementMap.get(PublicListsController_DIV_PUBLIC_LISTS_CONTROLS).show();this.elementMap.get(PublicListsController_INPUT_PUBLIC_LISTS_SEARCH).focus();this.myLists=false},isMyLists:function(){return this.myLists},setPublicListData:function(a,b){this.publicListData=a;if(!this.isMyLists()){this.elementMap.get(PublicListsController_INPUT_PUBLIC_LISTS_SEARCH).setValue("");this.autocomplete=new this.AutoCompleter(PublicListsController_INPUT_PUBLIC_LISTS_SEARCH,PublicListsController_DIV_PUBLIC_LISTS_CONTENT_PUBLIC_LISTS,PublicListsController_PREFIX_PUBLIC_LISTS_ROW,this.publicListData,b)
}},AutoCompleter:Class.create(Autocompleter.Local,{initialize:function($super,a,g,b,e,d){this.template=d;this.templateData=e;var f=this.selectEntriesAndApplyTemplate.bind(this);var c={choices:1000,partialSearch:true,partialChars:1,ignoreCase:true,fullSearch:true,selector:function(h){var i=h.getToken();return f(h.rowPrefixID,h.options.array,i)}};$super(a,g,e.results,c);this.rowPrefixID=b;Element.show(this.update);this.changed=false;this.hasFocus=true;this.options.minChars=0;this.getUpdatedChoices()},hide:function($super){},selectEntriesAndApplyTemplate:function(b,a,f){var c=[];for(var d=0;d<a.length;d++){var e=a[d];var g=-1;if(f){g=e.name.toLowerCase().indexOf(f.toLowerCase());if(g==-1){g=e.description.toLowerCase().indexOf(f.toLowerCase())}}else{g=0}if(g!=-1){c.push(e)}}this.templateData.results=c;return this.template.render(this.templateData)},onClick:function(d){var b=Event.findElement(d,"LI");var a=b.readAttribute("listID");var e={width:"",id:ResourceListController_DIV_RESOURCE_LIST_WINDOW,zIndex:"10000",hideOnOutsideClick:"true"};
var c=new ModalDialog(e);DAO.load({endpoint:"ResourceListController.Master",modal:c},a,"ResourceList",true)},onKeyPress:function($super,a){if(a.keyCode==Event.KEY_RETURN||a.keyCode==Event.KEY_TAB){Event.stop(a)}else{$super(a)}}})});