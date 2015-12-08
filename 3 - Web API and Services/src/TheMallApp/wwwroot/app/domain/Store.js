var app;
(function (app) {
    var domain;
    (function (domain) {
        var Store = (function () {
            function Store(StoreId, Name, Location, WeekDayOpeningHours, WeekEndOpeningHours, Description, StoreUrl, Email) {
                this.StoreId = StoreId;
                this.Name = Name;
                this.Location = Location;
                this.WeekDayOpeningHours = WeekDayOpeningHours;
                this.WeekEndOpeningHours = WeekEndOpeningHours;
                this.Description = Description;
                this.StoreUrl = StoreUrl;
                this.Email = Email;
            }
            return Store;
        })();
        domain.Store = Store;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=Store.js.map