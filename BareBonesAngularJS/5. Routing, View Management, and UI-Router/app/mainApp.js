/*Angular Modules take a name, best practice is lowerCamelCase, and a list of dependancies*/
/*added the second m odule as a dependancy */

angular.module('mainApp', ['eventModule', 'ngRoute', 'ui.router'])//ngRoute provides $routeProvider to configure (it's like a singleton pattern)
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {//put routing usually in mainApp

        console.log("Main App RouteProvider:: " + $routeProvider);
        console.log("Main App LocationProvider:: " + $locationProvider);//$locationProvider is used for pretty URLs
        $routeProvider.
            when('/contact', {//when the url is /contact go to this template and use this controller
                templateUrl: 'contact.html',//here's the view
                controller: 'ContactCtrl'//here's the controller and in controller you get the model
            }).
            when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });

        //$locationProvider.htmlMode{{enabled: true} }
    }])
    /*config with ui router instead
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {//put routing usually in mainApp

        console.log("Main App $urlRouterProvider:: " + $routeProvider);
        console.log("Main App $stateProvider:: " + $locationProvider);//$locationProvider is used for pretty URLs
        $routeProvider
            .state("home", {
                url: "/home",
                templateUrl: 'home.html'
            })
            .state("contact", {
                url: "/contact",
                templateUrl: 'contact.html'
            })

        $urlRouterProvider.when('', '/home');
}])
    */
.run([function () {
	/*Run is when the app gets kicked off*/
    console.log("Main App::Run hook");/*notice there is no semi-colon until here!confusing....*/

}]).controller("HelloController", function($scope) {
            $scope.helloTo = {};
            $scope.helloTo.title = "AngularJS";
         });
