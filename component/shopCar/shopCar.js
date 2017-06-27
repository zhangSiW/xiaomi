/**
 * Created by YZTC on 2017/6/22.
 */
angular.module('shopCarModule',[])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/shopCar',{
            templateUrl:'component/shopCar/shopCar.html'
        })
}])