Object.prototype.extends = function  (parent) {
	this.prototype = Object.create(parent.prototype);
	this.prototype.constructor = this;
};

var popupModule = (function  () {

	function Popup (type, title, message) {
		this._popupData = {
			type: type,
			message: message,
			title: title
		};
	}

	//Extends Popup
	Success.extends(Popup);
	function Success (type, title, message) {
		
		Popup.call(this, type, title, message);

		this._popupData.position = 'bottomLeft';
	}

	Info.extends(Popup);
	function Info (type, title, message) {
		
		var TIMEOUT = 5000;

		Popup.call(this, type, title, message);
		this._popupData.position = 'topLeft';
		this._popupData.timeout = TIMEOUT;
		this._popupData.autoHide = true;
		this._popupData.closeButton = true;
	}

	//Extends Popup
	ErrorPopup.extends(Popup);

	function ErrorPopup (type, title, message) {
		
		var TIMEOUT = 5000;

		Popup.call(this, type, title, message);

		this._popupData.position = 'topRight';
		this._popupData.timeout = TIMEOUT;
		this._popupData.autoHide = true;
	}

	//Extends Popup
	Warning.extends(Popup);
	function Warning (type, title, message, callbackFun) {
		
		Popup.call(this, type, title, message);

		this._popupData.position = 'bottomRight';
		this._popupData.callback = callbackFun;
	}


	return{
		Success: Success,
		Warning: Warning,
		ErrorPopup: ErrorPopup,
		Info: Info
		};

})();

