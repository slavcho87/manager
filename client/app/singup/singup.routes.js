'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/sing-up', {
    template: '<singup></singup>'
  });
}
