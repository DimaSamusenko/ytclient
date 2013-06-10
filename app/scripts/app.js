'use strict';

angular.module('ytclientApp', ['ngResource']).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller : 'MainCtrl'
        })
        .when('/category/:catId', {
            templateUrl: 'views/category.html',
            controller : 'CategoryCtrl'

        })
        .otherwise({
            redirectTo: '/'
        });
});
