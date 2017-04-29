import angular from 'angular'

class weather {

  constructor($http) {
    this.$http = $http;
  }

  getWeather () {
      return this.$http.get('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=appidbassaasda');
  }
}

weather.$inject = ['$http']; 

export default angular.module('services.weather', [])
  .service('WeatherService', weather)
  .name;
