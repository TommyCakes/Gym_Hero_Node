angular.module('workoutApp')
    .directive('twitter', [
  function() {
      return {
          link: function(scope, element, attr) {
              setTimeout(function() {
                      twttr.widgets.createShareButton(
                          attr.url,
                          element[0],
                          function(el) {}, {
                              count: 'none',
                              text: attr.text
                          }
                      );
              });
          }
      }
  }
]);
