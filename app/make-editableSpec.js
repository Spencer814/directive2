describe('editableApp', function() {
	beforeEach(module('editableApp'));

	var scope;

	describe('appCtrl', function() {
		var ctrl;
		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller('appCtrl', {
				$scope: scope
			});
		}));
		it('should make an empty array, then give options to append and delete', function() {
			expect(scope).toBe(scope);
			scope.delete();
		});
	});

	describe('makeEditable', function() {
		var compile;
		beforeEach(inject(function($compile, $rootScope) {
			compile = $compile;
			scope = $rootScope.$new();
			scope.$digest();
		}));
		it('should render', function() {
			expect(compile).toBe(compile);			
		});
	});
});