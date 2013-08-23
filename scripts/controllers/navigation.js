'use strict';

angular.module('ytclientApp').controller('NavigationCtrl',
    ['$scope', 'api', '$log', '$location', '$routeParams',
        function ($scope, api, $log, $location, $routeParams) {
            api.getNav(function (results) {
                var items = results.items;
                $scope.navItems = items.slice(0, 17);
            });

            $scope.isActive = function () {
                return Number($routeParams.catId);
            };
        }]);
