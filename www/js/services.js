angular.module('starter.services', [])

.factory('Planets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var planets = [{
    id: 0,
    name: 'Kerbin',
    img: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  } ];

  return {
    all: function() {
      return planets;
    },
    remove: function(planet) {
      planets.splice(planets.indexOf(planet), 1);
    },
    get: function(planetId) {
      for (var i = 0; i < planets.length; i++) {
        if (planets[i].id === parseInt(planetId)) {
          return planets[i];
        }
      }
      return null;
    }
  };
});
