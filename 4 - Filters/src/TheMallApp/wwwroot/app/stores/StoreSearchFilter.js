var app;
(function (app) {
    var filters;
    (function (filters) {
        function StoreSearch() {
            return function (items, search) {
                var filtered = [];
                if (!search) {
                    return items;
                }
                angular.forEach(items, function (item) {
                    if (angular.lowercase(item.Name).indexOf(angular.lowercase(search)) != -1) {
                        filtered.push(item);
                    }
                });
                return filtered;
            };
        }
        filters.StoreSearch = StoreSearch;
        angular.module("mallApp").filter("storeSearch", StoreSearch);
    })(filters = app.filters || (app.filters = {}));
})(app || (app = {}));
//# sourceMappingURL=StoreSearchFilter.js.map