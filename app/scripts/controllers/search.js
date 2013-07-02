'use strict';

angular.module('ytclientApp').controller('SearchCtrl', function ($scope, search, $log) {

    $scope.searchResults = function (searchTerm) {
        return search.getSearchWithHttp(searchTerm);
        /*
        return search.getSearch({q: searchTerm}, function(result) {
            var snippets = _.pluck(result.items, 'snippet'),
                titles = _.pluck(snippets, 'title');

            return titles;
        });*/
    };

});
