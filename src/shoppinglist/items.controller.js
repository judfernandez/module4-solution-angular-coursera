(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var itemDetail = this;
    itemDetail.categoryName = items.category.name;
    itemDetail.categoryShortName = items.category.short_name;
    itemDetail.categorySpecialInstructions = items.category.special_instructions;
    itemDetail.itemsForCategory = items.menu_items;
  }

})();
