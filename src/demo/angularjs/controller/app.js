define(['angular', 'angularLazyLoad'], function(angular, lazyLoad) {
    var app;
    app = angular.module('hrm', []);
    lazyLoad.configureApp(app);
    app.config(['$stateProvider', '$couchPotatoProvider', function($stateProvider, $couchPotatoProvider) {

            stateConf = {
              templateUrl: '/demo/angularjs/directive.html',
              controller: 'hrm.controller.d',
              controllerAs: 'd',
              resolve: {
                l: $couchPotatoProvider.resolveDependencies(['hrm/directive'])
              }
            };
            $stateProvider.state('hah', stateConf);
        }
    ]).run([function() {
        }
    ]);
    return app;
});

