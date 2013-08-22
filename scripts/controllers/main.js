'use strict';

angular.module('ytclientApp').controller('MainCtrl', ['$scope', 'api', function ($scope, api) {
    api.getPopular(function (results) {
        $scope.mainResults = results;
    });
}]);
