(function () {
    'use strict';

    var app = angular.module('myApp',['ui.router']);
    
    app.config([
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider',
        function ($locationProvider,$stateProvider,$urlRouterProvider) {

            $urlRouterProvider.when('/','/DemoApplication');

            $locationProvider.html5Mode({
                enabled:true,
                requireBase:false
            });

            $stateProvider
                .state('home', {
                    url: '',
                    templateUrl:'app/homepage.html',
                    controller:'homepagecontroller',
                    abstract:true

                })
                .state('home.Demo',{
                url:'/DemoApplication',
                views:{
                    'leftPanel':{
                      templateUrl:'app/partial/left.html',
                      controller:'leftController'
                   },
                    'rightPanel':{
                      templateUrl:'app/partial/right.html',
                      controller:'rightcontroller'
                   },
                    'centerPanel':{
                      templateUrl:'app/partial/center.html',
                      controller:'centercontroller'
                  }
                },
            });


            $stateProvider
                .state('profile',{
                    url:'/profile/:id',
                    templateUrl:'app/profile.html',
                    controller:'profileController'
                })
        }
    ]);

    app.controller('profileController',['userData','$stateParams', function (userData,$stateParams) {


        var vp = this;
        vp.id = $stateParams.id;
        vp.users = userData.users;

    }])
    
    
    app.controller('homepagecontroller',[function () {
        var vm = this;
        vm.name = "Demo Application";
    }]);

    app.controller('leftController',[function () {

    }]);

    app.controller('rightcontroller',[function () {
        
    }]);




    app.controller('centercontroller',['userData',function (userData) {

        var vm_c = this;
        vm_c.users = userData.users;

    }])

})();