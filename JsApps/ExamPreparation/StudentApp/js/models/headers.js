var app = app || {};

(function(){
    function Headers(applicationId, restAPIKey){
        this.appID = applicationId;
        this.restAPIKey = restAPIKey;
    }

    Headers.prototype.getHeaders = function() {
        var headers = {
            'X-Parse-API-Key': this.restAPIKey,
            'X-Parse-Application-Id': this.appID
        };

        if (sessionStorage['logged-in']) {
            headers['X-Parse-Session-Token'] = sessionStorage['logged-in'];
        }

    };
}());