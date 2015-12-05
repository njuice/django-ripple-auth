/**
 * ERRORS
 *
 * Directives related to errors and error messages.
 */

var module = angular.module('errors', []);

/**
 * Trust line graph. (Similar to small box plot.)
 */
module.directive('rpTransactionStatus', function() {
  return {
    restrict: 'E',
    template: '../../../../../templates/ripple_app/directives/transactionerror.html',
    scope: {
      engine_result: '@rpEngineResult',
      engine_result_message: '@rpEngineResultMessage',
      accepted: '@rpAccepted'
    },
    link: function(scope, elm, attrs) {
    }
  };
});
