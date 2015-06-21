/*eslint-disable */
export default ngModule => {
  describe('news', () => {
    let newsFactory;
    let httpBackend;

    beforeEach(() => {
      window.module(ngModule.name);
      inject(($httpBackend, _NewsFactory_) => {
        newsFactory = _NewsFactory_;
        httpBackend = $httpBackend;
      });
    });

    afterEach(() => {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('get news', () => {
      let testData = {
        news: ['one']
      };

      httpBackend.expectGET('/news.json').respond(testData);

      newsFactory.get((err, data) => {
        expect(err).to.be.null;
        expect(data.news[0]).to.equal(testData.news[0]);
      });

      httpBackend.flush();
    });
  });
};
/*eslint-enable */
