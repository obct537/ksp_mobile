angular.module('starter.controllers', [])

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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
