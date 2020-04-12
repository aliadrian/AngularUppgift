let app = angular.module('fcApp', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'eventsController'
    })
    .when('/title_holders', {
        templateUrl: 'views/title_holders.html',
        controller: 'title_holdersController',
    })
    .when('/former_champions', {
        templateUrl: 'views/former_champions.html',
        controller: 'former_championsController'
    })
    .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'videosController'
    })
})

angular.module('myApp', ['ngAnimate'])
.animation('.fade', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      $(element).fadeIn(1000, function() {
        done();
      });
    },
    leave: function(element, done) {
      $(element).fadeOut(1000, function() {
        done();
      });
    }
  }
})

app.controller('former_championsController',function($scope){
    $scope.IsHidden = true;
    $scope.ShowHide = function() {
        $scope.IsHidden = $scope.IsHidden ? false : true;
    }
});

app.controller('homeController',function($scope){
    $scope.IsHidden = true;
    $scope.ShowHide = function() {
        $scope.IsHidden = $scope.IsHidden ? false : true;
    }
});

// app.controller('homeController',function($scope){
//     $scope.Enter = function() {
//         element.css('display', 'none');
//         $(element).fadeIn(1000, function() {
//           done();
//         });
//     },
//     $scope.Leave = function() {
//             $(element).fadeOut(1000, function() {
//               done();
//             });
//     }
// });

// app.controller("title_holdersController", function($scope) {
//     $scope.testamonials = [
//         { image: "/Assignment 1/images/ZHANG_WEILI_BELT.png", titleText: "WOMEN'S FLYWEIGHT", weight:"115 lb (52.27 kg)", nickname: "MAGNUM", name: "Zhang Weili", score: "19-1-0", fight: "Last fight: Jessica Andrade vs Zhang Weili" },
//         // { image: "/Assignment 1/images/SHEVCHENKO_VALENTINA_BELT.png", 
//         // /* titleText: "WOMEN'S STRAWWEIGHT", weight:"125 lb (56.82 kg)", nickname: "BULLET", name: "Valentina Shevchenko", score: "18-3-0", fight: "Last fight: Valentina Shevchenko vs Liz"*/ },
//     ]
// })

app.controller("title_holdersController", function($scope) {
    $scope.ZhangWeili = [
        { image: "/images/ZHANG_WEILI_BELT.png", titleText: "WOMEN'S FLYWEIGHT", weight:"115 lb (52.27 kg)", nickname: "\"MAGNUM\"", name: "Zhang Weili", score: "20-1-0", fight: "Last fight: Jessica Andrade vs Zhang Weili" },
    ]
    $scope.ValentinaShevchenko = [
        { image: "/images/SHEVCHENKO_VALENTINA_BELT.png", titleText: "WOMEN'S STRAWWEIGHT", weight:"125 lb (56.82 kg)", nickname: "\"BULLET\"", name: "Valentina Shevchenko", score: "19-3-0", fight: "Last fight: Valentina Shevchenko vs Katlyn", lastname:"Chookagian" },
    ]
    $scope.AmandaNunes = [
        { image: "/images/NUNES_AMANDA_2BELTS.png", titleText: "WOMEN'S BANTAMWEIGHT", weight:"135 lb (61.36 kg)", nickname: "\"THE LIONESS\"", name: "Amanda Nunes", score: "18-4-0", fight: "Last fight: Amanda Nunes vs Germaine de", lastname:"Randamie" },
    ]
})

app.controller("videosController", function($scope) {
    $scope.videoImages = [
        { image: "/images/hqdefault.png", title: "UFC Decade in Review - 2011", text: "Look back at the decade that was! We turn back the UFC clock to 2011 and remember everything from Shogun Rua vs Jon Jones at UFC 128 to Alistair Overeem vs Brock Lesnar and everything in between."},
        { image: "/images/hqdefault2.png", title: "UFC Decade in Review - 2012", text: "Look back at the decade that was! We turn back the UFC clock to 2012, the year that saw Khabib Nurmagomedov's promotional debut and one of the most memorable knockouts in history from Edson Barboza."},
        { image: "/images/hqdefault3.png", title: "UFC Decade in Review - 2013", text: "Look back at the decade that was! We turn back the UFC clock to 2013 and a new era in the promotion's history as the first ever women's champion, Ronda Rousey, arrived and became a global superstar. Also, an Irishman known as 'The Notorious' made his debut and the then-undisputed GOAT lost his crown."},
        { image: "/images/hqdefault4.png", title: "UFC Decade in Review - 2014", text: "Look back at the decade that was! We turn back the UFC clock to 2014 which included the addition of the women's flyweight division."},
        { image: "/images/hqdefault5.png", title: "UFC Decade in Review - 2015", text: "Look back at the decade that was! We turn back the UFC clock to 2015 which saw many notable new champions including Conor Mcgregor, Joanna Jedrzejczyk, and Holly Holm, just to name a few."},
        { image: "/images/hqdefault6.png", title: "UFC Decade in Review - 2016", text: "Look back at the decade that was! We turn back the UFC clock to 2016 which saw one of the most monumental moments in the promotion's history with UFC 196: McGregor vs Diaz. That was followed up by the rematch at UFC 202 later in the year."},
        { image: "/images/hqdefault7.png", title: "UFC Decade in Review - 2017", text: "Look back at the decade that was! We turn back the UFC clock to 2017, a year that saw the rise of many new stars including Rose Namajunas, Justin Gaethje and Francis Ngannou. In August of 2017 the most anticipated matchup in combat sports history went down between Conor McGregor and Floyd Mayweather."},
        { image: "/images/hqdefault8.png", title: "UFC Decade in Review - 2018", text: "Look back at the decade that was! We turn back the UFC clock to 2018 which was highlighted by the most anticipated bout in UFC history between Khabib Nurmagomedov and Conor McGregor."}
    ]
})

