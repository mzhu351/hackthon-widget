!function(){"use strict";function t(t,o){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),o.otherwise("/")}angular.module("dynaPop",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ui.bootstrap"]).config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function t(t,o){for(var n=[],e=1;o>=e;e++){var a=t>=e?"fa-star":"fa-star-o";n.push(a)}return n}function o(){var o=this;o.max||(o.max=5),o.toggle=function(n){o.ratingValue=n+1,o.stars=t(o.ratingValue,o.max)},o.$onInit=function(){o.stars=t(o.ratingValue,o.max)}}var n=angular.module("dynaPop");n.component("topicRating",{templateUrl:"app/components/pop-widget/topic-list/topic-rating/topic-rating.component.html",bindings:{ratingValue:"=ngModel",max:"=?"},controllerAs:"model",controller:[o]})}(),function(){"use strict";function t(){var t=this;t.buttonLabel="Send Message"}var o=angular.module("dynaPop");o.component("widgetFooter",{templateUrl:"app/components/pop-widget/widget-footer/widget-footer.component.html",controllerAs:"model",controller:[t],bindings:{}})}(),function(){"use strict";function t(t){return t.get("./topics.json").then(function(t){return t.data})}function o(o,n){var e=this;e.topics=[],e.title="Popular Topics",e.$onInit=function(){t(o).then(function(t){console.log("onInit data",t),e.topics=t})},e.openNewTab=function(t){n.open(t,"_blank")}}var n=angular.module("dynaPop");n.component("topicList",{templateUrl:"app/components/pop-widget/topic-list/topic-list.component.html",controllerAs:"model",controller:["$http","$window",o],bindings:{}})}(),function(){"use strict";function t(){var t=this;t.detail="Topic detail"}var o=angular.module("dynaPop");o.component("topicDetail",{templateUrl:"app/components/pop-widget/topic-detail/topic-detail.component.html",controllerAs:"model",controller:[t],bindings:{}})}(),function(){"use strict";function t(){var t=this;t.msg="View Message Bot"}var o=angular.module("dynaPop");o.component("msgView",{templateUrl:"app/components/pop-widget/msg-view/msg-view.component.html",controllerAs:"model",controller:[t],bindings:{}})}(),function(){"use strict";function t(){var t=this;t.isSearchFormDisplayed=!1,t.$onInit=function(){},t.openPop=function(){t.isSearchFormDisplayed=!t.isSearchFormDisplayed}}var o=angular.module("dynaPop");o.component("popWidget",{templateUrl:"app/components/pop-widget/pop-widget.component.html",controllerAs:"model",controller:[t],bindings:{}})}(),function(){"use strict";function t(){var t=this;t.date=new Date}angular.module("dynaPop").controller("NavbarController",t)}(),function(){"use strict";function t(){var t=this;t.awesomeThings=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}],angular.forEach(t.awesomeThings,function(t){t.rank=Math.random()})}angular.module("dynaPop").controller("MainController",t)}(),angular.module("dynaPop").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="site-content"><div class="container"><div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn btn-lg btn-success" ng-href="#">Splendid!</a></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></div></div></div><pop-widget></pop-widget>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarController as navbar"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ navbar.date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>'),t.put("app/components/pop-widget/pop-widget.component.html",'<div id="pop-widget-wrap"><div ng-show="model.isSearchFormDisplayed" class="pop-content-wrap"><topic-list></topic-list><widget-footer></widget-footer></div><a id="pop-button" href="javascript:void(0)" ng-click="model.openPop()"><i class="fa fa-3x fa fa-android" ng-class="{\'fa-rotate-180\': model.isSearchFormDisplayed }" aria-hidden="true"></i></a></div>'),t.put("app/components/pop-widget/msg-view/msg-view.component.html","<h1>View Message Bot{{model.msg}}</h1>"),t.put("app/components/pop-widget/topic-detail/topic-detail.component.html","<h1>View topic detail{{model.detail}}</h1>"),t.put("app/components/pop-widget/topic-list/topic-list.component.html",'<div class="top-wrap form-group"><input type="text" class="form-control" placeholder="What can we help you with?" ng-model="model.query"> <i id="filtersubmit" class="fa fa-search"></i></div><div class="widget-content"><h4 class="recom-title">{{model.title}}</h4><ul class="topic-list"><li class="row" ng-repeat="topic in model.topics | filter: model.query | limitTo: 3"><div class="col-xs-8"><a ng-click="model.openNewTab(topic.url)">{{topic.title}}</a></div><div class="col-xs-4"><topic-rating ng-model="topic.rating"></topic-rating></div></li></ul></div>'),t.put("app/components/pop-widget/widget-footer/widget-footer.component.html",'<div class="footer"><button href="#" class="btn btn-primary search-form-submit">{{model.buttonLabel}}</button></div>'),t.put("app/components/pop-widget/topic-list/topic-rating/topic-rating.component.html",'<span ng-repeat="star in model.stars track by $index" ng-click="model.toggle($index)"><i class="fa {{star}}"></i></span>')}]);