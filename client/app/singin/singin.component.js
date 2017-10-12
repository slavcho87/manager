import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './singin.routes';

export class SingInController {

  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    console.log('Esto es una prueba');
  }

}

export default angular.module('developmentApp.singin', [ngRoute])
  .config(routing)
  .component('singin', {
    template: require('./singin.html'),
    controller: SingInController
  })
  .name;
