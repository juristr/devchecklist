(function() {
    'use strict';

    angular.module('dashboard')
        .controller('DashboardController', DashboardController);

    function DashboardController($http) {
        var vm = this;

        vm.checklists = [];


        activate();

        ///////////////

        function activate(){
            $http.get('/data/checklists.json')
                .success(function(result){
                    vm.checklists = result.checklists;
                });
        }
    }

})();