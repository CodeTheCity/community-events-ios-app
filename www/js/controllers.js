angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $http) {
 $http.get('http://local.volunteer.com/v1/community-events').then(function(resp) {
    console.log('Success', resp);

    $scope.events = resp.data;
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
})
