var app;
(function (app) {
    var main = angular.module("mallApp", ["ngRoute", "common.services", "storeResourceMock"]);
    main.run(runner);
    function runner() {
        console.log("The app is now live");
    }
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/storeList", {
            templateUrl: "/templates/storeListView.html",
            controller: "StoreListCtrl as vm"
        })
            .when("/storeDetails/:storeId", {
            templateUrl: "/templates/storeDetailView.html",
            controller: "StoreDetailCtrl as vm"
        })
            .otherwise("/storeList");
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map