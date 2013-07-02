'use strict';

angular.module('ytclientApp').controller('MainCtrl', function ($scope, search) {

    $scope.results = search.getPopular(function (results) {
        $scope.mainResults = results;
    });

});
