// let - позволяет объявлять переменные с блочной областью видимости
var a = 2;
{
    let a = 3;
    console.log(a); // 3
}
console.log(a); // 2

// const - позволяет объявлять константы с блочной областью видимости

{
    const ARR = [5, 6];
    ARR.push(7);
    console.log(ARR); // [5,6,7]
    ARR = 10; // TypeError
    ARR[0] = 3; // значение можно менять
    console.log(ARR); // [3,6,7]
}