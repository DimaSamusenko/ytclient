'use strict';

angular.module('ytclientApp').controller('VideoCtrl', function ($scope, search, $routeParams) {
    $scope.results = search.getItemById($routeParams.videoId, function (result) {
        $scope.video = result.items[0];
    });
});
