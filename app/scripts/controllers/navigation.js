'use strict';

angular.module('ytclientApp').controller('NavigationCtrl', function ($scope, search) {
        $scope.results = search.getNav(function (results) {
            var items = results.items;
            $scope.navItems = items.slice(0, 17);
        });
    });
