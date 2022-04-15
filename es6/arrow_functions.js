// Стрелочная функция

let addition = (a, b) => a + b;

let arr = ['apple', 'banana', 'orange'];

let breakfast = arr.map(fruit => {
    return fruit + 's';
});

console.log(breakfast); // ['apples', 'bananas', 'oranges']


// this

let exampleArrFunc = () => console.log(this);

function funcDeclaration() {
    console.log(this);
}


let obj = {
    val: 100,
    getValDeclaration: function() {
        console.log('Declaration', this.val)
        console.log('Declaration', this)

        const innerArrowFunc = () => {
            console.log('innerArrowFunc', this)
        }

        innerArrowFunc();
    },
    getValArrow: () => {
        console.log('Arrow func method', this)
    }

}

obj.getValDeclaration();
obj.getValArrow();