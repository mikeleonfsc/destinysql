Class.create(Autocompleter.Base,{initialize:function($super,a,d,b){var c=Object.extend({onShow:function(e,f){Effect.Appear(f,{duration:0.15})}},b);this.textFieldID=a;this.suggestionsID=d;this.mergedOptions=c},startMe:function(){this.baseInitialize(this.textFieldID,this.suggestionsID,this.mergedOptions)},onComplete:function($super,a){if(a.transport.status!=500){$super(a)}}});