(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/phones');

        $stateProvider
            .state('phones', {
                url: "/phones",
                templateUrl:"./phones/phones.html"
            })
            .state('basket', {
                url: "/basket",
                templateUrl:"./basket/basket.html"
            });
    }

})();
