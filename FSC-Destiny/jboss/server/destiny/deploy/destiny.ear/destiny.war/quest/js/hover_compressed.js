Class.create({initialize:function(b,c,e,a,d){this.name=b;this.activator=c;this.templateURL=d;this.controllerURL=a;this.hoverBoundaryContainer=e},show:function(a,g,b,f){var h=false;var e=g.hoverContainerID;var d=g.hoverKey;if(Object.isArray(g)&&g.length>0){e=g[0].hoverContainerID;d=g[0].hoverKey}if(!(a.visible()&&a.hoverKey==d)){if(e){var c=$(e);if(c&&Object.isElement(c)){c.insert(a);h=true}}if(!h){document.body.insert(a)}a.hoverKey=d;this.controller=Registry.createController(this.name,this.templateURL,this.controllerURL,{endpoint:this.name,container:a},g);this.controller.hover=this;this.controller.activator=this.activator;if(Object.isFunction(this.controller.setBoundaryContainer)){this.controller.setBoundaryContainer(this.hoverBoundaryContainer)}this.controller.setPosition(a);if(Object.isFunction(b)&&$(f)){b($(f))}else{a.show()}}},dispose:function(){}});