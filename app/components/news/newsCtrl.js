export default ngModule => {
	ngModule.controller('NewsCtrl', [
		function () {
			let vm = this;
			vm.test = 123;
			console.log('blablabla');
		}
	]);
};
