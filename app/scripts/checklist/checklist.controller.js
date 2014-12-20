(function() {
    'use strict';

    angular.module('checklist')
        .controller('ChecklistController', ChecklistController);


    function ChecklistController(checklist) {
        var vm = this;
        vm.checklist = checklist;
    }

})();