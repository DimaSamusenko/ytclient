'use strict';

angular.module('ytclientApp').controller('VideoCtrl', function ($scope, search, $routeParams) {
    $scope.results = search.getItemById($routeParams.videoId, function (result) {
        var item = result.items[0];
        //item.contentDetails.duration = result.items[0].contentDetails.duration.slice(11,16);
        $scope.video = item;
    });
});
