'use strict';

/* Controllers */

var ecommerceControllers = angular.module('ecommerceControllers', []);

ecommerceControllers.controller('ItemListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('items/items.json').success(function(data) {
      $scope.items = data;
    });
    $scope.orderProp = 'age';
  }
]);

/*ecommerceControllers.controller('ItemDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    console.log($routeParams.itemId);
    $http.get('items/' + $routeParams.itemId + '.json').success(function(data) {
      $scope.item = data;
    });
  }
]);*/

ecommerceControllers.controller('ItemDetailCtrl', ['$scope', '$routeParams', 'Item',
  function($scope, $routeParams, Item) {
    $scope.item = Item.get({itemId: $routeParams.itemId}, function(item) {
      $scope.item = item;
      $scope.mainImageUrl = item.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }
]);

ecommerceControllers.controller('CarouselCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('items/carousel.home.json').success(function(data) {
      $scope.slides = data;
    });
  }
]);

ecommerceControllers.controller('ThumbnailCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('items/thumbnails.home.json').success(function(data) {
      $scope.thumbs = data;
    });
  }
]);

ecommerceControllers.controller('NavCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $http.get('items/navbar.json').success(function(data) {
      $scope.navs = data;
    });
    $scope.navClass = function(page) {
      var currentRoute = $location.path().substring(1);
      //console.log( page , currentRoute );
      return page.split('#/')[1] === currentRoute || currentRoute.search(page.split('#/')[1]) === 0 ? 'active' : '';
    };
  }
]);



