'use strict';

angular.module('ytclientApp').controller('SearchCtrl', function ($scope, search) {

    $scope.searchResults = function (searchTerm) {
        return search.getSearchWithHttp(searchTerm);
    };

});
