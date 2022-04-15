// Map – это коллекция ключ/значение, как и Object. Но основное отличие
// в том, что Map позволяет использовать ключи любого типа.
// https://learn.javascript.ru/map-set#map


// Если Object может использовать только строковые ключи (названия) свойств и методов
// то в Map ключем (названием) может быть и объект и функция - не только строка!

var myMap = new Map();

var keyString = "строка",
    keyObj = {},
    keyFunc = function() {};

// устанавливаем значения
myMap.set(keyString, "значение, связанное со 'строка'");
myMap.set(keyObj, "значение, связанное с keyObj");
myMap.set(keyFunc, "значение, связанное с keyFunc");

myMap.size; // 3

// получаем значения
myMap.get(keyString);    // "значение, связанное со 'строка'"
myMap.get(keyObj);       // "значение, связанное с keyObj"
myMap.get(keyFunc);      // "значение, связанное с keyFunc"