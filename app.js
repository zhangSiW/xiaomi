angular.module('axf',['ngRoute','angularCSS','homeModule','categoryModule','shopCarModule','mineModule'])
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .otherwise({redirectTo:'/home'});
    }])
.controller('myCtrl',function ($scope) {
    $scope.arrState = [true,false,false,false];
    $scope.change = function (num) {
        for (var i = 0; i < $scope.arrState.length;i++){
            if(num == i){
                $scope.arrState[i] = true;
            }else {
                $scope.arrState[i] = false;
            }
        }
    }
});






document.documentElement.style.fontSize = innerWidth/32+'px';
window.onResize = function(){
    document.documentElement.style.fontSize = innerWidth/32+'px';
};