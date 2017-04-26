/*Angular Modules take a name, best practice is lowerCamelCase, and a list of dependancies*/
/*added the second m odule as a dependancy */

angular.module('mainApp', ['eventModule'])
.config([function (){
	/* Configuration is where you configure providers and NOT instances*/
	console.log("Main App::Configuration hook");
}])
.run([function () {
	/*Run is when the app gets kicked off*/
    console.log("Main App::Run hook");/*notice there is no semi-colon until here!confusing....*/

}]).controller("HelloController", function($scope) {
            $scope.helloTo = {};
            $scope.helloTo.title = "AngularJS";
         });