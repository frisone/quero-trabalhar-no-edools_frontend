app.factory('issues', ['$http', function($http) {
  return $http.get('https://api.github.com/repos/mojombo/grit/issues')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
