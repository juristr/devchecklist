(function() {
    'use strict';

    angular.module('checklist')
        .controller('ChecklistController', ChecklistController);


    function ChecklistController(checklist) {
        var vm = this;
        vm.checklist = checklist;
        vm.determineProgress = determineProgress;

        vm.progressValue = 40;

        /////////////

        function determineProgress(section){
            var checkedItems = 0;

            for(var i=0; i<section.checks.length; i++){
                if(section.checks[i].checked){
                    checkedItems++;
                }
            }

            return (checkedItems * 100/section.checks.length);
        }
    }

})();