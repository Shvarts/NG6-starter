import angular from 'angular';
import uiRouter from 'angular-ui-router';
import departmentsComponent from './departments.component';

let departmentsModule = angular.module('departments', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('departments', {
        url: '/departments',
        component: 'departments'
      });
  })

  .component('departments', departmentsComponent)

  .name;

export default departmentsModule;
