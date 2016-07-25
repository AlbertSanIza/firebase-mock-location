//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
.controller('mainCtrl', function($scope, $firebaseObject, $firebaseArray) {
  var ref = new Firebase("https://ucansee.firebaseio.com/mock");
  var syncObject = $firebaseObject(ref);
  syncObject.$loaded(function(data) {
    $scope.mock = data;
    syncObject.$bindTo($scope, "mock");
  },
  function(error) {
    console.error("Error:", error);
  });
  $scope.getCurrentLocation = function() {
    var pos = this.getPosition();
    var lat = parseFloat(pos.lat());
    var lon = parseFloat(pos.lng());
    lat = Number(lat.toFixed(6));
    lon = Number(lon.toFixed(6));
    $scope.mock.lat = lat;
    $scope.mock.lon = lon;
  };
})
//------------------------------------------------------------------------------
