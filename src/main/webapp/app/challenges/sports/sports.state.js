(function() {
    'use strict';

    angular
        .module('pfgApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('sports', {
            parent: 'challenges',
            url: '/sports',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'sports.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/challenges/sports/sports.html',
                    controller: 'SportsController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('sports');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
