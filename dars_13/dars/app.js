// console.log("13_dars");

// let a = "a"

// function b() {
//     console.log("Hi" + a);
// }
// a = "b"

// b()

// let p = "hello"

// if (true) {
//     let u = "Johm"

//     function sayHi() {
//         console.log(`${p}${u}`);
//     }
// }
// sayHi()




// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 11]

// function inBetween(arg, num_1, num_2) {
//     return function() {
//         return arr.filter((value) => value >= num_1 && value <= num_2)
//     }
// }
// let result_1 = inBetween()
// console.log(result_1);

// function inArray(arg) {
//     let result_2 = arr.filter((value) => value < 10)
//     return result_2
// }


// console.log(inBetween(arr, 3, 6));
// console.log(inArray(arr));



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 11]

// function inBetween(arr, num_1, num_2) {
//     return function() {
//         let result_1 = arr.filter((value) => value >= num_1 && value <= num_2)
//         return result_1
//     }

// }
// console.log(inBetween(arr, 3, 6))

// console.log(inBetween(arr, 3, 6));


// function olma(arg) {
//     function inBetween(arg, num_1, num_2) {
//         let result_1 = arr.filter((value) => value >= num_1 && value <= num_2)
//         return result_1
//     }

//     function inArray(arg) {
//         let result_2 = arr.filter((value) => value < 10)
//         return result_2
//     }
// }

// console.log(olma(arr));





// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 11]


// function inBetween(num_1, num_2) {
//     return function inBetween_2(value) {
//         return value >= num_1 && value <= num_2
//     }
// }

// console.log(arr.filter(inBetween(3, 6)));

// function inArray(arr) {
//     return function inArray_2(value) {
//         return arr.includes(value)
//     }
// }

// console.log(arr.filter(inArray([1, 2, 3, 11])));



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 11]

// function bubble(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let a = arr[i]
//             let b = arr[i + 1]
//             arr[i] = b
//             arr[i + 1] = a
//         }
//     }
//     return arr;
// }

// console.log(bubble(arr));

// let users = [
//     { name: "Ali", age: 20, surname: "Johnson" },
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(key) {
//     return function byField_1(value_1, value_2) {
//         return value_1[key] > value_2[key] ? 1 : -1
//     }
// }
// let result = users.sort(byField("name"))
// console.log(result);

// let arr = [
//     { name: "olma", age: 12 },
//     { name: "olma", age: 12 },
//     { name: "olma", age: 12 }
// ]

// console.table(arr);


// console.log("1224".length / "2");

//=========================================================//

function theMax(...arg) {
    let new_arr = []
    for (let i = 0; i < arg.length; i++) {
        for (let j in arg[i]) {
            new_arr.push(Math.max(...arg[i][j]));
        }
    }
    return new_arr
};
// console.log(theMax([
//     [1, 2, 3, 5],
//     [5, 7, 8, 9, 5],
//     [8558, 25]
// ]));

//=========================================================//

const soniya = 3600

function time(arg) {
    return arg * soniya
}
// console.log(time(24));

//=========================================================//

function checkPalindrome(arg) {
    arg = toString(arg)
    const len = arg.length;

    for (let i = 0; i < len / 2; i++) {
        if (arg[i] !== arg[len - i - 1]) {
            return `${arg} is not palindrome`;
        }

    }
    return `${arg}  is palindrome`;
}
const value = checkPalindrome(1222);
console.log(value);



// function isPalindrome(word) {
//     if (word == null || word.length == 0) {
//         return false;
//     }
//     var lastIndex = Math.ceil(word.length / 2);
//     for (var i = 0; i < lastIndex && i < word.length; i++) {
//         if (word[i] != word[word.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPalindrome(4541));


function makeArmy() {
    let shooters = []
    let i = 0
    while (i < 10) {
        let copied_i = i
        let shooter = function() {
            console.log(copied_i);
        }
        shooters.push(shooter)
        i++
    }
    return shooters
}
let army = makeArmy()

// army[0]()