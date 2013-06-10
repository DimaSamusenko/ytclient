'use strict';

angular.module('ytclientApp').controller('NavigationCtrl', function ($scope, search) {
        $scope.results = search.getNav(function (results) {
            $scope.navItems = results;
        });
    });
