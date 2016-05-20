angular.module('editableApp', [])
.controller('appCtrl', function($scope) {

	$scope.items = [];
	
	$scope.append = function() {
		$scope.items.push({
			title: "Hello",
			contents: "Lorem ipsum..."
		});
	};

	$scope.append();

	$scope.delete = function(index) {
		$scope.items = $scope.items.slice(0,index).concat($scope.items.slice(index+1));
	};
})
.directive('makeEditable', function() {
	return {
		restrict: 'AE',
		transclude: true,
		templateUrl: 'make-editable.html',
		scope: false,
	}
});