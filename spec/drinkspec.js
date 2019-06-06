describe("What Can I drink function", function() {

    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("Checks Age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
    });

    describe("Checks Age", function() {
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
    });

});
