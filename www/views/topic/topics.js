angular.module('starter.controllers')

.controller('TopicsCtrl', function($scope, $rootScope, $log, $timeout, $ionicSideMenuDelegate){
    $log.log('here i am');
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.items = ['列表1', '列表2', '列表3', '列表4'];
  })
