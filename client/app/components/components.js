import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Crud from './crud-items/crud';
import Login from './login/login';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Login,
  Crud
])

.name;

export default componentModule;
