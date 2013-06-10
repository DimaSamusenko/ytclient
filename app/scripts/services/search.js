'use strict';

angular.module('ytclientApp').factory('search', function ($resource) {

    var ytApi = $resource('https://www.googleapis.com/youtube/v3/:action',
            {
                action: 'search',
                key: 'AIzaSyCpOdAM-uUOZnv2-RbhkpQLGNUhEpAt4qE',
                part: 'id,snippet',
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
            return ytApi.get({
                    action    : 'playlistItems',
                    maxResults: 50,
                    playlistId: 'LPtnHdj3df7iM',
                    part      : 'id,snippet,contentDetails'
                }, callback);
        },

        getNav = function (callback) {
            return ytApi.get({
                    action    : 'guideCategories',
                    regionCode: 'US',
                    part      : 'id,snippet'
                }, callback);
        },

        getCatItems = function (categoryId, callback) {
            return ytApi.get({
                    maxResults     : 50,
                    order          : 'date',
                    regionCode     : 'US',
                    type           : 'video',
                    videoCategoryId: categoryId,
                    channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
                    videoDimension : '2d'
                }, callback);
        },
        getChannelsByCat = function (categoryId, callback) {
            return ytApi.get({
                    action    : 'channels',
                    regionCode: 'US',
                    part      : 'id, snippet, contentDetails, invideoPromotion, topicDetails',
                    categoryId: categoryId,
                    maxResults: 50
                }, callback);
        };

    // Public API here
    return {
        getSearch: getSearch,
        getPopular: getPopular,
        getNav: getNav,
        getCatItems: getCatItems,
        getChannelsByCat: getChannelsByCat
    };
});
