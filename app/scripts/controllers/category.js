'use strict';

angular.module('ytclientApp').controller('CategoryCtrl', function ($scope, search, $routeParams) {

        $scope.results = search.getChannelsByCat($routeParams.catId, function (results) {
            $scope.videoResults = results;
        });
    });
