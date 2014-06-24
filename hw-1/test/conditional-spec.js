describe("_nycda.conditional", function () {
    var condition, runIfTrue;

    it("Should throw an error when passed undefined for the function to be run after the condition", function () {
        condition = function () {
            return true;
        };
        runIfTrue = undefined;

        expect(function () {
            new _nycda.conditional(condition, runIfTrue);
        }).toThrow();
    });

    it("Should throw an error when passed null for the function to be run after the condition", function () {
        condition = function () {
            return true;
        };
        runIfTrue = null;

        expect(function () {
            new _nycda.conditional(condition, runIfTrue);
        }).toThrow();
    });

    it("Should return the original function when no condition is passed", function () {
        condition = null;
        runIfTrue = function () {
            return 500;
        };

        expect(new _nycda.conditional(condition, runIfTrue)).toBe(runIfTrue);
    });

    it("Should not run the function if the condition function is not met", function () {
        var myConsistentValue = false;
        condition = function () {
            //Always false
            return 3 > 5;
        };
        runIfTrue = function () {
            myConsistentValue = true;
        };

        /* Call the returned function */
        new _nycda.conditional(condition, runIfTrue)();

        expect(myConsistentValue).toBeFalsy();
    });

    it("Should return undefined when the condition is not met", function () {
        condition = function () {
            //Always false
            return 3 > 5;
        };
        runIfTrue = function () {
            return "This is not undefined!";
        };

        /* Call the returned function */
        expect(new _nycda.conditional(condition, runIfTrue)()).toBeUndefined();
    });

    it("Should run the function if the condition function is met", function () {
        var myChangingValue = false;
        condition = function () {
            //Always true
            return 100 > 0;
        };
        runIfTrue = function () {
            myChangingValue = true;
        };

        /* Call the returned function */
        new _nycda.conditional(condition, runIfTrue)();

        expect(myChangingValue).toBeTruthy();
    });

    it("Should return the same value from a vanilla function and a function with the condition", function () {
        condition = function () {
            //Always true
            return 1;
        };
        runIfTrue = function () {
            return "This is not undefined!";
        };

        /* Call the returned function */
        expect(new _nycda.conditional(condition, runIfTrue)()).toEqual("This is not undefined!");
    });

    it("Should run the function utilizing the same set of arguments that were in the original function", function () {
        condition = function () {
            //Always true
            return 1;
        };
        runIfTrue = function (argA, argB, argC) {
            return argA + argC - argB;
        };

        /* Call the returned function */
        expect(new _nycda.conditional(condition, runIfTrue)(7, 19, 11)).toEqual(-1);
    });

    it("Should be able to flip on and off a condition involving external variables", function () {
        var timesRun = 0, myExternalFlag = true;
        condition = function () {
            //Always true
            return myExternalFlag;
        };
        runIfTrue = function () {
            timesRun += 1;
        };

        /* Call the returned function */
        var newFunction = new _nycda.conditional(condition, runIfTrue);

        newFunction();
        expect(timesRun).toEqual(1);

        myExternalFlag = false;
        newFunction();
        expect(timesRun).toEqual(1);
    });

    it("Should be able to flip on and off a condition involving the callee's arguments", function () {
        var timesRun = 0;
        condition = function (a, b) {
            //Always true
            return a && b;
        };
        runIfTrue = function () {
            timesRun += 1;
        };

        /* Call the returned function */
        var newFunction = new _nycda.conditional(condition, runIfTrue);

        newFunction(true, true);
        expect(timesRun).toEqual(1);

        newFunction(true, false);
        expect(timesRun).toEqual(1);

        newFunction(false, true);
        expect(timesRun).toEqual(1);

        newFunction(true, true);
        expect(timesRun).toEqual(2);
    });

});