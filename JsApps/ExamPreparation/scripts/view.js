var app = app || {};

app.viewModel = (function(){
	function ViewModel (model) {
		this.model = model;
		this.attachEventListeners(this);
	}

	ViewModel.prototype.showAllStudents = function() {
		var _this = this;
		this.model.students.getAllStudents(
			function  (studentsData) {
				studentsData.results.forEach(function(student){
					_this.addStudentToDom(student.name, student.grade, student.objectId);
				});
			});
	};

	ViewModel.prototype.addStudentToDom = function addStudentToDom (studentName, studentGrade, studentId) {
		var studentWrapper = $('<div />').addClass('student-list');
		studentWrapper.attr('data-id', studentId);
		var studentName  = $('<p>').text(studentName);
		var studentGrade = $('<p>').text(studentGrade);
		var deleteButton = $('<button class="delete-student">Delete</button>');
		var _this        = this;
		deleteButton.click(function(){

			_this.deleteStudent(studentId);
		});


		studentWrapper
			.append(studentName)
			.append(studentGrade)
			.append(deleteButton);
		$('#students-list').append(studentWrapper);
	};

	ViewModel.prototype.addStudent = function(viewModel) {
		var studentName = $('#student-name').val();
		var studentGrade = Number($('#student-grade').val());

		viewModel.model.students.postStudent(
			{name: studentName, grade: studentGrade},
			function(studentData){
			ViewModel.prototype.addStudentToDom(studentName, studentGrade, studentData.objectId);
			},
			function(error){
				console.log(error.responseText);
			}
		);

	};

	ViewModel.prototype.deleteStudent = function(studentId) {
		this.model.students.deleteStudent(studentId,
			function(data){
				$('#students-list').
					find('[data-id=' + studentId +']').
					remove();
			},
			function(error){
				console.log(error.responseText);
			});
	};

	ViewModel.prototype.attachEventListeners = function(viewModel) {
		$('#add-student-button').click(function(){
			viewModel.addStudent(viewModel);
		});
	};

	return{
		loadViewModel: function (model){
			return new ViewModel(model);
		}
	};
})();
