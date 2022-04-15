// ES6 позволяет использовать метод super в (безклассовых) объектах с
// прототипами. Вот простой пример:

var parent = {
    foo() {
        console.log("Привет от Родителя!");
    }
}

var child = {
    foo() {
        super.foo();
        console.log("Привет от Ребёнка!");
    }
}

Object.setPrototypeOf(child, parent);
child.foo(); // Привет от Родителя!
             // Привет от Ребёнка!