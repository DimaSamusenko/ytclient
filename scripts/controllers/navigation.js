'use strict';

angular.module('ytclientApp').controller('NavigationCtrl', ['$scope', 'api', function ($scope, api) {
    $scope.results = api.getNav(function (results) {
        var items = results.items;
        $scope.navItems = items.slice(0, 17);
    });
}]);
