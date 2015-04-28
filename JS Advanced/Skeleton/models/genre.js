var imdb = imdb || {};

(function  (scope) {
	'use strict';

	var id = 0;

	function Genre (name) {
		this._id = id++;
		this.name = name;
		this._movies = [];
	}

	Genre.prototype.addMovie = function(movie) {
		this._movies.push(movie);
	};

	Genre.prototype.deleteMovie = function(first_argument) {
		var index = this._movies.indexOf(movie);
		this._movies.splice(index, 1);
	};

	Genre.prototype.deleteMovieById = function(movieId) {
		var movie = this._movies.filter(function  (movie) {
			return movie._id === movieId;
		});
		this.deleteMovie(movie);
	};

	Genre.prototype.getMovies = function() {
		return this._movies;
	};

	scope.getGenre = function getGenre (name) {
		return new Genre(name);
	};

}(imdb));