'use strict';

angular.module('ytclientApp').controller('SearchCtrl', function ($scope, search, $log) {

    $scope.searchResults = function (searchTerm) {
        return search.getSearchWithHttp(searchTerm);
    };

});
