// JavaScript source code
//$ dollar sign isn't necessarily JQuery
angular.module('eventModule', [])
    .factory('MainTitle', [function () {
        return {
            title: "Educatin' Young Ones on the How-To's of Pimping Hoes and Bitches properly" //notice how it just returns a value or result
        };
    }])
    .config([function () {
        console.log("Event Module:: config");
    }])
    .run([function () {
        console.log("Event Module:: running");
    }])
    .controller('BitchCtrl', ['$scope', '$http', 'MainTitle', function ($scope, $http, mainTitle) {
        //append properties to the scope
        $scope.title = mainTitle.title;

        //right javascript to loop through everything in menu or whatever to get from DB.
        $scope.menu = [
            {//index 0
                name: "Events",//index [0]["name"]
                href: "Controllers.html"//index [0]["href"]
            },
            {//index 1
                name: "Contact",//index [1]["name"]
                href: "contact.html"//index [1]["href"]
            }
        ]

        $scope.index = 0;
        $scope.setIndex = function (val) {
            $scope.index = val;
        }

        $scope.index = function () {
            return ($scope.index);
        }

        $scope.getData = function () {
            var scope = $scope;
            $http.get('app/data/bitches.json')//asynchonous transaction uses something called 'promises'
                .success(function (data) {
                    scope.bitches = data;
                });
        }

        $scope.getData();
        /*
        $scope.bitches = [
            {
                name: "Yaya, some chick. Who fuckeen' cares about da bitch's name already!",
                tittySize: "32D",
                description: "nice tits, busted tooth from when I smacked her, but otherwise hot",
                moneyMade: "$23,000",
                date: Date.parse("January 11 1999")
            },
            {
                name: "Chesty",
                tittySize: "168ZZZ",
                description: "Her Tits are a new guiness world record. Twice the weight of the rest of her body!",
                moneyMade: "$233,000",
                date: Date.parse("March 16 2001")
            },
            {
                name: "Tight Buns",
                tittySize: "15FF",
                description: "A true rarity this one. Huge moda' tits with a rocking small, tight ass. Oh praise the Heavenly Lord for he had to of made this one!",
                moneyMade: "$1233,000",
                date: Date.parse("August 22 2005")
            },
            {
                name: "IDK. Just some dopey chick. ",
                tittySize: "15a",
                description: "Her titties are too small for my taste, but some guys like her.",
                moneyMade: "$32.50",
                date: Date.parse("December 25 1893")
            }]
        */
    }])
    .controller('BottomBitchCtrl', ['$scope', 'MainTitle', function ($scope, mainTitle) {
        $scope.title = "bottom bitch!";
        $scope.itemTitle = mainTitle.title + " is now covering \"Bitches in NYC\"";
        $scope.description = "Bitches is a one day event that teaches kids the fine art of pimping.";
        $scope.imgSrc = "insert bottom-bitch pic here";
        $scope.date = "4/26/2017";
        this.tittysize = "HUGE!!! Baby!@!!!";
    }])
    .filter('searchBitches', function () {
        return function (bitches, search) {
            var filtered = [];
            if (!search) { return bitches; }
            angular.forEach(bitches, function (bitch) {//angular.whatevermethod has a lot of "convenient functions"

                if (angular.lowercase(bitch.tittySize).indexOf(angular.lowercase(search)) != -1) {
                    filtered.push(bitch);
                    console.log(bitch);
                }
            });



            return filtered;
        };
    })

    //directives (angular automatically translates the eventItem to event-item to keep naming conventions
    .directive('bitchLoop', function () {
        return {
            restrict: 'E', //should it be used as a: E = element, A = attribute, C = class, or M = comment?
            templateUrl: 'app/event/bitchLoop.html',//or you could write a "template: <div>Hi</div>" here
            controller: function ($scope) {//remember you can create or pass in the "controller as" scope context too
                console.log("do stuff in my directive")
            }, //Embed a custom controller in the directive
            link: function ($scope, element, attrs) {/*write some javascript here I assume*/ } //for DOM manipulation
        }
    });