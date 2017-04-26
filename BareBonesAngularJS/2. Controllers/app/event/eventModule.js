// JavaScript source code
//$ dollar sign isn't necessarily JQuery
angular.module('eventModule', [])
    .factory('MainTitle', [function () {
        return {
            title: "Educatin' Young Ones on the How-To's of Pimping Hoes and Bitches properly"
        };
    }])
    .config([function () {
        console.log("Event Module:: config");
    }])
    .run([function () {
        console.log("Event Module:: running");
    }])
    .controller('BitchCtrl', ['$scope', 'MainTitle', function ($scope, mainTitle) {
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

    }])
    .controller('BottomBitchCtrl', ['$scope', 'MainTitle', function ($scope,mainTitle) {
        $scope.title = "bottom bitch!";
        $scope.itemTitle = mainTitle.title+" is now covering \"Bitches in NYC\"";
        $scope.description = "Bitches is a one day event that teaches kids the fine art of pimping.";
        $scope.imgSrc = "insert bottom-bitch pic here";
        $scope.date = "4/26/2017";
        this.tittysize = "HUGE!!! Baby!@!!!";
    }])