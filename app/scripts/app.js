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
        .when('/video/:videoId', {
          templateUrl: 'views/video.html',
          controller: 'VideoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
