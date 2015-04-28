var app = app || {};
app.models = (function  () {
	function Models (baseUrl) {
		this.baseUrl = baseUrl;
		this.students = new Students(this.baseUrl);
	}

	var Requester = (function  () {

		function makeRequest (method, url, data, success, error) {
			$.ajax({
				method: method,
				headers: {
					'X-Parse-Application-Id' : 'usNx2pioY9A0hHu4qlUuUiTyBDS8OWyrwYj6XGsh',
					'X-Parse-REST-API-Key'  : '9y0eiOOwDl6UhZHYyMfr1vym2hl32vAKQdzonjI9'
				},
				url: url,
				contentType: 'application/json',
				data: JSON.stringify(data),
				success: success,
				error: error

			});
		}

		function getRequest (url, success, error) {
			makeRequest('GET', url, null, success, error);
		}

		function postRequest(url, data, success, error){
			makeRequest('POST', url, data, success, error);
		}

		function deleteRequest (url, success, error) {
			makeRequest('DELETE', url, null, success, error);
		}

		return{
			getRequest : getRequest,
			postRequest: postRequest,
			deleteRequest: deleteRequest
		};
	})();

	var Students = (function (){
		function Students (baseUrl) {
			this.serviceUrl = baseUrl + 'Student/';
		}

		Students.prototype.getAllStudents = function (success, error){
			return Requester.getRequest(this.serviceUrl, success, error);
		};

		Students.prototype.postStudent = function(student, success, error){
			return Requester.postRequest(this.serviceUrl, student, success, error);
		};

		Students.prototype.deleteStudent = function(id, success, error) {
			return Requester.deleteRequest(this.serviceUrl + id, success, error);
		};

		return Students;
	})();
	return{
		loadModels: function(baseUrl) {
			return new Models(baseUrl);
		}
	};
})();