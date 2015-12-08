module app.common.services {
    interface IDataAccessService {
        getStoreResource(): ng.resource.IResourceClass<IStoreResource>;
    }

    interface IStoreResource extends ng.resource.IResource<app.domain.IStore> { }

    export class DataAccessService implements IDataAccessService {
        //minification protection
        static $inject = ["$resource"]
        constructor(private $resource: ng.resource.IResourceService) { }

        getStoreResource(): ng.resource.IResourceClass<IStoreResource> {
            return this.$resource("/api/stores/:id");
        }
    }

    angular.module("common.services").service("dataAccessService", DataAccessService);
}