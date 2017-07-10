angular.module('app').controller('modalCtrl',['$uibModalInstance','productsFactory','phone',
    function ($uibModalInstance,productsFactory,phone) {
    this.phone = phone; //текущий товар

    this.add_to_basket = function (phone) { //добавление в корзину и закрытие
        productsFactory.add_to_basket(phone); // модального окна
        $uibModalInstance.close();
    };

    this.cancel = function () { // закрытие модального окна
        $uibModalInstance.dismiss('cancel');
    };
}]);
