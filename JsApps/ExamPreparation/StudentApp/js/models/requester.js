var app = app || {};

(function(){
    app.requester = (function(){
        function Requester () {
        }

        Requester.prototype.get = function(url, headers) {
            return makeRequest('GET', headers, url);
        };

        function makeRequest (method, headers, url, data) {
            var deferred = Q.defer();

            $.ajax({
                method: method,
                headers: headers,
                url: url,
                'Content-Type': 'application/json',
                data : JSON.stringify(data),
                success: function  (data) {
                    deferred.resolve(data);
                },
                error: function  (error) {
                    deferred.reject(error);
                }
            });

            return deffered.promise;
        }

        return {
            load: function(){
                return new Requester();
            }
        };
    }());

}());