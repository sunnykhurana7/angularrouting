(function () {
    'use strict';

    angular.module('myApp')
        .service('userData',userData);
    
    function userData() {

        this.users = [
            {
                id:1,
                name:'sunnykhurana',
                email:'sunny.khurana@tothenew.com',
                competency:'Frond End Developer',
                image:'https://www.atomix.com.au/media/2015/06/atomix_user31.png'
            },
            {
                id:2,
                name:'sourabhkhera',
                email:'sourabh.khera@tothenew.com',
                competency:'Mean Developer',
                image:'https://www.atomix.com.au/media/2015/06/atomix_user31.png'
            },{
                id:3,
                name:'sahildua',
                email:'sahil.dua@tothenew.com',
                competency:'Mean Developer',
                image:'https://www.atomix.com.au/media/2015/06/atomix_user31.png'
            },
            {
                id:4,
                name:'yatinrakumar',
                email:'yatindar.kumar@tothenew.com',
                competency:'Frond End Developer',
                image:'https://www.atomix.com.au/media/2015/06/atomix_user31.png'
            }

        ]
    }

})();