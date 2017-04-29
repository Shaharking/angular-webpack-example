routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./views/home.view.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });

  $urlRouterProvider.otherwise('/');
}