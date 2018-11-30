"use strict";

describe("ScorerJS", function() {

    var scorer;

    beforeEach(function() {
        scorer = new Scorer();
    });

    describe("Default setting and errors", function() {
        it("Has a nil score at game start", function() {
            expect(scorer._score).toEqual(0);
        });

        it("Does not allow the score to exceed 300"), function() {
            scorer._score = 300;
            expect(function(){scorer.addtoScore(1);}).toThrowError
            ("Maximum score of 300 can not be exceeded");
        };
    });
});
