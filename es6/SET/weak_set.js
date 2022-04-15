// Она аналогична Set, но мы можем добавлять в WeakSet только объекты
// (не примитивные значения).
// Объект присутствует в WeakSet только до тех пор, пока доступен где-то ещё.
// Как и Set, она поддерживает add, has и delete, но не size, keys()
// и не является перебираемой.
// Объект в WeakSet уникален.

var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, foo не был добавлен к коллекции

ws.delete(window); // удаляет window из коллекции
ws.has(window);    // false, window был удалён