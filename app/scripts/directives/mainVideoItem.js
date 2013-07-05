'use strict';

angular.module('ytclientApp').directive('mainVideoItem', function () {
    return {
        templateUrl: '/template/main/videoItem.html',
        restrict   : 'E'
    };
});
