var imdb = imdb || {};

(function (scope) {
	'use strict';
	
	function Theatre(name, length, rating, country, isPuppet) {
		scope.Movie.apply(this, arguments);
		this.isPuppet = isPuppet;
	}

	Theatre.extend(scope.Movie);

	scope.getTheatre = function (name, length, rating, country, isPuppet) {
		return new Theatre(name, length, rating, country, isPuppet);
	};
	
}(imdb));