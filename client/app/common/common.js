import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import AppHeader from './appHeader/appHeader';
import AppFooter from './appFooter/appFooter';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  AppHeader,
  AppFooter
])
.name;

export default commonModule;
