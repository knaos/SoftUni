var poppy = (function  () {

	function pop(type, title, message, callback) {

	    var popup;

	    switch (type) {
	        case 'success': 
	        	popup = new popupModule.Success(type, title, message);
	        	break;

	        case 'info': 
	        	popup = new popupModule.Info(type, title, message);
	        	break;

	        case 'warning': 
	        	popup = new popupModule.Warning(type, title, message, callback);
	        	break;

	        case 'error': 
	        	popup = new popupModule.ErrorPopup(type, title, message);
	        	break;
	        
	        default:
	         	break;
	    }
		
		// generate view from view factory
	    var view = createPopupView(popup);



	    processPopup(view, popup);
	}

	function processPopup(domView, popup) {

	    //Close button
		 
	    if (popup._popupData.type == 'info') {
	    	domView.querySelector('.poppy-close-button').addEventListener('click', closePoppup, false);
	    }

	    if (popup._popupData.type == 'warning') {
	    	domView.addEventListener('click', function  () {
	    		popup._popupData.callback();
	    	}, false);
	    }

		var autoHide = popup._popupData.autoHide;
		//For better fade in, here we set oppacity to zero
		domView.style.opacity = 0;
		document.body.appendChild(domView);

		fadeIn(domView, 10);

			if (autoHide) {

				var timeout = popup._popupData.timeout;
				setTimeout(function(){
					fadeOut(domView);
				}, timeout);
			}
	}

	function closePoppup (event) {
		fadeOut(event.target.parentNode.parentElement);
		// event.target.parentNode.parentElement.style.display = 'none';
	}

	/*Fade in function
		-element - hte DOM element
		-time, the time to fade in in mileseconds
	*/
	function fadeIn (element, time){
		var op = 0.1;

		var timer = setInterval(function  () {
			if (op >= 1) {
				clearInterval(timer);
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ')';
			op += op * 0.1;

		} ,time);

	}

	/*Fade out*/
	function fadeOut (element, time) {
		var op = 1;
		if (time) {
			time = 10;
		}

		var timer = setInterval(function  () {
			if (op < 0.1) {
				element.style.display = 'none';
				clearInterval(timer);
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' - op * 100 + ')';
			op -= op * 0.1;
		},time);
	}

	return{
		pop:pop
	};

})(); 




poppy.pop('warning', 'Attention!', 'You are our 100th visitor.', redirect);

function redirect() {
   window.location = 'https://www.youtube.com/watch?v=HMUDVMiITOU';
}




