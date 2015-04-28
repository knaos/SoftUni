var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data);

		container.appendChild(genresUl);

		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				moviesContainer.setAttribute('data-genre-id', genreId);
			}
		});

		// Task 2 - Add event listener for movies boxes
		moviesContainer.addEventListener('click', function  (ev) {
			if ((ev.target.tagName === 'LI' || ev.target.parentElement.tagName ==='LI') && ev.target.tagName !== 'button') {
				var searchedMovie,
					searchedMovieId,
					detailsHTML;

				searchedMovieId = parseInt(ev.target.getAttribute('data-id') ||  ev.target.parentElement.getAttribute('data-id'));
				searchedMovie = getMovieById(data, searchedMovieId);
				

				detailsHTML = loadDetails(searchedMovie.getActors(), searchedMovie.getReviews());
				detailsContainer.innerHTML = detailsHTML.outerHTML;

			}
		});

		// Task 3 - Add event listener for delete button (delete movie button or delete review button)
		moviesContainer.addEventListener('click', function  (ev) {
			if (ev.target.tagName === 'button') {
				var movieId = ev.target.parentElement.getAttribute('data-id');
				var genreId = document.getElementById('movies').getAttribute('data-id');
				data[genreId].deleteMovieById(movieId); 
			}
		});
	}

	function getMovieById (data, movieId) {
		var searchedMovie;
		data.forEach(function  (genre) {
					genre.getMovies().filter(function  (movie) {
						if (movie._id === movieId) {
							searchedMovie = movie;
						}
						return false;

					});

				});
		return searchedMovie;
	}

	function loadDetails (actors, reviews) {
		var div,
			actorsWrapper,
			reviewsWrapper;

		div = document.createElement('div');
		div.innerHTML += '<h2>Actors</h2>';		
		actorsWrapper = getActorsDetails(actors);
		div.appendChild(actorsWrapper);
		div.innerHTML += '<h2>Reviews</h2>';		
		reviewsWrapper = getReviews(reviews);
		div.appendChild(reviewsWrapper);

		return div;

	}

	function getActorsDetails (actors) {
		var actorsUl = document.createElement('UL');

		actors.forEach(function  (actor) {
			var liActor = document.createElement('li');
			liActor.innerHTML+='<h4>' + actor.name +'</h4>';
			liActor.innerHTML += 
			'<p>' +
				'<span>Bio: </span>' +
				'<span>'+
					actor.bio +
				 '</span>' +
				'<br />' +
				'<span>' +'Born: ' + actor.born.toString() +'</span>' +
			'</p>';

			actorsUl.appendChild(liActor);
		});

		return actorsUl;
	}

	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li');
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
			liMovie.innerHTML += '<button class="delete-movie" data-id="' + movie._id +'">Delete movie</button>';
			
			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

	function getReviews (reviews) {
		var reviewsUl = document.createElement('UL');

		reviews.forEach(function  (review) {
			var liReview = document.createElement('li');
			liReview.innerHTML+='<h4>' + review.author +'</h4>';
			liReview.innerHTML += 
			'<p>' +
				'<span>Bio: </span>' +
				'<span>'+
					review.content +
				 '</span>' +
				'<br />' +
				'<span>' + review.date.toString() +'</span>' +
			'</p>';
			reviewsUl.appendChild(liReview);

		

		});

		return reviewsUl;
	}

	scope.loadHtml = loadHtml;
}(imdb));