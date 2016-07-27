angular.module('whcyit-immerse', []);
(function (angular, document) {
  'use strict';

  angular.module('whcyit-immerse').directive('cyImmerseBar', [function () {
    if (!ionic.Platform.isAndroid()) {
      return {
        restrict: 'E',
        template: '',
        replace: true
      };
    }

    return {
      restrict: 'E',
      replace: true,
      template: '<div class="status-bar bar {{barClass}}"></div>',
      link: function (scope, element, attrs) {
        scope.barClass = attrs.barClass;
        document.addEventListener("deviceready", function () {
          if (!ImmersePlugin) {
            return;
          }

          ImmersePlugin.getStatusbarHeight(function (r) {
            document.documentElement.style.setProperty('--statusbar-height', r.statusbarHeight + 'px');
          });
        }, false);
      }
    };
  }]);
})(angular, document);
