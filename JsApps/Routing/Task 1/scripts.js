var app = app || {};

(function(){
    var selector = '#output';
    app.router = Sammy('#main', function  () {
        this.get('#/', function() {
                $(selector).html('Home');
            });

        this.get('#/Sam', function  () {
            $(selector).html('Hello, Sam');
        });

        this.get('#/Bob', function  () {
            $(selector).html('Hello, Bob');
        });
    });

    app.router.run('#/');
}());
