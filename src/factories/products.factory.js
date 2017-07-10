(function() {
    'use strict';

    angular
        .module('app')
        .factory("ProductsFactory",ProductsFactory);

    ProductsFactory.$inject = ['$uibModal','$log'];

    function ProductsFactory($uibModal,$log) {

        var data = [
            {
                id: 1,
                phone: 'Смартфон Apple iPhone SE',
                img: './images/iphone.jpg',
                price: ' 59100 ',
                counts: 0
            },
            {
                id: 2,
                phone: 'Смартфон HTC Desire 628',
                img: './images/htc.jpg',
                price: '50100',
                counts: 0
            },
            {
                id: 3,
                phone: 'Смартфон Sony Xperia',
                img: './images/sony.jpg',
                price: '60100',
                counts: 0
            },
            {
                id: 4,
                phone: 'Смартфон Samsung Galaxy',
                img: './images/samsung.jpg',
                price: '9100',
                counts: 0
            },
            {
                id: 5,
                phone: 'Nokia 5',
                img: './images/nokia.jpg',
                price: '5100',
                counts: 0
            },
            {
                id: 6,
                phone: 'Смартфон Alcatel Shine Lite',
                img: './images/alcatel.jpg',
                price: '14 100 ',
                counts: 0
            }
        ];

        var service = {
            phone: {},
            basket_phones : [],
            basketNav :{ // инфа о покупках
                phone_sum: 0,
                phone_counts: 0
            },
            get_phones: get_phones,
            open_modal: open_modal,
            add_to_basket: add_to_basket,
            remove: remove
        };

        return service;

        function get_phones () { //список всехтелефонов
            return data;
        }

        function open_modal (phone) { //открывает модальное и прокидывает инфу о текущем товаре
            var modalInstance =  $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: './modal/modal.html',
                controller: 'ModalCtrl as ModalCtrl',
                resolve: {
                    phone: function() {
                        return phone;
                    }
                }
            });

            modalInstance.result.then(function (phone) {
                service.phone = phone;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }

        function add_to_basket (phone) { //добавление товара в корзину
            for (var i = 0; i < phone.counts; i++){
                service.basket_phones.push(phone);
            }
            service.basketNav.phone_sum += (parseInt(phone.counts) * parseInt(phone.price)); //изменение данных о покупках в меню
            service.basketNav.phone_counts += parseInt(phone.counts);

            phone.counts = 0;
        }

        function remove (phone) { // удаление из корзин
            service.basket_phones.splice(service.basket_phones.indexOf(phone),1);
            service.basketNav.phone_sum -= phone.price; //изменение данных о покупках в меню
            service.basketNav.phone_counts -= 1;
        }
    }
})();
