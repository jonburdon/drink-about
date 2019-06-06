describe("What Can I drink function", function() {
    
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks Age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
    });
});