'use strict';

angular.module('myApp', [])
.controller('videosController', function($scope){
  $scope.user = {
    message: ''
  }
});

// app.controller("title_holdersController", function($scope) {
//  { $scope.ZhangWeili = "images/ZHANG_WEILI_BELT.png" }
//  { $scope.ValentinaShevchenko = "images/SHEVCHENKO_VALENTINA_BELT.png"}
//  { $scope.AmandaNunes = "images/NUNES_AMANDA_2BELTS.png"}
//  { $scope.flyWeight="WOMEN'S FLYWEIGHT"}
//  { $scope.strawWeight="WOMEN'S STRAWWEIGHT"}
//  { $scope.bantamWeight="WOMEN'S BANTAMWEIGHT"} 
//  { $scope.myObj = {"oferflow-wrap" : "anywhere"}
// }
// })


// DIRECTIVES = Partial Views
app.directive("fcheader", function() {
    return {
        template: '<nav class="navbar navbar-expand-xl bg-transparent fixed-top"> <a class="navbar-brand position-relative mx-auto" href="#!home"> <img src="/icons/f.svg" width="45" height="45" alt=""> </a> <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"> </span> </button> <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link pr-5 mr-lg-5" href="#!events"> EVENTS </a> </li><li class="nav-item"> <a class="nav-link pr-5 mr-lg-5" href="#!title_holders"> TITLE HOLDERS </a> </li><li class="nav-item"> <a class="nav-link pl-xl-5 ml-xl-5" href="#!former_champions"> FORMER CHAMPIONS </a> </li><li class="nav-item"> <a class="nav-link pl-xl-5 ml-xl-5" href="#!videos"> VIDEOS </a> </li></div></li></ul> </div></nav>'
    }
})

app.directive("fcfooter", function() {
    return {
        template: '<footer class="py-5 fc-footer"> <div class="row fc-row"> <div class="col-12 col-md"> <a href="#!home"> <img class="d-flex mx-auto mb-5" src="/icons/f.svg" width="45" height="45" alt=""> </a> </div><div class="col-6 col-md"> <h5>EVENTS & TICKET</h5> <ul class="list-unstyled text-small"> <li> <a class="text-muted" href="#!home">Buy Tickets</a> </li><li> <a class="text-muted" href="#!home">More Info</a> </li><li> <a class="text-muted" href="#!home">Regular</a> </li><li> <a class="text-muted" href="#!home">Premium</a> </li></ul> </div><div class="col-6 col-md"> <h5>PLAN YOUR VISIT</h5> <ul class="list-unstyled text-small"> <li> <a class="text-muted" href="#!home">Directions and Parking</a> </li><li> <a class="text-muted" href="#!home">Public Transportation</a> </li><li> <a class="text-muted" href="#!home">Concessions</a> </li><li> <a class="text-muted" href="#!home">Accesibility Guide</a> </li></ul> </div><div class="col-6 col-md"> <h5>ARENA INFO</h5> <ul class="list-unstyled text-small"> <li> <a class="text-muted" href="#!home">About us</a></li><li><a class="text-muted" href="#!home">Conditions of sale</a> </li><li> <a class="text-muted" href="#!home">Green Initiatives</a></li><li><a class="text-muted" href="#!home">Business Ventures</a> </li></ul> </div><div class="col-6 col-md"> <h5>LEGAL</h5> <ul class="list-unstyled text-small"> <li> <a class="text-muted" href="#!home">Terms</a></li><li><a class="text-muted" href="#!home">Privacy Policy</a> </li><li> <a class="text-muted" href="#!home">Ad Choices</a> </li></ul> </div></div></footer>'
    }
})