angular.module('categoryModule',[])
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/category',{
                templateUrl:'component/category/category.html',
                controller:'categoryCtrl',
                css:'component/category/category.css'
            })
    }])
    .controller('categoryCtrl',['$scope','$http',function ($scope,$http) {
        $http.get('json/category.json').then(function (res) {
            // console.log(res.data.data.categories);
            // console.log(res.data.data.products);
            $scope.orderStyle='';
            $scope.liObj=res.data.data.categories;
            $scope.data=res.data.data.products[104747];
            $scope.kind=res.data.data.categories[0].cids;
            $scope.name='全部分类';
            $scope.sortName='综合排序';
            $scope.liArr=[];
            for (var i = 0; i < $scope.liObj.length; i++) {
                if(i==0){
                    $scope.liArr[i]=true;
                }else{
                    $scope.liArr[i]=false;
                }
            }
            $scope.judge=function () {
                return true;
            }
            $scope.initData=function(id,index) {
                $scope.orderStyle='';
                $scope.sortName='综合排序';
                $scope.name='全部分类';
                $scope.judge=function () {
                    return true;
                }
                for (var j = 0; j < $scope.liObj.length; j++) {
                    if(j==index){
                        $scope.liArr[j]=true;
                    }else{
                        $scope.liArr[j]=false;
                    }

                }
                $scope.data=res.data.data.products[id];
                $scope.kind=res.data.data.categories[index].cids;
                if($scope.modState==true||$scope.sortState==true||$scope.allState==true){
                    $scope.modState=false;
                    $scope.sortState=false;
                    $scope.allState=false;
                }
            }
            $scope.modState=false;
            $scope.allState=false;
            $scope.sortState=false;
            $scope.show=function () {
                $scope.modState=true;
                $scope.allState=true;
                $scope.sortState=false;
            };
            $scope.hideSort=function (name) {
                $scope.modState=false;
                $scope.allState=false;
                $scope.sortState=false;
                $scope.sortName=name;
            };
            $scope.sortShow=function () {
                $scope.sortState=true;
                $scope.modState=true;
                $scope.allState=false;
            }
            $scope.allKind=function (index,name) {
                $scope.name=name;
                $scope.aaa=$scope.kind[index].id;
                $scope.bbb=$scope.kind[index].name;
                $scope.modState=false;
                $scope.sortState=false;
                $scope.allState=!$scope.allState;
               $scope.judge=function (item) {
                   if(index==0){
                       return true;
                   }else{
                       return item.cids[$scope.aaa]==$scope.bbb;
                   }
               }
            }
        })

    }])
