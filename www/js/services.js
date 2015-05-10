angular.module('starter.services', [])

.factory('Planets', function() {
  // Might use a resource here that returns a JSON array

  var planets = [{
    id: 0,
    name: 'Kerbin',
    parent: "Kerbol",
    alt: 13599840.256,
    mu: 3531.6,
    radius: 600,
    inclination: 0,
    soi: 84159.2865,
    nav: {
      landing: 4500,
      orbit: 0,
      intercept: 950,
      aero: true
    }
  }, {
      id: 1,
      name: 'Minmus',
      parent: "Kerbin",
      alt: 47000,
      mu: 1.7658,
      radius: 60,
      inclination: 6,
      soi: 2247.428,
      nav: {
        landing: 240,
        orbit: 80,
        intercept: 920,
        aero: false
      }
  },{
      id: 2,
      name: 'Mun',
      parent: "Kerbin",
      alt: 12000,
      mu: 65.138,
      radius: 200,
      inclination: 0,
      soi: 2430,
      nav: {
        landing: 640,
        orbit: 210,
        intercept: 860,
        aero: false
      }
  },{
    id: 3,
    name: 'Moho',
    parent: "Kerbol",
    alt: 5263138.3,
    mu: 245.25,
    radius: 250,
    inclination: 7,
    soi: 11206.449,
    nav: {
      landing: 1400,
      orbit: 2200,
      intercept: 730,
      aero: false
    }
  },{
    id: 4,
    name: 'Eve',
    parent: "Kerbol",
    alt: 9832684.544,
    mu: 8171.73,
    radius: 700,
    inclination: 2.1,
    soi: 85109.364,
    nav: {
      landing: 4850,
      orbit: 1310,
      intercept: 80,
      aero: true
    }
},{
    id: 5,
    name: "Gilly",
    parent: "Eve",
    alt: 31500,
    mu: 0.008289450,
    radius: 13,
    inclination: 12,
    soi: 126.123,
    nav: {
      landing: 35,
      orbit: 0,
      intercept: 0,
      aero: false
    }
},{
    id: 6,
    name: 'Duna',
    parent: "Kerbol",
    alt: 20726155.264,
    mu: 301.363,
    radius: 320,
    inclination: 1.85,
    soi: 47921.949,
    nav: {
      landing: 1380,
      orbit: 370,
      intercept: 110,
      aero: true
    }
},{
    id: 7,
    name: "Ike",
    parent: "Duna",
    alt: 3200,
    mu: 18.56837,
    radius: 130,
    inclination: 0.2,
    soi: 1049.599,
    nav: {
      landing: 535,
      orbit: 0,
      intercept: 0,
      aero: false
    }
},{
    id: 8,
    name: 'Eeloo',
    parent: "Kerbol",
    alt: 90118858.179,
    mu: 74.410815,
    radius: 210,
    inclination: 6.15,
    soi: 119082.94,
    nav: {
      landing: 840,
      orbit: 2100,
      intercept: 1150,
      aero: false
    }
  },{
    id: 9,
    name: 'Dres',
    parent: "Kerbol",
    alt: 40839348.203,
    mu: 21.4845,
    radius: 138,
    inclination: 5,
    soi: 32832.84,
    nav: {
      landing: 555,
      orbit: 800,
      intercept: 350,
      aero: false
    }
},{
  id: 10,
  name: 'Jool',
  parent: "Kerbol",
  alt: 68773560.320,
  mu: 282528.0042,
  radius: 6000,
  inclination: 1.3,
  soi: 2455985.185,
  nav: {
    landing: 1200,
    orbit: 2630,
    intercept: 965,
    aero: true
  }
},{
    id: 11,
    name: 'Vall',
    parent: "Jool",
    alt: 43152,
    mu: 207.4815,
    radius: 300,
    inclination: 0,
    soi: 2406.401,
    nav: {
      landing: 1176,
      orbit: 0,
      intercept: 0,
      aero: false
    }
},{
    id: 12,
    name: 'Laythe',
    parent: "Jool",
    alt: 27184,
    mu: 1962,
    radius: 500,
    inclination: 0,
    soi: 3723.646,
    nav: {
      landing: 2800,
      orbit: 0,
      intercept: 0,
      aero: true
    }
},{
    id: 13,
    name: 'Pol',
    parent: "Jool",
    alt: 129890,
    mu: 0.227,
    radius: 44,
    inclination: 1.304,
    soi: 2455985.185,
    nav: {
      landing: 180,
      orbit: 0,
      intercept: 0,
      aero: false
    }
},{
    id: 14,
    name: 'Tylo',
    parent: "Jool",
    alt: 68500,
    mu: 2825.28,
    radius: 600,
    inclination: 0.025,
    soi: 10856.51837,
    nav: {
      landing: 3070,
      orbit: 0,
      intercept: 0,
      aero: false
    }
},{
    id: 15,
    name: 'Kerbol',
    mu: 1167922000,
    radius: 6540,
    nav: {
      landing: 22000,
      orbit: 0,
      intercept: 0,
      aero: false
    }
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
