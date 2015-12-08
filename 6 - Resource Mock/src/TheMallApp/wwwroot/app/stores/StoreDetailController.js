var app;
(function (app) {
    var stores;
    (function (stores) {
        var StoreDetailController = (function () {
            function StoreDetailController($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.tab = 0;
                //get the value from the route
                var storeId = $routeParams.storeId;
                var storeResource = dataAccessService.getStoreResource();
                //the param name i.e. "id" must match the api parameter name
                storeResource.get({ id: storeId }, function (data) {
                    _this.store = data;
                });
            }
            StoreDetailController.prototype.setTab = function (value) {
                this.tab = value;
            };
            StoreDetailController.$inject = ["$routeParams", "dataAccessService"];
            return StoreDetailController;
        })();
        angular.module("mallApp").controller("StoreDetailCtrl", StoreDetailController);
    })(stores = app.stores || (app.stores = {}));
})(app || (app = {}));
//# sourceMappingURL=StoreDetailController.js.map