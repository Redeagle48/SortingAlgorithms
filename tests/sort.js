var expect    = require("chai").expect;
var sort = require("../sort");

describe("Test Suite 1", function() {

    // TODO Test exceptions
    it("Test illegal args", function() {
        expect(sort.sort(1)).to.throw("Not");
    });

    it("Test Array Size",function(){
        expect(sort.sort([3,1,2])).to.have.length(3);
    });

});

describe("Test Suite 2", function() {

    it("Sort No Elements Array", function() {
        expect(sort.sort([])).to.deep.equal([]);
    });

    it("Sort Single Element Array", function() {
        expect(sort.sort([1])).to.deep.equal([1]);
    });

    it("Sort Ordered Array", function() {
        expect(sort.sort([1,2,3])).to.deep.equal([1,2,3]);
    });

    it("Sort Inverted Ordered Array", function() {
        expect(sort.sort([3,2,1])).to.deep.equal([1,2,3]);
    });

});

describe("Test Suite 3", function() {

    it("Sort 3-elem Array", function() {
        expect(sort.sort([1,3,2])).to.deep.equal([1,2,3]);
    });

    it("Sort 6-elem Array", function() {
        expect(sort.sort([1,5,2,6,4,3])).to.deep.equal([1,2,3,4,5,6]);
    });

    it("Sort 10-elem Array", function() {
        expect(sort.sort([1,5,2,6,4,3])).to.deep.equal([1,2,3,4,5,6]);
    });

});

describe("Test Suite 4", function() {

    it("Sort 3-elem Random Array", function() {

        var testArray = randomArray(3);

        expect(sort.sort(testArray)).to.deep.equal(testArray.sort());
    });

    it("Sort 5-elem Random Array", function() {

        var testArray = randomArray(5);

        expect(sort.sort(testArray)).to.deep.equal(testArray.sort());
    });

    it("Sort 10-elem Random Array", function() {

        var testArray = randomArray(10);

        expect(sort.sort(testArray)).to.deep.equal(testArray.sort());
    });

    it("Sort 1000-elem Random Array", function() {

        var testArray = randomArray(1000);

        expect(sort.sort(testArray)).to.deep.equal(testArray.sort());
    });

    it("Sort 10000-elem Random Array", function() {

        var testArray = randomArray(10000);

        expect(sort.sort(testArray)).to.deep.equal(testArray.sort());
    });

});


function randomArray(arraySize) {
    var randomArray = [];

    for(var i = 0; i < 10; i++) {
        randomArray.push(Math.round(1000*Math.random()));
    }

    return randomArray;
}