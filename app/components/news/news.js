export default ngModule => {
  ngModule.directive('newsMain', [()=> {
    return {
      restrict: 'E',
      template: require('./news.html'),
      controller: 'NewsCtrl',
      controllerAs: 'vm'
    };
  }]);

  ngModule.controller('NewsCtrl', [
    function () {
      let vm = this;
      vm.test = 123;
      console.log('blablabla');
    }
  ]);
};
