(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categoryItems'];
  function CategoriesController(categoryItems) {
    var categories = this;
    categories.allCategories = categoryItems;
  }

})();
