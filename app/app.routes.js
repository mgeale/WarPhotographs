app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
    when('/', {
      templateUrl: 'app/body.html',
      controller: 'mainController'
    });

}]);
