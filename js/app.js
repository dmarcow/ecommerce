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
      when('/items', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
      }).
      when('/items/:itemId', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemDetailCtrl'
      }).
      when('/contact/contact1', {
        templateUrl: 'partials/contact.html'
      }).
      when('/contact/contact2', {
        templateUrl: 'partials/contact2.html'
      }).
      otherwise({
        templateUrl: 'partials/home.html',
        controller: 'CarouselCtrl'
      });
  }]);
