angular.module('app')
    .controller('mainCtrl',['productsFactory', function (productsFactory) {
        this.basketNav = productsFactory.basketNav; //корзина в меню
        this.basket_phones = productsFactory.basket_phones; //товары в корзине

        this.phones = productsFactory.get_phones();// список телефонов

        this.open_modal = function(phone) { //открывает модальное окно
            productsFactory.open_modal(phone);
        };

        this.remove = function (phone) { //удаляет товар с корзины
            productsFactory.remove(phone);
        };
    }]);

