Class.create(BaseController,{init:function(){var a=Registry.lookup("ShelfBrowseController.ShelfBrowseDialog");a.resetCarousel();a.addRecords(this.data);a.renderCarousel();a.hideLoading();a.modal.centerDialog()},registerEvents:function(){}});