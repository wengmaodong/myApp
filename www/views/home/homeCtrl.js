angular.module('starter.controllers', [])
    .controller('homeCtrl', ['$state', function ($state) {
        
        console.log('getHomeCtrl');
        $state.go('tab.my')
    }])