import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Search from './search/search'

let componentModule = angular.module('app.components', [
  Home,
  About,
  Search
])

.name;

export default componentModule;
