import angular from 'angular';
import alertMessageComponent from './alert-message.component';

let alertMessage = angular.module('alertMessage', [])

  .component('alertMessage', alertMessageComponent)

  .name;

export default alertMessage;
