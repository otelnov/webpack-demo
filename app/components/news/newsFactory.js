export default ngModule => {
  ngModule.factory('NewsFactory', [
    '$http',
    function ($http) {
      function get(cb) {
        $http.get('/news.json').then(
            resp => cb(null, resp.data),
            err => cb(err)
        );
      }

      return {get};
    }
  ]);
};
