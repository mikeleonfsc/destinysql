Class.create(BaseController,{initialize:function(){this.groups=new Hash()},createGroup:function(a){this.options=a;var d=null;var f=this.options.name;if(this.groups.keys().indexOf(f)>=0){var b=this.groups.get(f);d=b.getVisibleHoverKey();this.cleanupGroup(b)}var c=this.findActivators(this.options.activatorContainer);var e=new HoverGroup({name:f,data:this.options.data,activators:c,hoverContainer:this.options.hoverContainer,controllerURL:this.options.controllerURL,templateURL:this.options.templateURL,onShow:this.options.onShow,onHide:this.options.onHide,showEffect:this.options.showEffect,hideEffect:this.options.hideEffect,activateEvent:this.options.activateEvent,openDelay:this.options.openDelay,closeDelay:this.options.closeDelay,contentContainer:this.options.contentContainer});this.groups.set(f,e);if(d){e.showHoverNow(d)}return e},lookupGroup:function(a){return this.groups.get(a)},cleanupGroup:function(a){a.dispose()},findActivators:function(b){var c=[];if(b&&Object.isElement(b)){var a=b.descendants();
a.each(function(d){if(d&&Object.isElement(d)&&d.readAttribute("hoverKey")){c.push(d)}})}return c},enable:function(){this.groups.values().each(function(a){a.enable()})},disable:function(){this.groups.values().each(function(a){a.disable()})}});