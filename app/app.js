'use strict';


angular.module('workoutApp', ['ui.router', 'firebase', 'ngAnimate', 'ui.materialize', 'ui.bootstrap'])
  .constant('firebaseUrl', 'https://gym-hero.firebaseio.com/')

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider

    //SignIn view
    .state('signIn', {
      url: '/signIn',
      templateUrl: 'states/signIn.html'
    })
    .state('newUser', {
      url: '/newUser',
      templateUrl: 'states/newUser.html',
      controller: 'newUserCtrl as user'
    })
    .state('home', {
      url: '/',
      templateUrl: 'states/home.html'
    })
    .state('createWorkout', {
      url: '/createWorkout',
      templateUrl: 'states/createWorkout.html',
    })
      .state('createWorkout.chooseMuscleGroup', {
        url: '/chooseMuscleGroup',
        templateUrl: 'states/chooseMuscleGroup.html',
        controller: 'MoveCtrl as move'
      })
      .state('createWorkout.addMovement', {
        url:'/addMovement',
        templateUrl: 'states/addMovement.html',
        controller: 'MoveCtrl as move',
        params: {
          muscles: {}
        }
      })
    .state('previousWorkout', {
      url: '/previousWorkout',
      templateUrl: 'states/previousWorkout.html',
    })
    .state('previousWorkout.workout-list', {
      url: '/workout-list',
      templateUrl: 'states/workout-list.html',
      // controller: 'HistoryCtrl as history'
        controller: 'MoveCtrl as move',

    })
    .state('records', {
      url: '/records',
      templateUrl: 'states/records.html',
      controller: 'MoveCtrl as move',
    })
  })
