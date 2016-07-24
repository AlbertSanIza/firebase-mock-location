//------------------------------------------------------------------------------
angular.module('starter.services', ['firebase'])
//------------------------------------------------------------------------------
.service("myFirebase", function($firebaseObject) {
  var ref = new Firebase("https://ucansee.firebaseio.com");
  this.data = $firebaseObject(ref);
})
//------------------------------------------------------------------------------
