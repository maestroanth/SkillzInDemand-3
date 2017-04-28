/*Angular Modules take a name, best practice is lowerCamelCase, and a list of dependancies*/
/*added the second m odule as a dependancy */

angular.module('mainApp', /*,'ngRoute',*/ ['eventModule'])
.config([function (){
	/* Configuration is where you configure providers and NOT instances*/
    console.log("Main App::Configuration hook");
        /*config with ui router instead
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {//put routing usually in mainApp

        console.log("Main App $urlRouterProvider:: " + $routeProvider);
        console.log("Main App $stateProvider:: " + $locationProvider);//$locationProvider is used for pretty URLs
        $routeProvider  //notice how the provider can now be further configured.
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
}])
.run([function () {
	/*Run is when the app gets kicked off*/
    console.log("Main App::Run hook");/*notice there is no semi-colon until here!confusing....*/

    }])
    .factory('Bitches', ['$http', function ($http) {
        return {
            get: function (callback) {
                $http.get('app/data/bitches.json').success(function (data) {
                    callback(data);
                });
            }
        };
    }]).controller("HelloController", function ($scope) {
            $scope.helloTo = {};
            $scope.helloTo.title = "AngularJS";
         });
