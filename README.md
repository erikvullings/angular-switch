# angular-switch

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/484276e875024352a18511f6dd30c10f)](https://www.codacy.com/app/erikvullings/angular-switch?utm_source=github.com&utm_medium=referral&utm_content=erikvullings/angular-switch&utm_campaign=badger)

A switch directive for Angular.js, based on an input checkbox and the css style generated at [proto.io]
(https://proto.io/freebies/onoff). Please do not confuse this with project with another similar directive, [angular-bootstrap-switch](https://github.com/frapontillo/angular-bootstrap-switch). The main reasons for creating this version is that I needed a Windows type of switch. Additionally, I  found the angular-bootstrap-switch option rather difficult to setup, as I needed to install two bower packages, and it was rather big (~23kb minified js+css) compared to this version (~2kb minified js+css).

<p align="center">
  <img src="http://i.imgur.com/GDb3AK7.png" title="Windows 8 style switch in on and off state.">
</p>

# How to get

Using bower, run

```
$ bower install angular-switch --save
```

## How to use

First, include the ```switch.js``` and ```switch.css``` (or their minified versions) in your index.html, e.g.

````html
    <script src="./bower_components/angular-switch/dist/switch.js"></script>
    <link rel="stylesheet" href="./bower_components/angular-switch/dist/switch.css"></link>

```

To be able to use the directive, you need to register the angular-switch module as a dependency:

```javascript
angular.module('yourModule', ['csComp'
    // other dependencies
]);
```

The directive can work on both element and attribute levels. The following example contains all of the supported attributes:

```javascript
<switch state="vm.isSelected" 
        textlabel="Switch" 
        changed="vm.changed()"
        isdisabled="{{ isDisabled }}"></switch>
```
* state: the switch state, i.e. true is on, or false when off.
* textlabel: optional label that is placed in front of the switch
* changed: action that will be called when the switch state has changed. Although you could add an ng-click to the switch control, that won't work properly, as the ng-click is fired twice (once for the label, once for the input checkbox) and the selection hasn't occured yet. So please use the changed event instead.
* isdisabled: when true, disables the switch

## Example

The example folder shows a simple working demo of the switch.

## Styling

In case you rather prefer a iOS kind of switch, go to [proto.io]
(https://proto.io/freebies/onoff) and replace the switch.css code. You may have to update the template in switch.js too a bit.
