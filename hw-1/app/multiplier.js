var _nycda = _nycda || {};
_nycda.multiplier = function (elements, multiple, removeNan) {
    if (elements) {
        if (removeNan === undefined) {
            removeNan = true;
        }
        if (multiple === undefined || multiple === null) {
            multiple = 1;
        }
        var newArray = [];
        for (var i = 0; i < elements.length; i++) {
            var myElement = parseFloat(elements[i]);
            if (!removeNan && isNaN(myElement)) {
                newArray.push(null);
            }
            else if (!isNaN(myElement)) {
                newArray.push(myElement * multiple);
            }
        }
        return newArray;
    } else {
        throw "You cannot pass in undefined or null for the elements argument.";
    }
};