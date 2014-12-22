(function(){
    'use strict';

    angular.module('tests')
        .controller('SwitchController', SwitchController);

    function SwitchController($scope){
        $scope.data = {
            cb1: true,
            cb4: true
          };
    }

})();