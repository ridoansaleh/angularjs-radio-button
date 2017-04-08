(function(){
	"use strict";

	angular.module("App", [])
	.controller("appController", appController);

	appController.$inject = ['$scope'];
	function appController($scope){
		var ctrl = $scope;	

		ctrl.tab = {
			name: "tab1"
		};
		
		ctrl.changeTab = function(tabName){
			ctrl.tab.name = tabName;
		};
	}

})();
