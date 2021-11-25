function sortDesconding(num_1) {
    let new_arr = []
    let global_arr = []
    let str = num_1.toString()
    str = str.split("")
    str.sort((a, b) => a - b)
    for (let j = str.length - 1; j >= 0; j--) {
        global_arr.push(str[j])
    }

    return global_arr
}
// console.log(sortDesconding(1365481354165));



let obj = {
    "joel": 20,
    "baby": 15,
    "john": 10
}

function afterNYears(arg_1, arg_2) {
    for (let i in arg_1) {
        arg_1[i] += arg_2
    }
    return arg_1
}
// console.log(afterNYears(obj, 100));