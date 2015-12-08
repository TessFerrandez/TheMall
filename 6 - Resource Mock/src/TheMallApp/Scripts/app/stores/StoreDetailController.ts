module app.stores {
    interface IStoreDetailController {
        store: app.domain.IStore;
        tab: number;
        setTab(value: number): void;
    }

    interface IStoreParams extends ng.route.IRouteParamsService {
        /* must match the route param name*/
        storeId: number;    
    }

    class StoreDetailController implements IStoreDetailController {
        store: app.domain.IStore;
        tab: number;

        static $inject = ["$routeParams", "dataAccessService"];
        constructor(private $routeParams: IStoreParams, private dataAccessService: app.common.services.DataAccessService) {
            this.tab = 0;

            //get the value from the route
            var storeId = $routeParams.storeId;

            var storeResource = dataAccessService.getStoreResource();
            //the param name i.e. "id" must match the api parameter name
            storeResource.get({ id: storeId }, (data: app.domain.IStore) => {
                this.store = data;
            });
        }

        setTab(value: number): void {
            this.tab = value;
        }
    }

    angular.module("mallApp").controller("StoreDetailCtrl", StoreDetailController);
}