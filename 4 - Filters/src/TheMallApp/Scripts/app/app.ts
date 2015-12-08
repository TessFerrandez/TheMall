module app {
    var main = angular.module("mallApp", ["common.services"]);
    main.run(runner);

    function runner(): void {
        console.log("The app is now live");
    }
}