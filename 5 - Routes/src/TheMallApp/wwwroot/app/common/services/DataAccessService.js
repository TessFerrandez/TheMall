var app;
(function (app) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            var DataAccessService = (function () {
                function DataAccessService($resource) {
                    this.$resource = $resource;
                }
                DataAccessService.prototype.getStoreResource = function () {
                    return this.$resource("/api/stores/:id");
                };
                //minification protection
                DataAccessService.$inject = ["$resource"];
                return DataAccessService;
            })();
            services.DataAccessService = DataAccessService;
            angular.module("common.services").service("dataAccessService", DataAccessService);
        })(services = common.services || (common.services = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=DataAccessService.js.map