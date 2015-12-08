module app.stores {
    interface IStoreListController {
        title: string;
        stores: app.domain.IStore[];
    }

    class StoreListController implements IStoreListController {
        title: string;
        stores: app.domain.IStore[];

        constructor() {
            this.title = "Store Listing";
            this.stores = [
                {
                    "StoreId": 1,
                    "Name": "Phone accessories R us",
                    "Location": "1A",
                    "WeekDayOpeningHours": "10 am - 8 pm",
                    "WeekEndOpeningHours": "10 am - 4 pm",
                    "Description": "We have cool phone accessories in all colors",
                    "StoreUrl": "http://www.phoneaccessories.com",
                    "Email": "info@phoneaccessories.com"
                },
                {
                    "StoreId": 2,
                    "Name": "Organize yourself",
                    "Location": "4A",
                    "WeekDayOpeningHours": "10 am - 8 pm",
                    "WeekEndOpeningHours": "10 am - 4 pm",
                    "Description": "Everything for your organizational needs",
                    "StoreUrl": "http://www.organize.com",
                    "Email": "info@organize.com"
                },
                {
                    "StoreId": 3,
                    "Name": "Fabulous Books",
                    "Location": "7A",
                    "WeekDayOpeningHours": "10 am - 8 pm",
                    "WeekEndOpeningHours": "10 am - 4 pm",
                    "Description": "The best bookstore in the mid west",
                    "StoreUrl": "http://www.fabbooks.com",
                    "Email": "info@fabbooks.com"
                }];
                var store = new app.domain.Store(4, "New store", "2A", "some hours", "some other hours", "some description", "www.url.com", "some@email.com");
                this.stores.push(store); 
        }
    }

    angular.module("mallApp").controller("StoreListCtrl", StoreListController);
}