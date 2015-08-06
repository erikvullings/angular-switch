var Switch;
(function (Switch) {
    var moduleName = 'csComp';
    try {
        Switch.myModule = angular.module(moduleName);
    }
    catch (err) {
        Switch.myModule = angular.module(moduleName, []);
    }
    Switch.myModule.directive('switch', [
        '$compile',
        function ($compile) {
            var uniqueId = 1;
            return {
                restrict: 'AE',
                scope: {
                    textlabel: '@',
                    state: '=',
                    isdisabled: '@'
                },
                template: '<div>' +
                    '<span class="textlabel">{{textlabel}}</span>' +
                    '<div class="onoffswitch">' +
                    '<input type="checkbox" ng-model="state" class="onoffswitch-checkbox">' +
                    '<label class="onoffswitch-label">' +
                    '<span class="onoffswitch-inner"></span>' +
                    '<span class="onoffswitch-switch"></span>' +
                    '</label>' +
                    '</div>' +
                    '</div>',
                replace: true,
                transclude: true,
                link: function (scope, elem, attr) {
                    var item = 'myswitchid' + uniqueId++;
                    var inputELem = elem.find('input');
                    inputELem.attr('id', item);
                    elem.find('label').attr('for', item);
                    scope.$watch('isdisabled', function (newVal) {
                        if (typeof newVal === 'undefined' || newVal === 'false')
                            newVal = false;
                        else if (newVal === 'true')
                            newVal = true;
                        inputELem.prop('disabled', newVal);
                    });
                }
            };
        }
    ]);
})(Switch || (Switch = {}));
