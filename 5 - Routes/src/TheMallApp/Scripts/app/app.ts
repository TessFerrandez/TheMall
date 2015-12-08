module app {
    var main = angular.module("mallApp", ["ngRoute", "common.services"]);
    main.run(runner);

    function runner(): void {
        console.log("The app is now live");
    }

    main.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void{
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
}