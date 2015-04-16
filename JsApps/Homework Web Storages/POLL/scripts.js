if (!localStorage.submited) {
	localStorage.setItem('submited', false);
}

if (!localStorage.checkedItems) {
	localStorage.setItem('checkedItems', []);
}

	var question = new Question('who is the president', 'me','you', 'nakov', 'mama');
	var question2 = new Question('what are you', 'alien','dog', 'plane', 'programer');

	question.addQuestion();
	question2.addQuestion();


fillRadio();





$('#poll').append('<button>Submit</button>');

$('button').on('click', function  (ev) {
	localStorage.setItem('submited', true);
});

$('input').on('click', saveItems);

function saveItems (ev) {
	var arr = [];
	$('input:checked').each(function  () {
		arr.push(this.value);
	});
	localStorage.setItem('checkedItems', JSON.stringify(arr));
}

function fillRadio () {
	var inputs = $('input');
	inputs.each(function  () {
		var that = this;
		var value = this.value;
		JSON.parse(localStorage.checkedItems).forEach(function  (element) {
			if(value === element){
				that.checked = true;
			}
		});
	});
	
}

var maxtime = 5 * 60;
countdown();
var interval = setInterval(countdown, 1000);
function countdown (){
	var minutes,
		seconds;
	maxtime--;

	minutes = Math.floor(maxtime / 60);
	seconds = Math.floor(maxtime % 60);

	if (seconds < 10) {
		seconds = '0' + seconds;
	};
	if (minutes < 10) {
		minutes = '0' + minutes;
	};

	$('#timer').text(minutes + ':' + seconds);

}
