angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;
		});
	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}])
	.controller('PageController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/pages.json').success(function(data){
			$scope.page = data[$routeParams.id];
		});
	}]);