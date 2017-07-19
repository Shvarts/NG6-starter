import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Departments from './departments/departments';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Departments
])

.name;

export default componentModule;
