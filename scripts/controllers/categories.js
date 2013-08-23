'use strict';

angular.module('ytclientApp').controller('CategoriesCtrl',
    ['$scope', 'api', '$routeParams', '$log',
        function ($scope, api, $routeParams, $log) {
            api.getItemsByCatId($routeParams.catId, function (results) {
                $scope.videoResults = results;
            });
        }]);
