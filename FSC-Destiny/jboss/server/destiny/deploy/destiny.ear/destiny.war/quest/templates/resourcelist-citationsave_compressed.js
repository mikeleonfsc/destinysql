Class.create(BaseController,{init:function(){var a=Registry.lookup("ResourceListCitationController.Dialog");if(this.data.errorMsg){a.handleErrorMessage(this.data.errorMsg,this.data.focusField)}else{a.closeDialog()}},registerEvents:function(){}});