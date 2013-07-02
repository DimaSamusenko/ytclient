'use strict';

angular.module('ytclientApp').factory('search', function ($resource, $http) {

    var key = 'AIzaSyCpOdAM-uUOZnv2-RbhkpQLGNUhEpAt4qE',

        ytApi = $resource('https://www.googleapis.com/youtube/v3/:action',
            {
                action: 'search',
                key: key,
                part: 'id,snippet',
                callback: 'JSON_CALLBACK'
            },
            {
                get: {method: 'JSONP'}
            }
        ),

        getSearchWithHttp = function (query) {
            return $http
                .jsonp('https://www.googleapis.com/youtube/v3/search?key='+key+'&part=snippet&q='+query)
                .then(function(response) {
                return response;
            });
        },

        getSearch = function (params, callback) {
            return ytApi.get(params, callback);
        },

        getPopular = function (callback) {
            return ytApi.get({
                    action    : 'playlistItems',
                    maxResults: 50,
                    playlistId: 'LPtnHdj3df7iM',
                    part      : 'id,snippet,contentDetails'
                }, callback);
        },

        getNav = function (callback) {
            return ytApi.get({
                    action    : 'videoCategories',
                    regionCode: 'US',
                    part      : 'id,snippet'
                }, callback);
        },

        getItemsByCatId = function (categoryId, callback) {
            return ytApi.get({
                maxResults     : 50,
                order          : 'viewCount',
                regionCode     : 'US',
                type           : 'video',
                videoCategoryId: parseInt(categoryId, 10),
                publishedAfter : (function () {
                    var now = new Date(),
                        weekAgo = now.setDate(now.getDate() - 7);
                    return new Date(weekAgo).toISOString();
                }()),
                videoDimension : '2d'
            }, callback);
        },
        getChannelById = function (channelId, callback) {
            return ytApi.get({
                action    : 'channels',
                part      : 'id, snippet, contentDetails, statistics',
                id        : channelId,
                maxResults: 1
            }, callback);
        },
        getItemById = function (videoId, callback) {
            return ytApi.get({
                action    : 'videos',
                part      : 'id, snippet, contentDetails, player,recordingDetails,statistics',
                id        : videoId,
                maxResults: 1
            }, callback);
        };

    // Public API here
    return {
        getSearch: getSearch,
        getPopular: getPopular,
        getNav: getNav,
        getItemsByCatId: getItemsByCatId,
        getChannelById: getChannelById,
        getItemById: getItemById,
        getSearchWithHttp: getSearchWithHttp
    };
});
