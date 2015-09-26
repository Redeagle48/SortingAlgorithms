var initArray = [3, 2, 9, 9, 9, 8, 104, 63];

for(var i = 0; i < initArray.length; i++){

    console.log("i: " + i);
    console.log("value: " + initArray[i]);

    console.log("Array: " + initArray);

    if(i === 0){}
    else{

        var elem = initArray[i];

        for(var j = i-1; j >= 0; j--){

            console.log("j: " + j);
            console.log("j value: " + initArray[j]);

            var b = false;
            if(elem <= initArray[j] && (j-1 >= 0? elem >= initArray[j-1] : true)){

                console.log(elem + " >= " + initArray[j]);

                initArray = moveArrayElem(initArray,i,j);
                console.log("After change: " + initArray);

                b = true;
            }
            if(b) {break;}
        }
    }

    console.log("\n")

}

console.log("Final array: " + initArray)

function moveArrayElem(arrayToChange, oldPosition, newPosition) {

    if (oldPosition >= 0 && newPosition <= arrayToChange.length - 1) {
        var temp = arrayToChange[newPosition];
        arrayToChange[newPosition] = arrayToChange[oldPosition];
        arrayToChange[oldPosition] = temp;

        return arrayToChange;
    } else {
        console.log("You are not inside the limits!")
    }
}