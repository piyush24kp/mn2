(function() {
    'use strict';

    angular
        .module('app.widgets')
        .factory('authfactory', authfactory);

    authfactory.$inject = ['$http', '$q', 'config'];

    function authfactory($http, $q, config) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getParamUrl: getParamUrl,
            getFamily: getFamily,
            getUser: getUser
        };
        return service;

        function getParamUrl(url, param) {
            if (param) {
                if (param.uid) {
                    url = url + "?uid=" + param.uid;
                } else if (param.name) {
                    url = url + "?name=" + param.name;
                }


            }
            return url;
        }

        function getFamily(param) {
            var url = '/getFamily';
            url = getParamUrl(url, param);
            return $http.get(config.APIurl + url, param)
                .then(getDataComplete);
        }

        function getUser(param) {
            var url = '/getUser';
            url = getParamUrl(url, param);
            return $http.get(config.APIurl + url, param)
                .then(getDataComplete);
        }

        function getDataComplete(response, status) {
            return response;
        }


        /*        function getSearchData(param) {

                    var url = '/keywordSearch';
                    if (param) {
                        url = url + "?search=" + param.searchKey;
                        if (param.disease) {
                            url = url + "&disease=" + param.disease;
                        }
                        if (param.filter) {
                            url = url + '&filter=' + param.filter;
                        }
                    }
                    return $http.get(config.APIurl + url, param)
                        .then(getDataComplete);
                }
        */
    }

})();
