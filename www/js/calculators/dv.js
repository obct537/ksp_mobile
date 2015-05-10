var a = angular.module('calc.controllers', ['starter.services'])

a.controller('dvCtrl', function($scope, Planets) {

	var getPlanet = function(name){
		for( var i = 0; i < planets.length; i++ )
		{
			if( planets[i].name == name )
			{
				return planets[i];
			}
		}
	}

	planets = Planets.all();

	$scope.planets = planets;

	$scope.start = getPlanet("Kerbin");
	$scope.end = getPlanet("Duna");
	$scope.landing = true;
	$scope.return = true;
	$scope.aero = true;
	$scope.dv = 0;
	$scope.dv10 = 0;

	data = {};

	$scope.doTheMaths = function() {

		var start = getPlanet($scope.start.name);
		var end = getPlanet($scope.end.name);

		var up = 0;
		var down = 0;

		var finished = false;

		temp = end;

		while( temp.name != "Kerbol" && temp.name != start.name )
		{
			if( temp.name == end.name && $scope.landing == true )
			{
				down += temp.nav.landing;
			}

			down += temp.nav.intercept;
			down += temp.nav.orbit;

			if( temp.parent == start.name )
			{
				//here we catch the case where
				//we're going from a moon to it's parent
				up += start.nav.landing;
				finished = true;
			}

			temp = getPlanet(temp.parent);
		}

		var temp = start;

        while( !finished && temp.name != "Kerbol" && temp.name != end.name )
		{
			if( temp.name == start.name )
			{
				up += temp.nav.landing;
			}

			up += temp.nav.intercept;
			up += temp.nav.orbit;

			temp = getPlanet(temp.parent);
		}

		if( $scope.return )
		{
			up *= 2;
			down *= 2;
		}

		if( $scope.aero )
		{
			if( end.nav.aero )
			{
				down -= end.nav.landing;
			}

			if( $scope.return && start.nav.aero )
			{
				up -= start.nav.landing;
			}
		}


		$scope.dv = (up + down);
		$scope.dv10 = Math.round(((up+down) * 1.10));

	}

	$scope.submit = function() {
		doTheMaths();
	}

})
