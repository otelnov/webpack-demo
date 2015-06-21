export default ngModule => {
  ngModule.directive('userMain', [
    function () {
      return {
        restrict: 'E',
        template: require('./user.html'),
        controller: 'UserCtrl',
        controllerAs: 'vm'
      };
    }
  ]);

  ngModule.controller('UserCtrl', [
    function () {
      let vm = this;
      vm.test = 123;
    }
  ]);
};
