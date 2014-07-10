var _nycda = _nycda || {};
_nycda.removeValuesByCriteria = function (map, criteria) {
    if (map && typeof criteria == 'function') {
        for (var key in map) {
            if (!criteria(map[key])) {
                delete map[key];
            }
        }
        return map;
    } else {
        throw "You must pass a map and a function for the criteria argument";
    }
};
