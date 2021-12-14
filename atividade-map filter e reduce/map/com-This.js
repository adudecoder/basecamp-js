const MACA = {
    value: 2,
}

const LARANJA = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const NUMS = [1, 2];

console.log('this -> maçã', mapComThis(NUMS, MACA));

console.log('this -> Laranja', mapComThis(NUMS, LARANJA));