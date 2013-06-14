'use strict';

angular.module('ytclientApp').controller('ChannelCtrl', function ($scope, search, $routeParams) {
    $scope.results = search.getChannelById($routeParams.channelId, function (results) {
        $scope.channel = results.items[0];
    });
});
