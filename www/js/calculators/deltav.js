var a = angular.module('calc.controllers', ['starter.services'])

a.controller('phaseCtrl', function($scope, Planets) {

        planets = Planets.all();
        data = {};

        for( var i = 0; i < planets.length; i++ )
        {
            data[planets[i].name] = planets[i];
        }
        var fb = new Firebase("https://kspmobile.firebaseio.com/");

        var pref = fb.child("planets");

        pref.push(data);

        $scope.doTheMaths = function() {
                var o = data[origin.value];
                var d = data[destination.value];
                if( o === undefined || d === undefined )
                {
                    angle.value = "Invalid selection";
                    return false;
                }
                var p = data[o.parent];

                // phase angle:
                var t_h = Math.PI * Math.sqrt(Math.pow(o.alt+d.alt, 3)/(8*p.mu));
                var phase = (180 - Math.sqrt(p.mu/d.alt) * (t_h/d.alt) * (180/Math.PI)) % 360;
                angle.value ="" + Math.round(phase*100)/100 + "°";

                // velocity:
                var exitAlt = o.alt + o.soi; // approximation for exiting on the "outside"
                var v2 = Math.sqrt(p.mu/exitAlt) * (Math.sqrt((2*d.alt)/(exitAlt+d.alt)) - 1);
                var r = o.radius + parseInt(orbit.value);
                var v = Math.sqrt( (r* (o.soi*v2*v2 - 2*o.mu) + 2*o.soi*o.mu) / (r*o.soi) );
                velocity.value = "" + Math.round(v*100000)/100 + " m/s";

				// delta-v:
				var v_o = Math.sqrt(o.mu/r);
				var delta_v = v - v_o;
				deltav.value ="" + Math.round(delta_v*100000)/100 + " m/s";

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

                ejection.value = "" + Math.round(eject*100)/100 + "°";

        }


        $scope.submit = function() {
                doTheMaths();
        }

        //doTheMaths();
})
