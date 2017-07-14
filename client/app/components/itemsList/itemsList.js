import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemsListComponent from './itemsList.component';

let itemsListModule = angular.module('itemsList', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('itemsList', {
        url: '/items-list',
        component: 'itemsList'
      });
  })

  .component('itemsList', itemsListComponent)

  .name;

export default itemsListModule;
