//=================================================//

const chicken_leg = 2;
const cow_leg = 4;
const pig_leg = 4;

function animals(chicken, cow, pig) {
    let new_res = 0;
    new_res += chicken * chicken_leg
    new_res += cow * cow_leg
    new_res += pig * pig_leg
    return new_res
};
// console.log(animals(2, 3, 5));


//=================================================//

function sortByLength(arr) {
    for (let i in arr) {
        arr.sort((a, b) => a.length - b.length)
    }
    return arr
}
// console.log(sortByLength(["jung", "turing", "einstein"]));


//=================================================//

function isOmnipresent(arr, arg) {
    for (let j of arr) {
        if (j.includes(arg) == false) {
            return false
        }
    }
    return true
}
// console.log(isOmnipresent([
//     [5, 5],
//     [5, 6],
//     [4, 5]
// ], 4));

//=================================================//


function highLow(arg) {
    let new_arr = []
    let result = arg.split(" ")
    for (let i of result) {
        new_arr.push(parseInt(i))
    }
    return {
        min: Math.min(...new_arr),
        max: Math.max(...new_arr)
    }
};
// console.log(highLow("5 4 3 2 1"));

//=================================================//
let global_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function missingNum(arr) {
    let new_arr = []
    for (let j of global_arr) {
        if (arr.includes(j) == false) {
            new_arr.push(j)
        }
    }
    return new_arr
}
// console.log(missingNum([10, 9, 8, 7, 6, 5, 4, 3, 2]));