// ES6 позволяет установить параметры по умолчанию при объявлении функции.

function example(arg1 = 100, arg2 = 'Vlad') {
    console.log(arg1, arg2)
}

example()
example(0, "Alex");


const arrFuncExample = (val = 100) => console.log(val);
// const arrFuncExample = val = 100 => console.log(val);