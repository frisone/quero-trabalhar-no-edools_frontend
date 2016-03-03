app.factory('repository', ['$http', function($http) {
  return $http.get('https://api.github.com/repositories')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
