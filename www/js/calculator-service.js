angular.module('starter.calcs', [])


.factory('Calcs', function() {

  var calcs = [{
    id: 0,
    name: 'Delta V',
  },
  {
    id: 1,
    name: 'Phase Angles',
  }];

  return {
    all: function() {
      return calcs;
    },
    get: function(calcId) {
      for (var i = 0; i < calcs.length; i++) {
        if (calcs[i].id === parseInt(calcId)) {
          return calcs[i];
        }
      }
      return null;
    }
  };
});
