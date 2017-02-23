'use strict';


describe('service: testDirective', function() {
    beforeEach(module('<%= ngname %>'));
    beforeEach(module("<%= ngname %>.templates"));
    var scope,
        element,
        directive,
        controller,
        isolateScope;

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        element = angular.element('<test-directive></test-directive>');
        directive = $compile(element)(scope);

        scope.$digest();
        isolateScope = directive.isolateScope()
            // controller = template.controller('testDirective');
    }));


    it('should test testDirective', function() {
        expect(!!directive).toBe(true);
        expect(isolateScope.greeting).toBe('hello world!!!');
    });

    it('should test testDirective controller', function() {
        expect(typeof isolateScope.getGreetingMessage).toBe('function');
        expect(isolateScope.getGreetingMessage()).toBe('hello world!!!');
    });
});
