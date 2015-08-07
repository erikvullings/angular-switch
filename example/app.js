var App;
(function (App) {
    'use strict';
    var AppCtrl = (function () {
        function AppCtrl($scope) {
            this.$scope = $scope;
            this.isSelected = true;
            $scope.vm = this;
        }
        AppCtrl.prototype.select = function () {
            console.log('Switch position changed.');
        };
        AppCtrl.$inject = [
            '$scope'
        ];
        return AppCtrl;
    })();
    App.AppCtrl = AppCtrl;
    angular
        .module('SwitchExApp', [
        'csComp'
    ])
        .controller('appCtrl', AppCtrl);
})(App || (App = {}));
