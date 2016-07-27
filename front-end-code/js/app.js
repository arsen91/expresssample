angular.module('myapp', [])
    .directive('myDir', function() {
        return {
            restrict: 'E',
            scope: {
                name: '='
            },
            templateUrl: '../partials/main-partial.html',
            consollerAs: 'ctrl',
            link: function() {
                console.log('whatever');
            }
        };
    });