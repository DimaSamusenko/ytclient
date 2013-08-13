'use strict';

angular.module('ytclientApp').directive('mainVideoItem', [function () {
    return {
        templateUrl: '/templates/directives/videoItem.html',
        restrict   : 'E'
    };
}]);
