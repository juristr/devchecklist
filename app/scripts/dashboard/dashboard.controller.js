(function() {
    'use strict';

    angular.module('dashboard')
        .controller('DashboardController', DashboardController);

    function DashboardController() {
        var vm = this;

        vm.checklists = [];


        activate();

        ///////////////

        function activate(){
            vm.checklists = [
                {
                    title: 'JavaScript Basics',
                    description: 'Basics in JavaScript development'
                },
                {
                    title: 'Check 2',
                    description: 'Check 3'
                }
            ];
            // for(var i=0; i<20; i++){
            //     vm.checklists.push({
            //         title: 'title ' + i,
            //         description: 'descr ' + i
            //     });
            // }
        }
    }

})();