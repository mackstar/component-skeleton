describe('Example', function() {

    beforeEach(function() {
        loadFixtures('base.html');
    });

    it('should run a test', function() {
        expect($('h1').text()).toEqual('Hello');
    });

});