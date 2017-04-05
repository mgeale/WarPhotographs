app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.
    when('/', {
      templateUrl: 'app/body.html'
    });

}]);
