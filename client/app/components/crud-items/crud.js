import angular from 'angular';
import uiRouter from 'angular-ui-router';
import crudComponent from './crud.component';

let createModule = angular.module('create', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('create', {
        url: '/create',
        component: 'crud'
      });
  })

  .component('crud', crudComponent)

  .name;

export default createModule;
