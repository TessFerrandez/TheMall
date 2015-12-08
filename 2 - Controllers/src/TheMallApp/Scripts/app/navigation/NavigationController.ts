module app.navigation {
    interface IMenuItem {
        href: string;
        name: string;
    }

    interface INavigationController {
        menu: IMenuItem[];
        index: number;
        setIndex(value: number): void;
    }

    class NavigationController implements INavigationController {
        menu: IMenuItem[];
        index: number;

        constructor() {
            this.index = 0;
            this.menu = [
                { "href": "#", "name": "Home" },
                { "href": "#", "name": "Stores" },
            ];
        }

        setIndex(value: number): void {
            this.index = value;
        }
    }

    angular.module("mallApp").controller("NavigationCtrl", NavigationController);
}