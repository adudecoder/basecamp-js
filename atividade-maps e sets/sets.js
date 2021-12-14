const MEU_ARRAY = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {

    const MY_SET = new Set(arr);

    return [...MY_SET];

}

console.log(valoresUnicos(MEU_ARRAY));