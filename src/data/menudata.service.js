(function () {
  'use strict';

  angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");


  MenuDataService.$inject = ['$http', 'ApiBasePath', '$q', '$timeout'];
  function MenuDataService($http, ApiBasePath, $q, $timeout) {
    var service = this;

    service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
      return response;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      });
      return response;
    }

    service.getCategories = function () {
      var deferred = $q.defer();
      var categoriesPromise = service.getAllCategories();
      var categoryItems = [];

      categoriesPromise.then(function (response) {
        categoryItems = response.data;
      })
        .catch(function (error) {
          categoryItems = [];
        })
      // Wait 2 seconds before returning
      $timeout(function () {

        deferred.resolve(categoryItems);
      }, 800);

      return deferred.promise;
    };


    service.getItems = function () {
      var deferred = $q.defer();
      var categoryShortName = 'A';
      var itemsPromise = service.getItemsForCategory(categoryShortName);
      var itemList = [];

      itemsPromise.then(function (response) {
        itemList = response.data;
      })
        .catch(function (error) {
          itemList = [];
        })
      // Wait 2 seconds before returning
      $timeout(function () {

        deferred.resolve(itemList);
      }, 800);

      return deferred.promise;
    };

  }
})();
