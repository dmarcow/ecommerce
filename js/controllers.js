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
      //console.log('>>>>>',item.images[0]);
      //$scope.mainImageUrl = item.images[0];
      //$scope.img = 'hola';
    });
    $scope.setImage = function(imageUrl) {
      console.log('<<<<<<',imageUrl);
      //$scope.mainImageUrl = imageUrl;
    }
  }
]);

ecommerceControllers.controller('CarouselCtrl', ['$scope',
  function($scope) {
    $scope.myInterval = 5000;
    $scope.slides = [
      {
        'id': 1,
        'image': 'http://placekitten.com/1600/600',
        'text': 'Fast just got faster with Nexus S.'
      },
      {
        'id': 2,
        'image': 'http://placekitten.com/1600/600',
        'text': 'The Next, Next Generation tablet.'
      },
      {
        'id': 3,
        'image': 'http://placekitten.com/1600/600',
        'text': 'The Next, Next Generation tablet.'
      }
    ];
  }
]);

ecommerceControllers.controller('ThumbnailCtrl', ['$scope',
  function($scope) {
    $scope.thumbs = [
      {
        'id': 1,
        'image': 'http://placekitten.com/320/240',
        'text': 'Fast just got faster with Nexus S.'
      },
      {
        'id': 2,
        'image': 'http://placekitten.com/320/240',
        'text': 'The Next, Next Generation tablet.'
      },
      {
        'id': 3,
        'image': 'http://placekitten.com/320/240',
        'text': 'The Next, Next Generation tablet.'
      }
    ];
  }
]);

ecommerceControllers.controller('NavCtrl', ['$scope', '$location',
  function($scope, $location) {   
    $scope.navs = [
      {
        'id'    : 1,
        'href'  : '#/home',
        'text'  : 'Home'
      },
      {
        'id'    : 2,
        'href'  : '#/items',
        'text'  : 'Items'
      },
      {
        'id'    : 3,
        'href'  : '#/contact',
        'text'  : 'Contact'
      }
    ];
    $scope.navClass = function(page) {
        var currentRoute = $location.path().substring(1);
        return page.split('#/')[1] === currentRoute || currentRoute.search(page.split('#/')[1]) === 0 ? 'active' : '';
    };
    /*$scope.changeState = function() {
      console.log($scope.navs[this.nav.id].state, this.nav.id);
      $scope.navs[2].state = 'active';
      //$scope.state = 'desavtive';
      //this.nav.$parent.state = 'active';
      //console.log(this.nav.id);
      //$scope.$parent.state = 'active';      
    }*/
  }
]);


