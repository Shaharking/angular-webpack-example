import angular from 'angular';
import uirouter from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.css'
import './style/app.css';

import routing from './app.config';

import WeatherService from './services/weather.service'

import HomeController from './controllers/home.controller'

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter,WeatherService])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .controller('HomeController', HomeController);

export default MODULE_NAME;