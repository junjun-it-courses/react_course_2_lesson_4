let numbers = [];

numbers = new Proxy(numbers, {

    get() {

    },

    set(target, prop, val) { // для перехвата записи свойства
        console.log(prop, val);
        if (!(typeof val === 'number')) return false;

        target[prop] = val;
        return true;
    }
});

numbers.push(1); // добавилось успешно
console.log(numbers)

numbers.push(2); // добавилось успешно
console.log("Длина: " + numbers.length); // 2
console.log(numbers)

numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)
console.log(numbers)

// console.log("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)");