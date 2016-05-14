angular.module('editableApp', [])
.controller('appCtrl', function($scope, $compile) {
	var counter = 0;
	$scope.edit = {
		contents: []
	};
	$scope.append = function() {
		$scope.edit.contents.push({
			div: counter++
		});
		var addedEdit = $compile('<div new-edit></div>')($scope);
		document.getElementById('content');
	};
	$scope.delete = function(content) {
		$scope.edit.contents.splice($scope.edit.contents.indexOf(content), 1);
		document.getElementById('content');
	}
})
.directive('makeEditable', function() {
	return {
		restrict: 'AE',
		transclude: true,
		templateUrl: 'make-editable.html',
		scope: true,
	}
});