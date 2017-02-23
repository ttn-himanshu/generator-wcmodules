'use strict';


describe('service: testService', function() {
    beforeEach(module('<%= ngname %>'));
    var scope,
        service;

    beforeEach(inject(function($rootScope, _testService_) {
        scope = $rootScope.$new();
        service = _testService_;

        $rootScope.$digest();
    }));


    it('should test testFactory', function() {
        expect(!!service).toEqual(true);
        expect(service).toBeDefined();
        expect(service.getGreetings()).toEqual("hello");
    });
});
