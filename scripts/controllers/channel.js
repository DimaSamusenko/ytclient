'use strict';

angular.module('ytclientApp').controller('ChannelCtrl',
    ['$scope', 'api', '$routeParams', '$rootScope',
        function ($scope, api, $routeParams, $rootScope) {

            api.getChannelById($routeParams.channelId, function (results) {
                $rootScope.$broadcast('channel.main.loaded', results);
            });

            $scope.$on('channel.main.loaded', function (event, message) {
                $scope.channel = message.items[0];
                getUploads(message.items[0].contentDetails.relatedPlaylists.uploads);
            });

            function getUploads(id) {
                api.getItemsInPlaylist(id, 50, function (results) {
                    console.dir(results);
                    $scope.uploads = results;
                });
            }
        }]);


