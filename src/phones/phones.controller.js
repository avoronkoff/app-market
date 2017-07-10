(function() {
    'use strict';

    angular
        .module('app')
        .controller('PhoneCtrl', PhoneCtrl);

    PhoneCtrl.$inject = ['ProductsFactory'];

    function PhoneCtrl(ProductsFactory) {
        var vm = this;

        vm.basketNav = ProductsFactory.basketNav; //корзина в меню
        vm.basket_phones = ProductsFactory.basket_phones; //товары в корзине

        vm.phones = ProductsFactory.get_phones();// список телефонов

        vm.open_modal = function(phone) { //открывает модальное окно
            ProductsFactory.open_modal(phone);
        };

        vm.remove = function (phone) { //удаляет товар с корзины
            ProductsFactory.remove(phone);
        };
    }
})();


