(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })

      // Premade list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categories.template.html',
        controller: 'CategoriesController as categories',
        resolve: {
          categoryItems: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getCategories();
          }]
        }
      })

      .state('itemDetail', {
        url: '/items/{categoryName}',
        templateUrl: 'src/menuapp/templates/items.template.html',
        controller: "ItemsController as itemDetail",
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getItems($stateProvider.categoryName);
          }]
        }
      });

  }

})();
