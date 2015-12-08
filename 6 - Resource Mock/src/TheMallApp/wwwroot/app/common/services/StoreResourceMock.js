var app;
(function (app) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            var mockResource = angular.module("storeResourceMock", ["ngMockE2E"]);
            mockResource.run(mockRun);
            mockRun.$inject = ["$httpBackend"];
            function mockRun($httpBackend) {
                var stores = [];
                var store;
                //prepare store data
                store = new app.domain.Store(1, "Bozo store", "1A", "10AM - 9PM", "10AM - 6PM", "Some store description", "http://www.store.com", "email@store.com");
                stores.push(store);
                store = new app.domain.Store(2, "Delta store", "1A", "10AM - 9PM", "10AM - 6PM", "Some store description", "http://www.store.com", "email@store.com");
                stores.push(store);
                store = new app.domain.Store(3, "Alpha store", "1A", "10AM - 9PM", "10AM - 6PM", "Some store description", "http://www.store.com", "email@store.com");
                stores.push(store);
                store = new app.domain.Store(4, "Beta store", "1A", "10AM - 9PM", "10AM - 6PM", "Some store description", "http://www.store.com", "email@store.com");
                stores.push(store);
                store = new app.domain.Store(5, "Gamma store", "1A", "10AM - 9PM", "10AM - 6PM", "Some store description", "http://www.store.com", "email@store.com");
                stores.push(store);
                //get all stores
                var storeUrl = "/api/stores";
                $httpBackend.whenGET(storeUrl).respond(stores);
                //get single store
                var singleStoreUrl = new RegExp(storeUrl + "/[0-9][0-9]*", '');
                $httpBackend.whenGET(singleStoreUrl).respond(function (method, url, data) {
                    var store = { "StoreId": 0 };
                    var parameters = url.split('/');
                    var length = parameters.length;
                    var id = +parameters[length - 1];
                    if (id > 0) {
                        for (var i = 0; i < stores.length; i++) {
                            if (stores[i].StoreId == id) {
                                store = stores[i];
                                break;
                            }
                        }
                    }
                    return [200, store, {}];
                });
                //catch all for testing purposes,
                //if anything fails we can set a bp here
                $httpBackend.whenGET(/api/).respond(function (method, url, data) {
                    return [200, stores, {}];
                });
                //pass through any req for application files
                //so it wont catch requests for html fragments
                $httpBackend.whenGET(/templates/).passThrough();
            }
        })(services = common.services || (common.services = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=StoreResourceMock.js.map