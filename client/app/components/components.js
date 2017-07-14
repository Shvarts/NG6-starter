import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import ItemsList from './itemsList/itemsList';

let componentModule = angular.module('app.components', [
  Home,
  About,
  ItemsList
])

.name;

export default componentModule;
