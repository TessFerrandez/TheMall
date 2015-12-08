var app;
(function (app) {
    var navigation;
    (function (navigation) {
        var NavigationController = (function () {
            function NavigationController() {
                this.index = 0;
                this.menu = [
                    { "href": "#", "name": "Home" },
                    { "href": "#", "name": "Stores" },
                ];
            }
            NavigationController.prototype.setIndex = function (value) {
                this.index = value;
            };
            return NavigationController;
        })();
        angular.module("mallApp").controller("NavigationCtrl", NavigationController);
    })(navigation = app.navigation || (app.navigation = {}));
})(app || (app = {}));
//# sourceMappingURL=NavigationController.js.map