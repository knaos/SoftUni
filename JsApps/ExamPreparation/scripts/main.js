var app = app || {};

(function  () {
	var model = app.models.loadModels('https://api.parse.com/1/classes/');
	model.students.getAllStudents();
	var viewModel = app.viewModel.loadViewModel(model);
	viewModel.showAllStudents();
})();
