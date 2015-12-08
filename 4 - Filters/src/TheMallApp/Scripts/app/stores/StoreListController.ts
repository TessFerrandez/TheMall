module app.stores {
    interface IStoreListController {
        title: string;
        stores: app.domain.IStore[];
    }

    class StoreListController implements IStoreListController {
        title: string;
        stores: app.domain.IStore[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService : app.common.services.DataAccessService) {
            this.title = "Store Listing";
            this.stores = [];

            var storeResource = dataAccessService.getStoreResource();
            storeResource.query((data: app.domain.IStore[]) => {
                this.stores = data;
            });
        }
    }

    angular.module("mallApp").controller("StoreListCtrl", StoreListController);
}