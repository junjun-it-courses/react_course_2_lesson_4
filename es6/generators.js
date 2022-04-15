// Функция-генератор возвращает итерируемый объект при своём вызове.
// Функция-генератор записывается с помощью знака * после ключевого слова
// function, а в теле функции должно присутствовать ключевое слово yield.

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined


console.log(generator().next().value); // 1
console.log(generator().next().value); // 1



// function* infiniteNumbers() {
//     var n = 1;
//     while (true) {
//         yield n++;
//     }
// }
//
// var numbers = infiniteNumbers(); // возвращает перебираемый объект
//
// numbers.next(); // { value: 1, done: false }
// numbers.next(); // { value: 2, done: false }
// numbers.next(); // { value: 3, done: false }


