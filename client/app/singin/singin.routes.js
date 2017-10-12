'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/sing-in', {
    template: '<singin></singin>'
  });
}
