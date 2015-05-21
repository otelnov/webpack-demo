export default ngModule => {
  ngModule.controller('UserCtrl', [
    function () {
      let vm = this;
      vm.test = 123;
    }
  ]);
};
