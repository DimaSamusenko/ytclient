'use strict';

angular.module('ytclientApp', ['ngResource', 'ui.bootstrap']).config(function ($routeProvider) {
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
        .when('/channel/:channelId', {
          templateUrl: 'views/channel.html',
          controller: 'ChannelCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
