'use strict';

angular.module('ytclientApp').controller('CategoriesCtrl',
    ['$scope', 'api', '$routeParams', function ($scope, api, $routeParams) {
        $scope.results = api.getItemsByCatId($routeParams.catId, function (results) {
            $scope.videoResults = results;
        });
    }]);