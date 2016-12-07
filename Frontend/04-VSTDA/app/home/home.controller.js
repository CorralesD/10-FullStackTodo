(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['postsFactory'];

    /* @ngInject */
    function HomeController(postsFactory) {
        var vm = this;

        vm.posts = [];
        vm.delPost = delPost;
        vm.addPost = addPost;
        vm.updatePost = updatePost;

        var colorTag = {
            1: 'list-group-item-info',
            2: 'list-group-item-warning',
            3: 'list-group-item-danger'
        };

        var sortTypes = ['text', 'priority', '-priority'];

        activate();

        ////////////////

        function activate() {
            postsFactory
            .getAll()
            .then(function(response) {
                vm.posts = response.data;
            });
        }

        function addPost() {
            if (vm.newPriority) {
                postsFactory
                    .create({
                        text: vm.newPost,
                        priority: vm.newPriority
                    })
                    .then(function(response) {
                        vm.posts.push(response.data);
                    })
                    .catch(function(error) {

                    });

            } else {
                alert('what is the priority?');
            }
        };

        function delPost(post) {
            postsFactory
                .remove(post.postId)
                .then(function(response) {
                    var index = vm.posts.indexOf(post);

                    vm.posts.splice(index, 1);
                })

        }


        function updatePost(post) {
            console.log("function fires");
            postsFactory
                .update(post.postId, post)
                
        }

        vm.getClass = function(color) {
            return colorTag[color];
        }

        vm.sort = function(order) {

            vm.sortPosts = sortTypes[order];
        }
    }


})();
