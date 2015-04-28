var questionCounter = 0;

function Question (description, an1, an2, an3, an4) {
		questionCounter++;		
		this.name = 'question' + (questionCounter);
		this.description = description;
		this.an1 = an1;
		this.an2 = an2;
		this.an3 = an3;
		this.an4 = an4;
	}

	Question.prototype.toHTML = function() {
		var fieldset = $('<fieldset>'),
			legend = $('<legend>'),
			an1 = $('<input type="radio" name="' + this.name + '"/>'),
			an2 = $('<input type="radio" name="' + this.name + '"/>'),
			an3 = $('<input type="radio" name="' + this.name + '"/>'),
			an4 = $('<input type="radio" name="' + this.name + '"/>'),
			submit = $('<input type="submit" value="Submit" />'),
			ul = $('<ul>'),
			li1 = $('<li>'),
			li2 = $('<li>')
			li3 = $('<li>')
			li4 = $('<li>');

			an1.attr('value', this.an1);
			an2.attr('value', this.an2);
			an3.attr('value', this.an3);
			an4.attr('value', this.an4);

			an1.append('<span>' + an1.value + '</span>');
			legend.text(this.description);

			li1.append(an1);
			li1.append($('<span>').text(this.an1));

			li2.append(an2);
			li2.append($('<span>').text(this.an2));

			li3.append(an3);
			li3.append($('<span>').text(this.an3));

			li4.append(an4);
			li4.append($('<span>').text(this.an4));

			ul.append(li1).
				append(li2).
				append(li3).
				append(li4);

			fieldset.append(legend);
			fieldset.append(ul);
			return fieldset;
	};

	Question.prototype.addQuestion = function() {
	$('#poll').append(this.toHTML());
		
	};