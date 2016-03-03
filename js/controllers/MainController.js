app.controller('MainController', ['$scope', 'repository', 'issues', function($scope, repository, issues) {
  repository.success(function(data) {
    $scope.repositories = data;
  });
}]);
