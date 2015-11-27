require.config({
    paths: {
        'jquery': '/bower/jquery/dist/jquery.min',
        'angular': '/bower/angular/angular.min',
        'angularLazyLoad': '/bower/angular-couch-potato/dist/angular-couch-potato',
        'hrm': '/demo/angularjs/controller'
    },
    shim: {
        angular: {
          exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },
    urlArgs: 'v=10000'
});
