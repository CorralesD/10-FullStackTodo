(function() {
    'use strict';

    angular
        .module('app')
        .factory('postsFactory', postsFactory);

    postsFactory.$inject = ['$http'];

    /* @ngInject */
    function postsFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(post) {
        	return $http.post('http://localhost:60149/api/posts', post);
        }

        function getAll() {

        	return $http.get('http://localhost:60149/api/posts');
        }

        function getById(id) {
        	return $http.get('http://localhost:60149/api/posts/' + id);

        }

        function update(id, post) {
        	return $http.put('http://localhost:60149/api/posts/' + id, post);

        }

        function remove(id) {
        	return $http.delete('http://localhost:60149/api/posts/' + id);
        }
    }
})();