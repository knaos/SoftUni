var greet = (
	
	

	function greet () {
	if (!localStorage.name) {
		var name = prompt("Enter your name");
		if (name) {
			localStorage.setItem('name', name);
			localStorage.setItem('counter', 0);
		}
	}
	if (!sessionStorage.counter) {
		sessionStorage.setItem('counter',0);
	}
		var sessionCount = parseInt(sessionStorage.counter);
		sessionCount++;
		sessionStorage.setItem('counter', sessionCount);
		var localCount = parseInt(localStorage.counter);
		localCount++;
		localStorage.setItem('counter', localCount);

	document.getElementById('name').innerHTML = 'Greetings, master ' + localStorage.name;
	document.getElementById('sessionCounter').innerHTML = sessionStorage.counter;
	document.getElementById('localCounter').innerHTML = localStorage.counter;
	document.getElementById('clear').addEventListener('click', 
		function  (ev) {
			localStorage.clear();
		}
	);


})();