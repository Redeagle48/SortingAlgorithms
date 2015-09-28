exports.sort = function(list) {
    return sort(list);
};

exports.notAnArrayException = function(message) {
    return new NotAnArrayException(message);
}

exports.NotANumberException = function(message) {
    return new NotANumberException(message);
}

function sort(initArray){

    if(!Array.isArray(initArray)) {
        throw new NotAnArrayException("Argument is not an array");
    }
    else if(initArray.every(
            function(elem, index, array) {
                typeof elem !== "number";
            }))
    {
        throw new NotANumberException("Array elem " + elem + " is not a number");
    }

    for(var i = 0; i < initArray.length; i++){

        if(i === 0){
            //Nothing to be done
        }
        else{

            var elem = initArray[i];

            //Iterating the ordered elements (elements on the left)
            for(var j = i-1; j >= 0; j--){

                var b = false;
                if(elem <= initArray[j] && (j-1 >= 0? elem >= initArray[j-1] : true)){

                    //console.log("Before: " + initArray);
                    moveArrayElem(initArray,elem,j,i+1);
                    //console.log("After: " + initArray);

                    b = true;
                }
                // Optimization: there is no need to iterate the ordered array when the value is greater than all the
                //ordered elements
                else if(elem > initArray[j] && i !== 1){
                    b = true;
                }

                if(b) {break;}
            }
        }

    }

    return initArray;
}

function moveArrayElem(arrayToChange, elem, newPosition,index) {

    // Array.prototype.splice -> arguments: start position, number of elements to delete, elements to add

    //Add item to the final position
    arrayToChange.splice(newPosition,0,elem);
    //Remove item from the initial position
    arrayToChange.splice(index,1);

}

function exchangeArrayElem(arrayToChange, oldPosition, newPosition) {

    if (oldPosition >= 0 && newPosition <= arrayToChange.length - 1) {
        var temp = arrayToChange[newPosition];
        arrayToChange[newPosition] = arrayToChange[oldPosition];
        arrayToChange[oldPosition] = temp;

        return arrayToChange;
    } else {
        console.log("You are not inside the limits!")
    }
}

// Exceptions
function NotAnArrayException(message) {
    this.message = message;
    this.name = "NotAnArrayException";
}

function NotANumberException(message) {
    this.message = message;
    this.name = "NotANumberException";
}