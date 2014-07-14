describe("Detail", function () {
    var $scope,
        controller;

    beforeEach(module('questions'));
    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('Detail', {$scope: $scope});
    }));

    describe("onSelectAnswer", function () {
        var question;

        beforeEach(function () {
            question = {question: "What is your name?"};
        });

        it("Should set the answer property of the question to the option provided", function () {
            $scope.onSelectAnswer(question, "Mike");
            expect(question.answer).toEqual("Mike");
        });

    });
});