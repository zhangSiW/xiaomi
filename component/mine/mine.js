/**
 * Created by YZTC on 2017/6/22.
 */
angular.module('mineModule',[])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when("/mine",{
            templateUrl:'component/mine/mine.html'
        })

}])