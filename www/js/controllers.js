angular.module('starter.controllers', ['starter.calcs'])

.controller('DashCtrl', function($scope) {})

.controller('PlanetsCtrl', function($scope, Planets) {
  $scope.planets = Planets.all();
  $scope.remove = function(planet) {
    Planets.remove(planet);
  }
})

.controller('PlanetsDetailCtrl', function($scope, $stateParams, Planets) {
  $scope.planet = Planets.get($stateParams.planetId);
})

.controller('WikiCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})

.controller('CalcCtrl', function($scope, Calcs) {
  $scope.calcs = Calcs.all();
  $scope.remove = function(calc) {
    Calcs.remove(calc);
  }
})

.controller('CalcDetailCtrl', function($scope, $stateParams, Calcs, $location) {
  $location.path('/' + $stateParams.calcId + '.html');
});
