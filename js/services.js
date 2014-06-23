'use strict';

/* Services */

var itemcatServices = angular.module('itemcatServices', ['ngResource']);

itemcatServices.factory('Item', ['$resource',
  function($resource){
    return $resource('items/:itemId.json', {}, {
      query: {method:'POST', params:{itemId:'items'}, isArray:true}
    });
  }]);
