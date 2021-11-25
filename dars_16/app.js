//===================================================//

let letter = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
};

function alphNum(str) {
    let new_arr = []
    for (let j = 0; j < str.length; j++) {
        for (let i in letter) {
            if (i === str[j]) {
                new_arr.push(letter[i])
            }
        }
    }
    return new_arr
};
console.log(alphNum("JAVASCRIPT"));

//===================================================//


function numOfDigits(num) {
    let a = (num + "").length
    return a
}
console.log(numOfDigits(1000000000));


function concat(arr) {
    let new_arr = arr.flat(Infinity)
    return new_arr
}
console.log(concat([
    [1, 2, 3],
    [4, 5],
    [6, 7]
]));

//===================================================//


let obj = {
    1: 3,
    2: 2,
    3: 5,
    4: 4,
    5: 7,
    6: 6
}

function boxSeq(num) {
    let result;
    for (let key in obj) {
        if (num == key) {
            result = obj[key]
        }
    }
    return result
}
console.log(boxSeq(3));

//===================================================//

function shaxmat(str) {
    if (str[0].charCodeAt() % 2 == 1) {
        if (str[1] % 2 == 1) {
            return "BLACK"
        } else {
            return "WHITE"
        }
    } else {
        if (str[1] % 2 == 1) {
            return "WHITE"
        } else {
            return "BLACK"
        }

    }

}

console.log(shaxmat('d2'))