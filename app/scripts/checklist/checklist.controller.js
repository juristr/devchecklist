(function() {
    'use strict';

    angular.module('checklist')
        .controller('ChecklistController', ChecklistController);


    function ChecklistController() {
        var vm = this;
        vm.checklist = {
            title: 'JavaScript - The Language',
            description: 'JavaScript language basics.',
            sections: [{
                title: 'Section 1',
                checks: [
                    {
                        check: 'check 1'
                    },
                    {
                        check: 'check 2'
                    }
                ]
            },
            {
                title: 'Section 2',
                checks: [
                    {
                        check: 'check 1'
                    },
                    {
                        check: 'check 2'
                    },
                    {
                        check: 'check 3'
                    }
                ]
            }]

        };

    }

})();