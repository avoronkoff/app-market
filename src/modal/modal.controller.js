(function() {
    'use strict';

    angular
        .module('app')
        .controller('ModalCtrl', ModalCtrl);

    ModalCtrl.$inject = ['$uibModalInstance','ProductsFactory','phone'];

    function ModalCtrl($uibModalInstance, ProductsFactory, phone) {
        var vm = this;

        vm.phone = phone; //текущий товар

        vm.add_to_basket = function (phone) { //добавление в корзину и закрытие
            ProductsFactory.add_to_basket(phone); // модального окна
            $uibModalInstance.close();
        };

        vm.cancel = function () { // закрытие модального окна
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
