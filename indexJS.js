	  var app = angular.module('myApp', []);
	  app.controller('myController', function($scope){
	  $scope.produce = ['Apple', 'Pear', 'Orange', 'Banana'];
	  $scope.submitNumber = function(itemTemp){
		  $scope.produce.push(itemTemp);
		  $scope.addToList="";
	  }
	  });
	  
