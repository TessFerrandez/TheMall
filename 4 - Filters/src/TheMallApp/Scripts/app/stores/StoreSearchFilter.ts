module app.filters {
    export function StoreSearch() {
        return function (items: app.domain.IStore[], search: string): app.domain.IStore[] {
            var filtered = [];
            if (!search) { return items; }
            angular.forEach(items, function (item) {

                if (angular.lowercase(item.Name).indexOf(angular.lowercase(search)) != -1) {
                    filtered.push(item);
                }

            });
            return filtered;
        }
    }
    angular.module("mallApp").filter("storeSearch", StoreSearch);
}