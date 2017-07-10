(function() {
    'use strict';

    angular
        .module('app')
        .filter('currFilter',currFilter);

    function currFilter() {
        return function(data){
            data = data.replace(/ /g,'').trim();
            return data + " руб.";
        }
    }

})();
