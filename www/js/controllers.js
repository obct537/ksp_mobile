angular.module('starter.controllers', ['starter.calcs', 'firebase', 'ionic'])

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

.controller('WikiCtrl', function($scope, $firebaseArray, $ionicPopup) {
  var fb = new Firebase("https://kspmobile.firebaseio.com/wikiPages");

  $scope.pages = $firebaseArray(fb);
  $scope.myPage = null;
  $scope.bodyText = "";

  $scope.updateEditor = function() {
      var element = document.getElementById("pageText");
      element.style.height = element.scrollHeight + "px";
  };

  $scope.savePages = function(page) {
    $scope.pages.$save(page).catch(function(error) {
      console.log(error);
    });
  }

  $scope.removePage = function(page) {

    var myPopup = $ionicPopup.show({
      title: 'Are you sure?',
      subTitle: 'really?',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Delete</b>',
          type: 'button-assertive',
          onTap: function(e) {
            $scope.pages.$remove($scope.pages.$getRecord(page.$id)).catch(function(error) {
              console.log(error);
            });
          }
        }
      ]
    });
  }

  $scope.showPopup = function() {
    $scope.data = {}

    var template = '<label class="item item-input">' +
                      '<span class="input-label">Title</span>' +
                      '<input ng-model="data.title" type="text">' +
                    '</label>';

    var myPopup = $ionicPopup.show({
      template: template,
      title: 'Create Wiki page',
      subTitle: 'I\'m not sure why...',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.title) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              $scope.pages.$add({ name: $scope.data.title, text: 'Blank Page...'});
            }
          }
        }
      ]
    });
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
