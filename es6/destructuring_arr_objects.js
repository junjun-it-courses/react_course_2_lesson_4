// Деструктуризация помогает избежать использования вспомогательных
// переменных при взаимодействии с объектами и массивами.

function foo() {
    return [1, 2, 3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

// function bar() {
//     return {
//         x: 4,
//         y: 5,
//         z: 6
//     };
// }
// let { x: a, y: b, z: c } = bar();
// console.log(a, b, c); // 4 5 6