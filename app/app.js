'use strict';


angular.module('workoutApp', ['ui.router', 'firebase', 'ngAnimate', 'ui.materialize', 'ui.bootstrap'])
  .constant('firebaseUrl', 'https://gym-hero.firebaseio.com/')

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider

    //SignIn view
    .state('signIn', {
      url: '/signIn',
      templateUrl: 'app/states/signIn.html'
    })
    .state('newUser', {
      url: '/newUser',
      templateUrl: 'app/states/newUser.html',
      controller: 'newUserCtrl as user'
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/states/home.html'
    })
    .state('createWorkout', {
      url: '/createWorkout',
      templateUrl: 'app/states/createWorkout.html',
    })
      .state('createWorkout.chooseMuscleGroup', {
        url: '/chooseMuscleGroup',
        templateUrl: 'app/states/chooseMuscleGroup.html',
        controller: 'MoveCtrl as move'
      })
      .state('createWorkout.addMovement', {
        url:'/addMovement',
        templateUrl: 'app/states/addMovement.html',
        controller: 'MoveCtrl as move',
        params: {
          muscles: {}
        }
      })
    .state('previousWorkout', {
      url: '/previousWorkout',
      templateUrl: 'app/states/previousWorkout.html',
    })
    .state('previousWorkout.workout-list', {
      url: '/workout-list',
      templateUrl: 'app/states/workout-list.html',
      // controller: 'HistoryCtrl as history'
        controller: 'MoveCtrl as move',

    })
    .state('records', {
      url: '/records',
      templateUrl: 'app/states/records.html',
      controller: 'MoveCtrl as move',
    })
  })
