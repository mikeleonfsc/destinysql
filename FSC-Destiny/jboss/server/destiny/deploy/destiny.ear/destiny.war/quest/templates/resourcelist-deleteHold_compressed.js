Class.create(BaseController,{init:function(b){var a=Registry.lookup("ResourceListController.Master");var c=Registry.lookup("ResourceListController.Holds");a.setTotalCount(this.data.totalCount);if(this.data.startIndex<=this.data.totalCount){c.pagedData[this.data.pageNumber]=this.data;c.setPage(this.data.pageNumber)}else{if(this.data.pageNumber>0&&(this.data.pageNumber-1)<c.pagedData.length){c.pagedData[this.data.pageNumber-1].showNextButton=false;c.setPage(this.data.pageNumber-1)}else{c.pagedData[0]=this.data;c.currentPage=null;c.setPage(0)}}},registerEvents:function(){}});