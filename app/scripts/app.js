'use strict';

angular.module('ytclientApp', ['ngResource']).config(function ($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'views/main.html',
                controller : 'MainCtrl'
            }).when('/category/:channelId', {
                templateUrl: 'views/main.html',
                controller : 'MainCtrl'
            }).otherwise({
                redirectTo: '/'
            });
    });
