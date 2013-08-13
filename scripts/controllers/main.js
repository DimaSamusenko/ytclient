'use strict';

angular.module('ytclientApp').controller('MainCtrl', ['$scope', 'api', function ($scope, api) {
    $scope.results = api.getPopular(function (results) {
        $scope.mainResults = results;
    });
}]);
