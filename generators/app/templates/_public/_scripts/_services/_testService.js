'use strict';

angular.module('<%= ngname %>')
    .service('testService', function() {
        this.getGreetings = function() {
            return "hello";
        }
    });
