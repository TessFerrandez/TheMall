module app.domain {
    export interface IStore {
        StoreId: number;
        Name: string;
        Location: string;
        WeekDayOpeningHours: string;
        WeekEndOpeningHours: string;
        Description: string;
        StoreUrl: string;
        Email: string;
    }

    export class Store implements IStore {
        constructor(
            public StoreId: number,
            public Name: string,
            public Location: string,
            public WeekDayOpeningHours: string,
            public WeekEndOpeningHours: string,
            public Description: string,
            public StoreUrl: string,
            public Email: string) {
        }
    }
}