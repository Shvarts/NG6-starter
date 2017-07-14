import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Alert from './alert-message/alert-message';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Alert
])

.name;

export default commonModule;
