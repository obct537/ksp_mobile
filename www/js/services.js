angular.module('starter.services', [])

.factory('Planets', function() {
  // Might use a resource here that returns a JSON array

  var planets = [{
    id: 0,
    name: 'Kerbin',
  }, {
    id: 1,
    name: 'Jool',
  },{
    id: 2,
    name: 'Moho',
  },{
    id: 3,
    name: 'Eve',
  },{
    id: 4,
    name: 'Duna',
  },{
    id: 5,
    name: 'Eeloo',
  },{
    id: 6,
    name: 'Dres',
  }];

  return {
    all: function() {
      return planets;
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
