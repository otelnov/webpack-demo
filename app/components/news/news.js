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
    'NewsFactory',
    function (newsFactory) {
      let vm = this;
      vm.test = 123;
      console.log('blablabla');

      newsFactory.get((err, data) => vm.news = data.news);
    }
  ]);
};
