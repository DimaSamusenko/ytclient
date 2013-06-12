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
                    publishedAfter: (function() {
                        var now = new Date(),
                            weekAgo = now.setDate(now.getDate()-7);
                        return new Date(weekAgo).toISOString();
                    }()),
                    videoDimension : '2d'
                }, callback);
        },
        getChannelsByCatId = function (categoryId, callback) {
            return ytApi.get({
                    action    : 'channels',
                    regionCode: 'US',
                    part      : 'id, snippet, contentDetails, invideoPromotion, topicDetails',
                    categoryId: categoryId,
                    maxResults: 50
                }, callback);
        },
        getItemById = function (videoId, callback) {
            return ytApi.get({
                    action    : 'videos',
                    part      : 'id, snippet, contentDetails,player,recordingDetails,statistics',
                    id: videoId,
                    maxResults: 50
                }, callback);
        };

    // Public API here
    return {
        getSearch: getSearch,
        getPopular: getPopular,
        getNav: getNav,
        getItemsByCatId: getItemsByCatId,
        getChannelsByCatId: getChannelsByCatId,
        getItemById: getItemById
    };
});
