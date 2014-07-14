describe("questions", function () {
    var data;

    beforeEach(module('questions'));
    beforeEach(inject(function (Data) {
        data = Data;
    }));

    it("Should have items in the array", function () {
        expect(data.questions.length).toEqual(5);
    });

});