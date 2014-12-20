(function() {
    'use strict';

    angular.module('checklist')
        .factory('checklistLoader', checklistLoader);

    function checklistLoader($q, $timeout, $http) {
        var service = {
            loadChecklist: loadChecklist
        };
        return service;

        //////////

        function loadChecklist(checklistName) {
            var deferred = $q.defer();
            $http.get('/data/' + checklistName + '.json')
                .success(function(result){
                    deferred.resolve(result);
                })
                .error(function(){
                    deferred.reject();
                });
            return deferred.promise;
        }

    }
})();