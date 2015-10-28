// 'use strict';
//
// angular.module('workoutApp')
//
//   .directive('ratings', function () {
//     $scope.rating = 5;
//     return {
//       restrict: 'A',
//       template: '<ul class="rating">' +
//                   '<li ng-repeat="star in stars" ng-class="star" ng-click="toogle($index)">' +
//                     '\u2605' +
//                   '</li>' +
//                 '</ul>',
//       scope: {
//         ratingValue: '=',
//         max: '=',
//         onRatingsSelected: '&'
//       },
//       link: function (scope, elem, attrs) {
//
//         var updateStars = function() {
//         scope.stars = [ ];
//         for (var i = 0; i < scope.max; i++) {
//           scope.stars.push({filled: i < scope.ratingValue});
//         }
//       };
//         scope.toggle = function (index) {
//           scope.ratingValue = index + 1;
//         };
//
//
//       scope.$watch('ratingValue', function(oldVal, newVal)) {
//         if(newVal) {
//           updateStars();
//         }
//       });
//     }
//   });
