(function () {

    angular.module('myApp.home')
        .controller('HomeCtrl',  HomeController);

    HomeController.$inject = [];

    function HomeController() {

        vm = this;

        this.imagePath = 'http://lorempixel.com/400/200';

    };
})();