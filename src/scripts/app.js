angular.module('app',['ui.router','ui.bootstrap'])
    .config(function($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/phones');

        $stateProvider
            .state('phones', {
                url: "/phones",
                templateUrl:"./templates/phones.html"
            })
            .state('basket', {
                url: "/basket",
                templateUrl:"./templates/basket.html"
            });
    })
    .filter('currFilter',[function(){
        return function(data){
            return data + " руб.";
        }
    }]);
