class HomeController {
  constructor(WeatherService) {
    this.name = 'World';
    this.WeatherService = WeatherService;
  }

  changeName() {
    this.WeatherService.getWeather().then(data => {
        console.log(data)
    })
    this.name = 'angular-tips';
  }
}

HomeController.$inject = ['WeatherService'];

export default HomeController