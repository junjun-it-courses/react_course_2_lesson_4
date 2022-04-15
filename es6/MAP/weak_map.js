// WeakMap это Map, в котором ключи обладают неустойчивыми связями,
// что позволяет не мешать сборщику мусора удалять элементы WeakMap.
// Это означает, что можно не беспокоиться об утечках памяти.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// Стоит отметить, что в WeakMap, в отличие от Map, каждый ключ должен быть объектом.

 // Для WeakMap есть только четыре метода: delete(ключ), has(ключ), get(ключ)
// и set(ключ, значение).

let w = new WeakMap();
w.set('a', 'b');
// Uncaught TypeError: Invalid value used as weak map key

let o1 = {};
let o2 = function(){};
let o3 = window;

w.set(o1, 37);
w.set(o2, "azerty");
w.set(o3, undefined);

w.get(o3); // undefined, потому что это заданное значение

w.has(o1); // true
w.delete(o1);
w.has(o1); // false