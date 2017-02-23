'use strict';

angular.module('<%= ngname %>')
    .service('testFactory', function() {
        return {
            "message": "world!!!"
        }
    });
