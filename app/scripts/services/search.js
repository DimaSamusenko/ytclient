'use strict';

angular.module('ytclientApp').factory('search', function ($resource) {

    var ytApi = $resource('https://www.googleapis.com/youtube/v3/:action',
            {
                action: 'search',
                key: 'AIzaSyCpOdAM-uUOZnv2-RbhkpQLGNUhEpAt4qE',
                part: 'snippet',
                callback: 'JSON_CALLBACK'
            },
            {
                get: {method: 'JSONP'}
            }
        ),

        getSearch = function (params, callback) {
            return ytApi.get(params, callback);
        },
        getPopular = function (callback) {
            return ytApi.get(
                {
                    action: 'playlistItems',
                    maxResults: 50,
                    playlistId: 'LPtnHdj3df7iM',
                    part: 'id,snippet,contentDetails'
                },
                callback
            );
        },
        getNav = function (callback) {
            return ytApi.get(
                {
                    action: 'videoCategories',
                    regionCode: 'US',
                    part: 'id,snippet'
                },
                callback
            );
        };

    // Public API here
    return {
        getSearch: getSearch,
        getPopular: getPopular,
        getNav: getNav
    };
});
