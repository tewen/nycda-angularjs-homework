describe("_nycda.apply", function () {

    it("Should set a property to undefined if no value is passed in", function () {
        expect(_nycda.apply({name: "Charlie"}, 'name')).toEqual({name: undefined});
    });

    it("Should return null or undefined if the map is so", function () {
        expect(_nycda.apply(undefined, "name", "Mike")).toBeUndefined();
    });

    it("Should return null if the map is so", function () {
        expect(_nycda.apply(null, "name", "George")).toBeNull();
    });

    it("Should return the map itself if the properties are not provided", function () {
        expect(_nycda.apply({name: "Charlie"}, null)).toEqual({name: "Charlie"});
    });

    it("Should play nice with single properties", function () {
        expect(_nycda.apply({name: "Charlie"}, "name", "Tom")).toEqual({name: "Tom"});
        expect(_nycda.apply({name: "Charlie", number: 7}, "number", 9)).toEqual({name: "Charlie", number: 9});
    });

    it("Should return the map itself when properties are blank", function () {
        expect(_nycda.apply({name: "Lesli Chow"}, "", "George Chow")).toEqual({name: "Lesli Chow"});
    });

    it("Should play nice with dot properties", function () {
        expect(_nycda.apply({name: {first: "Charlie", town: "White Plains"}}, "name.town", "New Haven")).toEqual({name: {first: "Charlie", town: "New Haven"}});
    });

    it("Should play nice with 3 dot properties", function () {
        expect(_nycda.apply({response: {name: {first: "Charlie", town: "Jersey City"}}}, "response.name.town", "Singapore")).toEqual({response: {name: {first: "Charlie", town: "Singapore"}}});
    });

    it("Should play nice with 4 dot properties", function () {
        expect(_nycda.apply({something: {response: {name: {first: "Charlie", town: "Charleston"}}}}, "something.response.name.town", "Raleigh")).toEqual({something: {response: {name: {first: "Charlie", town: "Raleigh"}}}});
    });

    it("Should play nice with 5 dot properties", function () {
        expect(_nycda.apply({president: {something: {response: {name: {first: "Charlie", town: "Firmwood"}}}}}, "president.something.response.name.town", "Solidwood")).toEqual({president: {something: {response: {name: {first: "Charlie", town: "Solidwood"}}}}});
    });

    it("Should play nice with 6 dot properties", function () {
        expect(_nycda.apply({vice: {president: {something: {response: {name: {first: "Charlie", town: "Des Moines"}}}}}}, "vice.president.something.response.name.town", "Cedarburg")).toEqual({vice: {president: {something: {response: {name: {first: "Charlie", town: "Cedarburg"}}}}}});
    });

    it("Should play nice with 7 dot properties", function () {
        expect(_nycda.apply({second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "Bacon"}}}}}}}, "second.vice.president.something.response.name.town", "Ham")).toEqual({second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "Ham"}}}}}}});
    });

    it("Should play nice with 8 dot properties", function () {
        expect(_nycda.apply({cool: {second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "El Rancho"}}}}}}}}, "cool.second.vice.president.something.response.name.town", "El Paso")).toEqual({cool: {second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "El Paso"}}}}}}}});
    });

    it("Should play nice with 9 dot properties", function () {
        expect(_nycda.apply({west: {cool: {second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "Cleveland"}}}}}}}}}, "west.cool.second.vice.president.something.response.name.town", "Dayton")).toEqual({west: {cool: {second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "Dayton"}}}}}}}}});
    });

    it("Should play nice with 10 dot properties", function () {
        expect(_nycda.apply({mountain: {west: {cool: {second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "Nantucket"}}}}}}}}}}, "mountain.west.cool.second.vice.president.something.response.name.town", "Cape Cod")).toEqual({mountain: {west: {cool: {second: {vice: {president: {something: {response: {name: {first: "Charlie", town: "Cape Cod"}}}}}}}}}});
    });

    it("Should throw an error when tried to apply to a property two levels past existence", function () {
        expect(function () {
            _nycda.apply({name: "Terrence"}, "name.first.prefix", "George");
        }).toThrow();
    });

});