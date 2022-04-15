// Объекты Set это коллекции уникальных значений. Дублированные значения
// игнорируются, т.к. коллекция должна содержать только уникальные значения.
// Значения могут быть примитивами или ссылками на объекты.

// https://developer.mozilla.org/ru/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Set/Set

let mySet = new Set([1, 1, 2, 2, 3, 3]);
mySet.size; // 3
mySet.has(1); // true
mySet.add('строки');
mySet.add({ a: 1, b:2 });


// Можно перебирать Set в цикле с помощью forEach или for...of. Перебор
// происходит в том же порядке, что и вставка.

mySet.forEach((item) => {
    console.log(item);
    // 1
    // 2
    // 3
    // 'строки'
    // Object { a: 1, b: 2 }
});

for (let value of mySet) {
    console.log(value);
    // 1
    // 2
    // 3
    // 'строки'
    // Object { a: 1, b: 2 }
}

// У Set также есть методы delete() и clear().