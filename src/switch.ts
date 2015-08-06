module Switch {
    var moduleName = 'csComp';

    interface ISwitchScope extends ng.IScope {
        textlabel: string;
        state: boolean;
        isdisabled: boolean;
        // clicked: Function;// (state: boolean) => void;
    }

    /**
      * Module
      */
    export var myModule;
    try {
        myModule = angular.module(moduleName);
    } catch (err) {
        // named module does not exist, so create one
        myModule = angular.module(moduleName, []);
    }

    /**
      * Directive for creating a Windows 8 style on/off switch.
      * The HTML and style were created at https://proto.io/freebies/onoff.
      */
    myModule.directive('switch', [
        '$compile',
        function($compile): ng.IDirective {
            var uniqueId = 1;
            return {
                restrict: 'AE',     // E = elements, other options are A=attributes and C=classes
                scope: {
                    /**
                     * Optional label in front of the switch
                     */
                    textlabel: '@',
                    /** On or off */
                    state: '=',
                    /**
                     * if true, disable the switch
                     */
                    isdisabled: '@'//,
                    // clicked: '&'
                },      // isolated scope, separated from parent.
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
                replace: true,    // Remove the directive from the DOM
                transclude: true,    // Add elements and attributes to the template
                link: function(scope: ISwitchScope, elem, attr) {
                    // Create an unique ID in case it is used multiple times on a page.
                    // Source: http://stackoverflow.com/questions/21021951/directive-template-unique-ids-for-elements
                    var item = 'myswitchid' + uniqueId++;
                    var inputELem = elem.find('input');
                    inputELem.attr('id', item);
                    elem.find('label').attr('for', item);
                    scope.$watch('isdisabled', (newVal) => {
                        if (typeof newVal === 'undefined' || newVal === 'false') newVal = false;
                        else if (newVal === 'true') newVal = true;
                        inputELem.prop('disabled', newVal);
                    });
                }
            }
        }
    ]);
}
