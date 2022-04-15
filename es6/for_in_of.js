// for...of используется для перебора в цикле итерируемых объектов,
// например, массивов.

let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;

for (let nickname of nicknames) {
    console.log(nickname);
}
// di
// boo
// punkeye


// for...in используется для перебора в цикле
// всех доступных для перебора (enumerable) свойств объекта.


// let obj = {
//     firstName: 'Vlad',
//     lastName: 'Shaitan',
//     age: 10,
//     pet: 'Cat'
// }
//
// for(let key in obj) {
//     console.log(key, obj[key])
// }


// let nicknames = ['di', 'boo', 'punkeye'];
// nicknames.size = 3;
// for (let nickname in nicknames) {
//     console.log(nickname);
// }
// 0
// 1
// 2
// size

