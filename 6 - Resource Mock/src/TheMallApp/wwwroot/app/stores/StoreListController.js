var app;
(function (app) {
    var stores;
    (function (stores) {
        var StoreListController = (function () {
            function StoreListController(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Store Listing";
                this.stores = [];
                var storeResource = dataAccessService.getStoreResource();
                storeResource.query(function (data) {
                    _this.stores = data;
                });
            }
            StoreListController.$inject = ["dataAccessService"];
            return StoreListController;
        })();
        angular.module("mallApp").controller("StoreListCtrl", StoreListController);
    })(stores = app.stores || (app.stores = {}));
})(app || (app = {}));
//# sourceMappingURL=StoreListController.js.map