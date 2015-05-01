angular.module('starter.controllers', ['starter.calcs', 'firebase'])

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

.controller('WikiCtrl', function($scope, $firebaseArray) {
  var fb = new Firebase("https://kspmobile.firebaseio.com/wikiPages");

  $scope.pages = $firebaseArray(fb);
  $scope.myPage = null;
  $scope.bodyText = "";


  $scope.setText = function(page) {
      $scope.myPage = this.myPage;
      $scope.bodyText = $scope.myPage.text;
  }
})

.controller('CalcCtrl', function($scope, Calcs) {
  $scope.calcs = Calcs.all();
  $scope.remove = function(calc) {
    Calcs.remove(calc);
  }
})

.controller('CalcDetailCtrl', function($scope, $stateParams, Calcs, $location) {
  $scope.calc = Calcs.get($stateParams.calcId);
});
