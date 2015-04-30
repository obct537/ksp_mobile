angular.module('calc.controllers', [])

.controller('dvCtrl', function($scope, Planets) {
        data = {
                // all values in km and corresponding
                Kerbol: {
                        name: "Kerbol",
                        mu: 1167922000,
                        radius: 65400,
                },
                Moho: {
                        name: "Moho",
                        parent: "Kerbol",
                        alt: 5263138.3,
                        mu: 245.25,
                        radius: 250,
                        inclination: 7,
                        soi: 11206.449,
                },
                Eve: {
                        name: "Eve",
                        parent: "Kerbol",
                        alt: 9832684.544,
                        mu: 8171.73,
                        radius: 700,
                        inclination: 2.1,
                        soi: 85109.364,
                },
        Gilly: {
                        name: "Gilly",
                        parent: "Eve",
                        alt: 31500,
                        mu: 0.008289450,
                        radius: 13,
                        inclination: 12,
                        soi: 126.123,
                },
                Kerbin: {
                        name: "Kerbin",
                        parent: "Kerbol",
                        alt: 13599840.256,
                        mu: 3531.6,
                        radius: 600,
                        inclination: 0,
                        soi: 84159.2865,
                },
                Mun: {
                        name: "Mun",
                        parent: "Kerbin",
                        alt: 12000,
                        mu: 65.138,
                        radius: 200,
                        inclination: 0,
                        soi: 2430,
                },
                Minmus: {
                        name: "Minmus",
                        parent: "Kerbin",
                        alt: 47000,
                        mu: 1.7658,
                        radius: 60,
                        inclination: 6,
                        soi: 2247.428,
                },
                Duna: {
                        name: "Duna",
                        parent: "Kerbol",
                        alt: 20726155.264,
                        mu: 301.363,
                        radius: 320,
                        inclination: 1.85,
                        soi: 47921.949,
                },
        Ike: {
                        name: "Ike",
                        parent: "Duna",
                        alt: 3200,
                        mu: 18.56837,
                        radius: 130,
                        inclination: 0.2,
                        soi: 1049.599,
                },
                Dres: {
                        name: "Dres",
                        parent: "Kerbol",
                        alt: 40839348.203,
                        mu: 21.4845,
                        radius: 138,
                        inclination: 5,
                        soi: 32832.84,
                },
                Jool: {
                        name: "Jool",
                        parent: "Kerbol",
                        alt: 68773560.320,
                        mu: 282528.0042,
                        radius: 6000,
                        inclination: 1.3,
                        soi: 2455985.185,
                },
        Laythe: {
                        name: "Laythe",
                        parent: "Jool",
                        alt: 27184,
                        mu: 1962,
                        radius: 500,
                        inclination: 0,
                        soi: 3723.646,
                },
        Vall: {
                        name: "Vall",
                        parent: "Jool",
                        alt: 43152,
                        mu: 207.4815,
                        radius: 300,
                        inclination: 0,
                        soi: 2406.401,
                },
        Tylo: {
                        name: "Tylo",
                        parent: "Jool",
                        alt: 68500,
                        mu: 2825.28,
                        radius: 600,
                        inclination: 0.025,
                        soi: 10856.51837,
                },
        Bop: {
                        name: "Bop",
                        parent: "Jool",
                        alt: 104500,
                        mu: 2.486835,
                        radius: 65,
                        inclination: 15,
                        soi: 993.0028,
                },
                Pol: {
                        name: "Pol",
                        parent: "Jool",
                        alt: 129890,
                        mu: 0.227,
                        radius: 44,
                        inclination: 1.304,
                        soi: 2455985.185,
                },
		Eeloo: {
			name: "Eeloo",
			parent: "Kerbol",
			alt: 90118858.179,
			mu: 74.410815,
			radius: 210,
			inclination: 6.15,
			soi: 119082.94,
		}

        }

        $scope.doTheMaths = function() {
                var o = data[$scope.origin];
                var d = data[$scope.destination];
                var p = data[o.parent];

                // phase angle:
                var t_h = Math.PI * Math.sqrt(Math.pow(o.alt+d.alt, 3)/(8*p.mu));
                var phase = (180 - Math.sqrt(p.mu/d.alt) * (t_h/d.alt) * (180/Math.PI)) % 360;
                $("#phase").val("" + Math.round(phase*100)/100 + "°");

                // velocity:
                var exitAlt = o.alt + o.soi; // approximation for exiting on the "outside"
                var v2 = Math.sqrt(p.mu/exitAlt) * (Math.sqrt((2*d.alt)/(exitAlt+d.alt)) - 1);
                var r = o.radius + parseInt($("#orbit").val());
                var v = Math.sqrt( (r* (o.soi*v2*v2 - 2*o.mu) + 2*o.soi*o.mu) / (r*o.soi) );
                $("#velocity").val("" + Math.round(v*100000)/100 + " m/s");

				// delta-v:
				var v_o = Math.sqrt(o.mu/r);
				var delta_v = v - v_o;
				$("#deltav").val("" + Math.round(delta_v*100000)/100 + " m/s");

                // ejection angle:
                var eta = v*v/2 - o.mu/r;
                var h = r * v;
                var e = Math.sqrt(1+((2*eta*h*h)/(o.mu*o.mu)));
                var eject = (180 - (Math.acos(1/e) * (180/Math.PI))) % 360;

                if (e < 1) {
                        // maltesh's solution for elliptical transfers
                        var a = -o.mu/(2*eta);
                        var l = a*(1-e*e);
                        var nu = Math.acos((l-o.soi)/(e*o.soi));
                        var phi = Math.atan2((e*Math.sin(nu)), (1+e*Math.cos(nu)));
                        //eject = (270 - (phi*180/Math.PI)) % 360;

                        // Kosmo-nots fix to maltesh's solution
                        eject = (90 - (phi*180/Math.PI) + (nu*180/Math.PI)) % 360;
                }

                $("#ejection").val("" + Math.round(eject*100)/100 + "°");

                // warning for different inclination
                if (o.inclination != d.inclination)
                        $("#inclination-warning").show();

                if (o.speculated || d.speculated)
                        $("#speculation-warning").show();

        }


        $scope.submit = function() {
                doTheMaths();
        }

        //doTheMaths();
})
