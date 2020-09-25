'use strict';

/**
 * @ngdoc function
 * @name tasksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tasksApp
 */
angular.module('tasksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.taskDescription;
    $scope.taskList = [{}];
    $scope.numberOfTask = 0;
    $scope.gridOptions = {
      dataSource: {
        transport: {
          read: function(options){
            options.success($taskList)
          }
        }
      },
      columns: [{

      }]
    }
    
    $scope.add = function(){
      if($scope.taskDescription)
      $scope.taskList.push($scope.taskDescription);
      getNumberOfTasks();
    }

    $scope.active = function(){

    }

    $scope.all = function(){
      
    }

    $scope.completed = function(){
      
    }

    $scope.clear = function(){
      
    }

    function getNumberOfTasks () {
      $scope.numberOfTask = $scope.taskList.length;
    }
  });
