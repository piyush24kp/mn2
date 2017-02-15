(function() { //code for open modal window
    'use strict';

    angular
        .module('app.widgets')
        .directive('headerDrv', headerDrv);

    /* @ngInject */
    headerDrv.$inject = ['$q', '$uibModal', '$location'];

    function headerDrv($q, $uibModal, $location) {

        var directive = {
            link: link,
            restrict: 'A',
            templateUrl: 'mn2/app/layout/header.tmpl.html'
        };
        return directive;

        function link(scope, element, attrs) {}
    }

})();
