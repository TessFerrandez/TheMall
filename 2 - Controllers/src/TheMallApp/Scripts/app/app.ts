module app {
    var main = angular.module("mallApp", []);
    main.run(runner);

    function runner(): void {
        console.log("The app is now live");
    }
}