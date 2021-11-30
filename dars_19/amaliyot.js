//==============1-mashq==============//
/*
    Shartlari  --> 
    1.Funksiya argument sifatida array qabul qiladi.
    2.Funksiyaning vazifasi array ichida kelgan True valuelarni hisoblash.
    3.Agar array ichida True value bo'lmaganda bo'sh array qaytaradi.
    4.String holda kelgan True value ham hisoblanadi.
*/
function countTrue(arr) {
    let count = 0
    for (let i of arr) {
        if (i === true) {
            count++
        } else if (i === "true") {
            count++
        }
    }
    if (count === 0) {
        return []
    }
    return count
}
console.log(countTrue([false, false, "true", false, false, false]));

//=================2-mashq================//

/*
    Shartlari --->
    1.Funksiya argument sifatida Object qabul qiladi.
    2.Funksiyaning vazifasi Objectni Arrayga o'tkazish.
    3.Array ichma- ich bo'ladi yani har bitta key va value alohida Array bo'ladi.
*/
function toArray(obj) {
    let arr = []
    let global_arr = []
    for (let i in obj) {
        arr = []
        arr[0] = i
        arr[1] = obj[i]
        global_arr.push(arr)
    }
    return global_arr
}
console.log(toArray({ a: 1, b: 2 }));


//===================3-mashq=====================//
/*
    Shartlari --->
    1. Funksiya argument sifatida 2 ta Number qabul qiladi
    2. Funsiyaning vazifasi birinchi argumentni ikkinchi argumentga ikkinchi argumentni qiymatigacha ko'paytiriladi.
*/
function arrayOfMultiples(arg_1, arg_2) {
    let res_arr = []
    for (let i = 1; i <= arg_2; i++) {
        res_arr.push(arg_1 * i)
    }
    return res_arr
}
console.log(arrayOfMultiples(12, 10));

//=====================4-mashq===================//
/* 
    ---> Shartlari
    1. Funksiya Argument sifatida Array qabul qiladi.
    2. Funsiyaning vazifasi Arrayni sortlash.
    3. Agarda Array ichma ich bo'lsa Arrayning tuzulishini o'zgartirmasdan sotlash kerak
*/
function sortIt(arr) {
    return arr.sort((a, b) => a - b)
}
console.log(sortIt([4, [1],
    [3]
]));

//========================================//