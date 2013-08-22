'use strict';

angular.module('ytclientApp').controller('VideoCtrl', ['$scope', 'api', '$routeParams', function ($scope, api, $routeParams) {
    api.getItemById($routeParams.videoId, function (result) {
        var item = result.items[0];
        //item.contentDetails.duration = result.items[0].contentDetails.duration.slice(11,16);
        $scope.video = item;
    });
}]);
