module App {
    'use strict';

    export interface IAppScope extends ng.IScope {
        vm: AppCtrl;
    }

    export class AppCtrl {
        public isSelected: boolean = true;

        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        static $inject = [
            '$scope'
        ];

        // dependencies are injected via AngularJS $injector
        constructor(
            private $scope: IAppScope
            ) {
            $scope.vm = this;
        }

        select() {
            console.log('Switch position changed.')
        }
    }

    // Start the application
    angular
        .module('SwitchExApp', [
            'csComp'
        ])
        .controller('appCtrl', AppCtrl);
}
