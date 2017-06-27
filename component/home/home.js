angular.module('homeModule',[])
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/home',{
                templateUrl:'component/home/home.html',
                controller:'homeCtrl',
                css:['component/home/home.css','component/home/siwper.css']
            })
    }])
.controller('homeCtrl',['$scope','$http',function ($scope,$http) {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:1000,
        // 如果需要分页器
        pagination: '.swiper-pagination'
    })
    $http.get('json/home.json').then(function (res) {
        // console.log(res.data.data.act_info[4].act_rows["0"].act_rows["0"].chead_detail.img);
        // 四个圆.data.data.act_info[4].act_rows["0"].act_rows["0"].chead_detail.img
        $scope.circleData=res.data.data.act_info[1].act_rows;
        // 六个大图
        $scope.sixImg=res.data.data.act_info[3].act_rows;
        // 商店
        $scope.storeImg=res.data.data.act_info[4].act_rows[0].act_rows[0].chead_detail.img;
        $scope.storeTwoImg=res.data.data.act_info[4].act_rows[1].act_rows;
        $scope.storeFour=res.data.data.act_info[4].act_rows[2].act_rows;
        $scope.storeTwoAdv=res.data.data.act_info[4].act_rows[3].act_rows;
        // 商品信息
        $scope.storeInfo=res.data.data.act_info[5].act_rows;
    })
}])