import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appHeaderComponent from './appHeader.component';

let appHeaderModule = angular.module('appHeader', [
  uiRouter
])

.component('appHeader', appHeaderComponent)

.name;

export default appHeaderModule;
