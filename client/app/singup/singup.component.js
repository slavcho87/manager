import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './singup.routes';

export class SingUpController {

  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    console.log('Esto es una prueba');
  }

}

export default angular.module('developmentApp.singup', [ngRoute])
  .config(routing)
  .component('singup', {
    template: require('./singup.html'),
    controller: SingUpController
  })
  .name;
