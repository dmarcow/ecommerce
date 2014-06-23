'use strict';

/* App Module */

var ecommerceApp = angular.module('ecommerceApp', [
  'ngRoute',
  'ecommerceControllers',
  'itemcatFilters',
  'itemcatServices',
  'ui.bootstrap'
]);

ecommerceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'CarouselCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html'
      }).
      when('/items', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
      }).
      when('/items/:itemId', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemDetailCtrl'
      }).
      otherwise({
        templateUrl: 'partials/home.html',
        controller: 'CarouselCtrl'
      });
  }]);
