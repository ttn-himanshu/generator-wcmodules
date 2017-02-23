'use strict';


describe('factory: testFactory', function() {
    beforeEach(module('<%= ngname %>'));
    var scope,
        factory;

    beforeEach(inject(function($rootScope, _testFactory_) {
        scope = $rootScope.$new();
        factory = _testFactory_;

        $rootScope.$digest();
    }));


    it('should test testFactory', function() {
        expect(!!factory).toEqual(true);
        expect(factory).toBeDefined();
        expect(factory).toEqual({ "message": "world!!!" });
    });
});
