describe("_nycda.multiplier", function () {

    it("Should throw an error when passed an undefined array", function () {
        expect(function () {
            _nycda.multiplier(undefined, 5);
        }).toThrow();
    });

    it("Should throw an error when passed null for the array", function () {
        expect(function () {
            _nycda.multiplier(null, 0);
        }).toThrow();
    });

    it("Should behave as if multiplied by 1 if passed in no multiple", function () {
        expect(_nycda.multiplier([1, 2.5, "Mike", 3], undefined)).toEqual([1, 2.5, 3]);
    });

    it("Should multiply each integer in the following array by the multiple", function () {
        expect(_nycda.multiplier([1, 2, 3], 6)).toEqual([6, 12, 18]);
    });

    it("Should multiply floats along with integers", function () {
        expect(_nycda.multiplier([1, 2.5, 3], 3)).toEqual([3, 7.5, 9]);
    });

    it("Should choose to removeNan by default", function () {
        expect(_nycda.multiplier([1, 2.5, "Mike", 3], 3)).toEqual([3, 7.5, 9]);
    });

    it("Should choose to removeNan if it is set to true", function () {
        expect(_nycda.multiplier([1, 2.5, "Mike", 3], 3, true)).toEqual([3, 7.5, 9]);
    });

    it("Should choose not to removeNan if it is set to false", function () {
        expect(_nycda.multiplier([1, 2.5, "Mike", 3], 3, false)).toEqual([3, 7.5, null, 9]);
    });

    it("Should be able to parse string integers into numbers", function () {
        expect(_nycda.multiplier(["18", 6, "0", "4"], 3)).toEqual([54, 18, 0, 12]);
    });

    it("Should be able to parse string floats into numbers", function () {
        var ar = _nycda.multiplier(["18.1", 6, "0.0006", "4"], 3);
        expect(ar.length).toEqual(4);
        expect(ar[0] >= (54.3 - .000001) && ar[0] <= (54.3 + .000001)).toBeTruthy();
        expect(ar[1]).toEqual(18);
        expect(ar[2]).toEqual(.0018);
        expect(ar[3]).toEqual(12);
    });

    it("Should be able to return an empty array if passed all null values, and removeNan is true (default)", function () {
        expect(_nycda.multiplier(["George", "Tony", "Mike"], 3)).toEqual([]);
    });

    it("Should be able to return an array of all null values if removeNan is false", function () {
        expect(_nycda.multiplier(["George", "Tony", "Mike"], 3, false)).toEqual([null, null, null]);
    });

    it("Should be able to multiply all the values by 0", function () {
        expect(_nycda.multiplier([1, 2, 3, 6.7], 0)).toEqual([0, 0, 0, 0]);
    });
});