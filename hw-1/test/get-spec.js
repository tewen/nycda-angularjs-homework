describe("_nycda.get", function () {
    it("Should return undefined if the map is so", function () {
        expect(_nycda.get(undefined, "name")).toBeUndefined();
    });

    it("Should return null if the map is so", function () {
        expect(_nycda.get(null, "name")).toBeNull();
    });

    it("Should return the map itself if the properties are not provided", function () {
        expect(_nycda.get({name: "Charlie"}, null)).toEqual({name: "Charlie"});
    });

    it("Should return the map itself when properties is blank", function () {
        expect(_nycda.get({name: "Lesli Chow"}, "")).toEqual({name: "Lesli Chow"});
    });

    it("Should play nice with single properties", function () {
        expect(_nycda.get({name: "Charlie"}, "name")).toEqual("Charlie");
        expect(_nycda.get({name: "Charlie", number: 7}, "number")).toEqual(7);
    });

    it("Should play nice with dot properties", function () {
        expect(_nycda.get({name: {first: "Charlie", town: "White Plains"}}, "name.town")).toEqual("White Plains");
    });

    it("Should play nice with 3 dot properties", function () {
        expect(_nycda.get({response: {name: {first: "Charlie", town: "Jersey City"}}}, "response.name.town")).toEqual("Jersey City");
    });

    it("Should play nice with 4 dot properties", function () {
        expect(_nycda.get({something: {response: {name: {first: "Charlie", town: "Charleston"}}}}, "something.response.name.town")).toEqual("Charleston");
    });

    it("Should play nice with 5 dot properties", function () {
        expect(_nycda.get({president: {something: {response: {name: {first: "Charlie", town: "Firmwood"}}}}}, "president.something.response.name.town")).toEqual("Firmwood");
    });

    it("Should play nice with 6 dot properties", function () {
        expect(_nycda.get({vice: {president: {something: {response: {name: {first: "Charlie", town: "Des Moines"}}}}}}, "vice.president.something.response.name.town")).toEqual("Des Moines");
    });

    it("Should play nice with 7 dot properties", function () {
        expect(_nycda.get({second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "Bacon"}}}}}}}, "second.vice.president.something.response.name.town")).toEqual("Bacon");
    });

    it("Should play nice with 8 dot properties", function () {
        expect(_nycda.get({cool: {second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "El Rancho"}}}}}}}}, "cool.second.vice.president.something.response.name.town")).toEqual("El Rancho");
    });

    it("Should play nice with 9 dot properties", function () {
        expect(_nycda.get({west: {cool: {second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "Cleveland"}}}}}}}}}, "west.cool.second.vice.president.something.response.name.town")).toEqual("Cleveland");
    });

    it("Should play nice with 10 dot properties", function () {
        expect(_nycda.get({mountain: {west: {cool: {second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "Nantucket"}}}}}}}}}}, "mountain.west.cool.second.vice.president.something.response.name.town")).toEqual("Nantucket");
    });

    it("Should play nice with properties that don't exist, by returning undefined", function () {
        expect(_nycda.get({name: {first: "Charlie", town: "White Plains"}}, "name.town.country.something")).toBeUndefined();
    });
});