'use strict';

angular.module('ytclientApp').controller('ChannelCtrl',
    ['$scope', 'api', '$routeParams', function ($scope, api, $routeParams) {
        api.getChannelById($routeParams.channelId, function (results) {
            $scope.channel = results.items[0];
        });
    }]);
