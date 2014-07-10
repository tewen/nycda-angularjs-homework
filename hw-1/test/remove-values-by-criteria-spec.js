describe("_nycda.removeValuesByCriteria", function () {

    it("Should throw an error if passed an undefined object", function () {
        expect(function () {
            var criteria = function (value) {
                return true;
            };
            _nycda.removeValuesByCriteria(undefined, criteria);
        }).toThrow();
    });

    it("Should throw an error if passed an null object", function () {
        expect(function () {
            var criteria = function (value) {
                return true;
            };
            _nycda.removeValuesByCriteria(null, criteria);
        }).toThrow();
    });

    it("Should throw an error if criteria is not a function", function () {
        expect(function () {
            _nycda.removeValuesByCriteria({name: "TOM"}, null);
        }).toThrow();
    });

    it("Should be able to remove odd numbers", function () {
        var criteria = function (value) {
            return value % 2 === 0;
        };
        expect(_nycda.removeValuesByCriteria({
            one: 1, two: 2,
            three: 3, four: 4
        }, criteria)).toEqual({two: 2, four: 4});
    });

    it("Should only keep elements name Muhammad", function () {
        var criteria = function (value) {
            return value === "Muhammad";
        };
        expect(_nycda.removeValuesByCriteria({
            studentA: "Muhammad", studentB: "Daniel"
        }, criteria)).toEqual({
            studentA: "Muhammad"
        });
    });

    it("Should just return an empty object if passed an empty object", function () {
        var criteria = function (value) {
            return false;
        };
        expect(_nycda.removeValuesByCriteria({}, criteria)).toEqual({});
    });

});