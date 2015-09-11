myApp.controller('StrainsController', function ($scope, StrainFactory) {

	StrainFactory.getStrains(function (response){
		$scope.strains = response;
		console.log('logging the strains: ', $scope.strains);
		$scope.list = $scope.$parent.strains
		  $scope.config = {
		    itemsPerPage: 5,
		    fillLastPage: true
		  }

	});


	$scope.nextPage = function(){
		StrainFactory.getNext()
	}
	
});