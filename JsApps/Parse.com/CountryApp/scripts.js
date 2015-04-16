 $(function() {
	var PARSE_APP_ID = "usNx2pioY9A0hHu4qlUuUiTyBDS8OWyrwYj6XGsh",
	 	PARSE_REST_API_KEY = "9y0eiOOwDl6UhZHYyMfr1vym2hl32vAKQdzonjI9",
	 	headers = {
		"X-Parse-Application-Id" : PARSE_APP_ID,
		"X-Parse-REST-API-Key" : PARSE_REST_API_KEY
		},
		countriesArray = [],
		townsArray = [],
		classesUrl = "https://api.parse.com/1/classes";

	function getCountryId (ev){
		var countryName = $(ev.target).siblings('.listItem').text();
		var countryId = countriesArray.filter(function(country){
			return countryName == country.name;
		})[0].objectId;

		return countryId;
	}
	function deleteCountry (ev) {
		var countryId = getCountryId(ev);
		$.ajax({
			method: "DELETE",
			headers: headers,
			url: "https://api.parse.com/1/classes/Country/" + countryId,
			success: function(){
				loadCountries();
			},
			error: function(err){
				console.log('Cant delete country');
			}
		});
	}

	var loadCountries = function loadCountries () {
		$.ajax({
			method: "GET",
			headers: {
				"X-Parse-Application-Id" : PARSE_APP_ID,
				"X-Parse-REST-API-Key": PARSE_REST_API_KEY
			},
			url: "https://api.parse.com/1/classes/Country",
			}).success(function(data) {
				$('#countriesList').html('');
				for(var c in data.results){
					var country = data.results[c];
					countriesArray.push(country);
					var countryItem = ListItem(country.name);
					countryItem.appendTo($('#countriesList'));
				}
				$('.deleteButton').on('click', deleteCountry);
				$('.editButton').on('click', editCountry);
				$('#countriesList .listItem').on('click', loadTowns);
			}).error(function(){
			alert('Cannot load countries');
		});
	};


	function ListItem(name) {
		var li = $('<li>'),
			editButton = $('<button class="button editButton">Edit</button>'),
			deleteButton = $('<button class="button deleteButton">Delete</button>'),
			nameSpan = $('<span class="listItem">');
		nameSpan.text(name);
		li.append(nameSpan);
		li.append(editButton);
		li.append(deleteButton);
		return li;
	}


	function editCountry(ev){
		var countryId= getCountryId(ev);
		var newName = prompt('Enter new name for the country');
		$.ajax({
			method: "PUT",
			url: "https://api.parse.com/1/classes/Country/" + countryId,
			headers: headers,
			contentType: 'application/json',
			data: JSON.stringify({
				name: newName
			}),
			success: function  () {
				console.log('Updated successfully');
				loadCountries();
			},
			error: function  (err) {
				console.log(err);
			}		
		});
	}

	function loadTowns () {
		$.ajax({
			type: "GET",
			url: classesUrl + "/Town",
			headers: headers,
			success: function(data){
				$('#towns').html('');
				for(var t in data.results){
					var town = data.results[t];
					townsArray.push(town);
					var townElement = ListItem(town.name);
					$('#towns').append(townElement);
				}
			}
		});
	}

	loadCountries();


});
