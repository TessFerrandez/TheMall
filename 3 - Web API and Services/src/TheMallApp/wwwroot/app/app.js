var app;
(function (app) {
    var main = angular.module("mallApp", ["common.services"]);
    main.run(runner);
    function runner() {
        console.log("The app is now live");
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map