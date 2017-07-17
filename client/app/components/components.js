import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Signup from './signup/signup';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Signup
])

.name;

export default componentModule;
