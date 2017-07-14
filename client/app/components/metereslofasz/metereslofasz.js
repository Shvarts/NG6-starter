import angular from 'angular';
import uiRouter from 'angular-ui-router';
import metereslofaszComponent from './metereslofasz.component';

let metereslofaszModule = angular.module('metereslofasz', [
  uiRouter
])

.component('metereslofasz', metereslofaszComponent)

.name;

export default metereslofaszModule;
