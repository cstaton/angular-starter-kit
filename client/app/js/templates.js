angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('layout/layout.html','<div>\n  <p>This is the main layout</p>\n  <h2>Welcome to the Angular Stater Kit V2.</h2>\n  <p>{{testValue}}</p>\n  <p>{{layoutCtrl.tester}}</p>\n</div>');}]);