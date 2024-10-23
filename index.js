// все сущности в JS это объекты
// объект это набор свойств "ИМЯ:ЗНАЧЕНИЕ"
// массив, фукнция это объекты 
// число, строка это объект (ведут себя как объекты)
// объект  точечная запись метод   вызов метода (значение типа: строка (либо '' либо ""))
// console         .        log    ('Hello World')         это выражение!
// console.dir()     увидеть все свойства объекта
// console.table()   увиддеть все свойства объекта в табличном виде

          // Выражение все возвращает значение
//    || - или        !== - не равно         <= меньше либо равно
// a = 5   присваивание
// b++ увеличивает значение переменной  b на 1

        // переменные дают возможность повторного доступа к значениям
        // имена переменных 1)PascalCase Типы и классы (каждая буква с заглавной)
        //                  2)DB_PASSWORD (значение известны до запуска приложения и не меняются)   (например:CONST_API)
        //                  3)camelCase все остальные переменные (исп чаще всего)
        // названия должны быть понятны

        // объявление переменных:
        //              1) let   (после присваивания значения переменной, можно переприсвоить этой же переменной новое значение (let a = 10, a = 20))  
        //              2) const (const c = 10!!! (обязательно в одной строке), нельзя присвоить новое значение как в let)
        //              3) var 
                                
                                //  Пример //  
                //console.log(a) // ReferenceError: a is not defined
                //let a   (объявление)
                //console.log(a) // undefined
                //a = true (присваивание)
                //console.log(a) // true
                
                //let ivan
                //console.log(ivan)
                //    undefined
                //ivan = 'ivan'
                //console.log(ivan)
                //    ivan

                //const myName = 'ivan'
                    //myName = '' //TypeError: Assignment to constant variable.
                //console.log(myName)
    //тип переменной определется типом присвоенного значения
// const a = 10 (10 это число, то есть a это число)
// const b = 'abc' ('abc' это строка, то есть b это строка) (можно "")

    //Типы:
//Примитивные типы:
    //1. string (строка) ('abc)
    //2. boolean (логический) (true / false)
    //3. number (число) (0, 5, -5, 1.005)
    //4. null       (на данном этапе значение отсутствует(мы сами присваиваем, потому что вскоре можно присвоить))
    //5. undefined  (значения у переменной отсутствует(не определено))
    //6. symbol (символ) (можно создавать уникальные значения(используется редко))

//Ссылочный тип:                  ссылка этого объекта в памяти ПК
    //1. object (объект), например 0x3151 {
//        a:10, 
//        b:blue 
//    }

// const objectA = {
//    a:10,
//    b: true
//    }

//    const copyOfA = objectA
//    copyOfA.a = 20 
         // objectA.a --- 20


         /// динамическая типизация
// одной и той же переменной можно присваивать разные типы (let )
    // пример:
        // let a =10
        // a = ture
        // a = 'Ivan'
        // a = undefined 

    // function a() {
//        console.log ('Hey there')
//      }
//      a ()    // Hey there
//      a = 10
//      a() // будет ошибка потому что a это уже не функция 'a is not a function'

// const - позволяет предотвратить возможные проблемы связанные  с динамической типизацией

// const a = () => {
//    console.log('Hey there')
//}
// a() // 'Hey there'
// a = 10 // TypeError: Assignment to constant variable (присваивать новые переменные с помощью const нельзя)
// a()

// Правила работы с переменными:
// 1. Все переменные объявлять перед их использованием
// 2. Стараться использовать const везде, где это возможно

                                            // ОБЪЕКТЫ
// const myCity = {
//      city: 'Volgograd',
//      popular: true,
//      country: 'Russia'
//}

// console.log (myCity.city) // 'Volgograd'
// console.log (myCity.popular) // true

// . --- точечная запись    (можно менять значения)

// изменение значений свойств
// const myCity = {
//      city: 'Volgograd',
//}
// myCity.city = 'Uhta'
// console.log (myCity)         // {city: 'Uhta'}

// const myCity = {
//      city: 'Volgograd',
//}
// myCity.popular = 'true'
// myCity.country = 'Russia'      
// console.log(myCity)               // {city: 'Volgograd', popular: true} (добавили в myCity новое свойство)


//           удаление свойств в объекте

// const myCity = {
//      city: 'Volgograd',
//      popular: true,
//      country: 'Russia'
//}

// delete myCity.country     (удалили свойство country)
// console.log(myCity)   // {city: 'Volgograd', popular: true}


//              Доступ к значению свойства с использованием скобок (квадратные скобки)

// const myCity = {
//      city: 'Volgograd',
//}
//          свойство
// myCity['popular'] = true
// console.log(myCity)           // {city: 'Volgograd', popular: true}

//const countryPropertyName = 'country'
//myCity[countryPropertyName] = 'Russia'      !!!
// console.log(myCity)                              // {city: 'Volgograd', popular: true, country: 'Russia'}


//                                   Вложенные свойства объекта
// const myCity = {
//      city: 'Volgograd',
//      info: {
//            isPopular: true,
//            country: 'Russia'
//        }
//}

// console.log(myCity.info.isPopular)    // true

// delete myCity.info['isPopular']

// console.log(myCity)   //       {city: 'Volgograd', info: {country: 'Russia'}}

// кв свобки использовать когда название переменной


//                               использование переменных при формировании переменных
// const name = 'Ivan'
// const postsQty  = 23

// const userProfile = {
//    name: name,                   // (имя свойства совпадает с переменной)
//    postsQty: postsQty,
//    hasSignedAgreement: false
// } 

//              можно сделать так:
 const name = 'Ivan'
 const postsQty  = 23

 const userProfile = {
    name,                   
    postsQty,
    hasSignedAgreement: false
 }


// Методы оюъектов:
// Метод - это свойство объекта, значение которого - функция

const myCity = {
    city: "Volgograd",
    cityGreeting: function () {                //(Метод)
        console.log ("Greetings!!")
    }
}

myCity.cityGreeting()    
// Вывод: Greetings!!

// Сокращенный формат записи методов:
// Можно в примере выше исключить function

// Сравнение VS свойства объектов
myCity.city //(доступ к значению обхекта)
myCity.cityGreeting()    //  (Вызов метода)


//                                           JSON (JS object notation)
 const a =  {
    "userId": 1,
    "id": 1,
    "title": "Text title",
    "status": {
        "complited": false
    }
}

// JSON передает из объекта в строку JSON

// Конвертация JSON  в объект JS:
// JSON.parse() --- парсит из строки в объект (JS объект)

// Из  JS объекта в JSON строку с помощью:
// JSON.stringify() --- 

const post = {
    title: 'My post',
    likeQty: 5
}

JSON.stringify(post)
//Вывод : '{"title":"My post","likeQty":5}'

const postStringified = JSON.stringify(post)
JSON.parse(postStringified )
// Вывод: {title: 'My post', likeQty: 5}


//                                      Мутация в JavaScript
const person = {
    name: 'Ivan',
    age: 23
}

person.age = 24
person.isAdult = false

console.log(person.age)   // 24
console.log(person.isAdult)   // false

// Мы изменили const поскольку объект это ссылочный тип

//                                          Мутирование копий

const person = {
    name: 'Ivan',
    age: 25
}

const person2 = person  // скопировали ссылку

person2.age = 26
person2.isAdult = true

console.log(person.age) // 26
console.log(person.isAdult) // true


//                                                  Избежать мутации можно:

// вариант 1:
const person = {
    name: 'Ivan',
    age: 25
}

const person2 = Object.assign({}, person)  // создали новый объект
// с помощью assing можно создавать новые объекты (на основании оьъекта person)
person2.age = 26

console.log(person2.age) // 26
console.log(person.age)  // 25

// вариант 2
const person = {
    name: 'Ivan',
    age: 25
}

const person2 = {...person}   // ... Оператор разделения объекта на свойства

person2.name = 'Alica'

console.log(person2.name) // Alica
console.log(person.name)  // Ivan


// вариант 3
const person = {
    name: 'Ivan',
    age: 25
}
//             конв в объект    конв в строку
const person2 = JSON.parse(JSON.stringify(person))  // двойная ковертация, и получаем новый объект,
// person в скобках* -- ссылка на вложенные объекты не сохраняются

person2.name = 'Alica'

console.log(person2.name) // Alica
console.log(person.name)  // Ivan



//                                      Функции
// Функция это блок кода который можно выполнять многократно

let a2 = 5
let b = 3

let c 
c = a + b
console.log(c)    // 8

a2 = 8
b = 12

c= a + b
console.log(c)    // 20

// с помощью функции:

let a3 = 5
let b3 = 3

function sum (a, b) {
    const c = a3 + b3
    console.log(c)
}

sum (a, b)  //8

a3 = 8
b3 = 12

sum (a, b)  // 20


//                  Функции могут быть:
// 1. ... именнованной
// 2. ... присвоена переменной
// 3. ... анонимной
// 4. ... аргументом при вызове другой  функции
// 5. ... значением свойства (метода) объекта

// Функция в JS это объект!!!
//       имя  параметры
function myFn   (a, b) {               //  {тело функции} между {}
    let c
    a = a+1 
    c = a + b
    return c
}
//     аргументы
myFn    (10, 3)   // 14

// Функция возвращает undefined если нет инструкции return

function myFn (){}
myFn () // undefined


//                                          Передача значения по ссылке:

const personOne = {
    name: 'Ivan2',
    age: 21
}

function increasePersonAge(person) {     // Функция мутирует внешний объект
    person.age += 1
    return person
}

increasePersonAge(personOne)             // Передача объекта по ссылке
console.log(personOne.age)   //22


//    Внутри функции не менять внешние объекты 

//      Создание копий объекта:
const personTwo = {
    name: 'Ivan2',
    age: 21
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age +=1
    return updatedPerson
}

const updatedPersonTwo = increasePersonAge(personTwo)
console.log(personTwo.age) // 21
console.log(updatedPersonTwo.age) // 22



// Callback функции:              Вызывается внутри другой функции
function anotherFunction(){
//    ...Действие
}

function fnWithCallback (callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction)


// Пример:
function printMyName () {
    console.log('Ivan')
}
// встроенная функция
        setTimeout   (printMyName, 1000)      // отложенный вызов функции


//                      Правила работы с функциями:

// 1. Называйте функции исходя из выполняемых задач
// 2. Одна функция должна выполнять одну задачу
// 3. Не рекомендуется изменять внешние, относительно функции, переменные

//                                  Области видимости:
// Определяет области и границы переменной:

// Глобальная область видимости
// Локальные области видимости

let q // глобальные переменные
let w // глобальные переменные

function myFn2() {
    let w  // локальная переменная
    q = true
    w = 10
    console.log(w) // 10
}

myFn2()

console.log(q)   // true
console.log(w)   // undefined




//                      Типы областей видимости

// глобальная область видимости
// область видимости функции
// область видимости блока     --- переменные, объявленные  с  помощью let или const внутри блока имеют область видимости, ограниченную этим блоком


//                      Области видимости
function myFn3 () {
    a4 = true
    console.log(a4) // true
}

myFn3()

console.log(a4)     // true
// не рекоменжуеься создавать переменную в локальной области видимости, поскольку она объявится в глобальной области



//                                  Правила работы с переменными
// 1. Все переменные объявлять перед их использованием
// 2. Стараться использовать const везде, где это возможно
// 3. Внутри функции изменять переменные с внешних областей видимости


//                                  Строгий режим:

'use strict'          
function myFn5() {
    a5 = true       // a5 is not defined at myFn4 (переменная a5 нигде не объявлена, и она не создастся в глобальной области переменной)
    console.log(a5)
}

myFn5()

console.log(a5)



//                                  Операторы:
// Оператор - это встроенная функция

// + - * /                      --- арифметические
// === !== <= >=                --- Сравнение
//  ! && ||                     --- Логические
// =                            --- Присваивание

//Текстовые операторы
// typeof --- проверить тип того или иного значения
// instanceof --- принаджелнсть объекта к тому или иному классу
// new
// delete

let a6, b6

a6 = 10
b6 = a6

let c6 = a6 + b6

console.log(c6)   // 20


// Унарные операторы:       У унарных операторов всегда один операнд(аргумент)
// 1. a++                   увеличивает значение переменной на 1
// 2. +а                    конвертировать строку в число
// 3. delete obj.a          
// 4. typeof a              
// 5. new Object()          


// Бинарные операторы:      У бинарных операторов два операнда (аргумента)
// 1. a = 5                  
// 2. a + b                 
// 3. a += 5                Увеличение значение и присваиваем переменной а новое значение
// 4. a === b               Сравнение значения 2х переменных a и b   (как тип так и значение)
// 5. a && b                


// Инфиксная запись
// 1. a = trye                 
// 2. a + b                 
// 3. a += 5                
// 4. a || b               
// 5. a > b

// Префиксная запись
// 1. a++                 
// 2. delete obj.a               
// 3. typeof a

// Постфиксная запись
// 1. a++                 
// 2. myFunction()

// Приоритетность операторов:
// a + b * c / d - e
// a + ((b * c) / (d - e))


//                      Логические операторы
// 1. ! --- не      (всегда возвращает значение типа boolean)
// 2. && --- и      (возвращает значение одного из операндов)
// 3. || --- или    (возвращает значение одного из операндов)


//  Ложные значения:
//Boolean(value) -> false:
        false
        0
        ""
        undefined
        null

// typeof 10 === 'number'     // true


//                  Оператор ! чаще всего используется в условных инструкциях
!10 // false
!0 // true
!'abc' // false
! '' // true
!true // false
!undefined // true

//  Двойное отрицание
!!10 // true
!!0 // false
!!'abc' // true
!! '' // false
!!true // true
!!undefined // false


//                      Операторы && и || являются операторами к.з.
//                 и
// "Выражение 1"  && "Выражение 2"

// Если "выражение 1" ложно, то "выражение 2" игорируется и возвращается результат "выражение 1"

//                или
// "Выражение 1"  || "Выражение 2"
// Если "выражение 1" истино, то "выражение 2" игорируется и возвращается результат "выражение 1"


// Цепочка операторов && и ||
//  если первое ложное, то его и возвращает      
a && b && c && d
//  если первое истина, то его и возвращает
a || b || c || d



// Оператор разделения объекта на свойства ...
const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: "red"            // Добавляем в button свойство color
}

console.table(redButton)


// Если у объекта button есть свойство color, то значение будет перезаписано

// Чтобы соединить два объекта, нужно определить новый объект и через ... пишем названия других объектов, из которых будет состоять новый объект
const button1 = {
    ... buttonInfo,
    ... buttonStyle
}



//              Конкатенация строк: (соединение)
//'Hello ' + 'World'   // 'Hello World'

//const hello = 'Hello'
//const world = 'World'

//const geeting = hello + ' ' + world // Hello World


//              Шаблонные строки 
//const hello = 'Hello'
//const world = 'World'
//const geeting = `${hello} ${world}` // `обратные ковычки  ``````
//console.log (geeting)   // 'Hello World'


//const name40 = 'Иван'
//const city40 = 'Волгоград'
//const geeting1 = `Меня зовут ${name40} и я живу в городе ${city40}`
//console.log (geeting1)


//                              Фукнциональные выражения:
//      Объявленная функция: 
//function myFN (a, b) {
//    let c 
//    a = a + 1 
//    c = a + b
//    return c 
//}

//      Функциональное выражение:
//function (a, b) {
//    let c 
//    a = a + 1 
//    c = a + b
//    return c 
//}

const myFunction1 = function(a, b) {
    let c 
    a = a + 1 
    c = a + b
    return c 
}

myFunction1(5, 3)    // 9


setTimeout(function(){
    console.log('Отложенная функция')
}, 5000)


//                      Стрелочные фукнции:

//(a, b) => {
//    let c 
//   a = a + 1 
//    c = a + b
//    return c 
//}

// Стрелочная функция - выражение и они всегда анонимны

const myFunction2 = (a, b) => {
    let c 
    a = a + 1 
    c = a + b
    return c 
}

myFunction1(5, 3)    // 9

// Отличие в том, что в определении стрелочной функции с помощью const мы исключаем возможность изменения свойств функции, а при определении функции с помощью
// function и ее названием, тогда будет возможность изменять ее свойства
setTimeout(() => {
    console.log('Отложенная функция')
}, 5000)


// Сокращаем стрелочные функции
// Можно убрать (), если одна переменная, но лучше ставить
a => {
    //тело функции
}

(a, b) => a + b


//                        значение по умолчянию
function multByFactor (value, multiplier = 1) {
    return value * multiplier
}

multByFactor(10, 2 )   // 20
multByFactor (5)       // 5


const newPost = (post, addetAt = Date()) => ({
    ...post, 
    addetAt,
})

const firstPost = {
    id:1, 
    author:  'Ivan'
}

a10 = newPost(firstPost)
console.table(a10)
// Вывод:
//(index)
//Value
//id	1
//author	'Ivan'
//addetAt	'Tue Oct 15 2024 18:54:57 GMT+0300 (Москва, стандартное время)'


// Обработка ошибок в JS
//const fnWithError = () => {
//    throw new Error ('Some error')
//}

//fnWithError()  // Uncaught Error(не пойманная ошибка)

//console.log('Continue...')




//                                                          решение try/catch

try {
    // Выполнение блока кода
} catch (error) {
    //Этот блок выполняется в случае возникновения ошибок в блоке try
}

// Пример:
const fnWithError = () => {
    throw new Error ('Some error')
}

try {
    fnWithError()  
} catch (error) {               // catch - ловить
    console.error(error)        // выведение ошибки 
    console.log(error.message)  // выведение тест ошибки
}

console.log('Continue...')

// Вывод:
// VM210:8 Error: Some error
// at fnWithError (<anonymous>:2:11)
// at <anonymous>:6:5
// (anonymous) @ VM210:8
// VM210:9 Some error
// VM210:12 Continue...


//              Инструкции:
// 1. Выражение                 (всегда возвращает значение)
// 2. Инструкция                (let a)(Выолняет действия)
// 3. Выражение-инструкция


//Примеры инструкций:
let v;
const m = 5;

if (v > m) {                              // Выполняет действия
    console.log('v is larger');
}                                          // <===

for (let i=0; i++; i < 5) {
    console.log(i);
}                                          // <===

// Инструкции обычно заканчиваются точкой-запятой (исключение: точка с запятой не требуется после блока инструкций)
// Точку с запятой можно опускать
// Выражение может быть инструкцией

// Выражения - инструкции:
'abc';
a = a + 3;
c = a + b;
d = 'Good ' + 'Evening';
myFunction1(c, d);
console.log('Hey!');

//                          Массив
// Массив - это с объект с цифровыми именами свойств
// формат записи массивов:

//const myArray = [1, 2, 3]
//console.log(myArray)                // [1, 2, 3]


// Изменение значения lenght, в массиве указать [empty + 4]
const myArray = [1, 2, 3, 4]
console.log(myArray) //   [1, 2, 3, 4]
console.log(myArray.length)  /// 4

myArray[2] = 'abc'  // <--- изменение 

console.log(myArray) // [1, 2, abc, 4]
console.log(myArray.length)  /// 4

myArray[4] = true    // <--- добавление

console.log(myArray) // [1, 2, abc, 4, true]
console.log(myArray.length)  /// 5



// Методы массивов    (функции высшего порядка массивов(методы прототипов))
// 1. push          --- добавить элемент в конец массива 
// 2. pop           --- удаление последнего элемента в массиве (myArray.pop()), возвращает удаленный элемент если myArray.pop() после =
// 3. shift         --- удаляет первый элемент в массве myArray.shift(), возвращает удаленный элемент myArray.shift() после =
// 4. unshift       --- добавить элемент в начало массива (myArray.unshift(true(или любое другое значение)))
// 5. forEach       --- в вызов метода передается функция   
    //const myArray2 = [1, 2, 3, 4]
    //myArray2.forEach(el => console.log(el*2))    // callback функция!!!
    //console.log(myArray2)         // 2 4 6 8 
// 6. map           --- создает новый массив после выполнения цикла
    //const myArray2 = [1, 2, 3, 4]
    //const newArray2 = myArray.map(el => el*3)             // callback функция!!!
    //console.log(newArray2) // [3, 6, 9, 12]
    //console.log(myArray2) // [1, 2, 3, 4]

// Возврат результата работы функции: явно - с помощью return, неявно - цикл возвращает в консоль значения без return


//                      Деструктуризация объектов:
const userProfile1 = {
    names: 'Ivan',
    commentQty: 23,
    hasSignedAgreement1: false,
}

const {names, commentQty} = userProfile1           // Объявление новых переменных и присваивание значений на основе значений свойств объекта
const {hasSignedAgreement1} = userProfile1

console.log(names)          //Ivan
console.log(commentQty)     // 23


//                      Деструктуризация массивов:
const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits                 // Объявление новых переменных и присваивание значений на основе элементов массива

console.log(fruitOne)       // Apple
console.log(fruitTwo)       // Banana

//                      Деструктуризация в функциях
const userProfile2 = {
    names2: 'Ivan',
    commentQty2: 23,
    hasSignedAgreement2: false,
}

const userInfo = ({names2, commentQty2}) => {
    if (!commentQty2) {                                         // если commentQty2 равен 0, то возвращает 907 строку
        return `User ${names2} has no comments`
    }
    return `User ${names2} has ${commentQty2} comments`         // если отличен от 0, целое число, то возвращает 909 строку
}

userInfo(userProfile2)                                          // 'User Ivan has 23 comments'



//                      Условные инструкции:
// 1. if
// 2. if ... else
// 3. if else if
// 4. switch
// 5. тернарный оператор

// 1. if:
//if (условие) {
    // блок кода выполняемый ОДНОКРАТНО, если условие правдиво
//}

// Пример:
let val = 10 
if (val > 5) {
    val += 20
}

console.log(val)  //    30 

// Пример if  с оператором отрицания:
const person3 = {
    age: 20
}

if (!person3.name) {
    console.log('Имя не указано')
}

// if - else
if (Условие) {
    // блок кода, выполняемый однократно, если условие правдиво
} else {
    // блок кода, выполняемый однократно, если условие ложно
 }
 

// Пример if - else 
let val1 = 10 

if (val1 < 5 ) {
    val1 += 20
} else {
    val1 -= 20
}

console.log(val1)   // -10 


// if else if
// if (условие1) {
     // блок кода, выполняемый однократно, если условие  1 правдиво
// } else if (условие 2) {
     // блок кода, выполняемый однократно, если условие  2 правдиво
// } else {
     // блок кода, выполняеиый однократно, если предыдущие условия ложны
// }



// Предпочтительный формат записи if
// if (условие1) {
     // блок кода, выполняемый однократно, если условие  1 правдиво
// }

// if (условие2) {
     // блок кода, выполняемый однократно, если условие  2 правдиво
// }

// if (условие3) {
     // блок кода, выполняемый однократно, если условие  3 правдиво
// }

const age = 25

if (age > 18) {
    console.log('Is adult')
} else if (age >=12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}

// Если 25, то                  Is adult
// Если от 12 вкл до 18, то     Is teenager
// Есди от 0 до 12, то          Is child
// Если будет 12, то выполнится второе условие первее и выведет 'Is teenager'

const age1 = 25

if (age1 >= 18) {
    console.log('Is adult')
}  
//            и
if (age1 >=12 && age1 < 18) {
    console.log('Is teenager')
} 

if (age1 < 12){
    console.log('Is child')
}

// 25 Is adult
// 16 Is teenager
// 11 Is child


//                      Использование IF  в функциях
const sumPositiveNumbers = (a11, b11) => {
    if (typeof a11 !== 'number' || typeof b11 !== 'number') {
        return 'One of the arguments if not a number'
    }
    if (a11 <= 0 || b11 <= 0) {
        return 'Numbers are not positive'
    }
    return a11 + b11
}

sumPositiveNumbers(true, 3)     // 'One of the arguments if not a number'
sumPositiveNumbers(5, 3)        // 8
sumPositiveNumbers(-2, 3)       // 'Numbers are not positive'


//                                  Switch
switch(Выражение) {
    case A:
        // Действия если выражения === A
        break
    case B:
        // Действия если выражения === B
        break
    default:
        // Действия по умолчанию
}


/// Пример:

const month = 2

switch (month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Январь')
        break
    case 2:
        console.log('Февраль')
        break
    default:
        console.log('Это не зимний месяц')
}


//      Тернарный оператор (есть 3 операнда)
// Конструкция с тернарным оператором - выражение(возвращает значение)
// ? и : --- синтаксис тернарного оператора

// Условие ? Выражение 1 : Выражение 2
//              или
// Условие
//    ? Выражение 1
//    : Выражение 2

// Пример 1:
const value11 = 11

value11
    ? console.log('условие истино')
    : console.log('условие ложно')

// при value11 = 11 --- 'условие истино'
// при value11 = 0  --- 'условие ложно'

// Пример 2:
const value12 = 12
const value25 = 25

value12 && value25
    ? myFunction3 (value12, value25)
    : myFunction4 ()


// Пример 3:
let value15 = 15
console.log(value15 >= 0 ? value15 : -value15)  // 15

value15 = -15
const res = value15 >= 0 ? value15 : -value15
console.log(res)                                // 15



//                              Циклы (все циклы это инструкции, не выражения!!!)
//  Типы циклов 
// 1.for
// 2. for ... in
// 3. while 
// 4. do ... while
// 5. for ... of ...

// For 
//for (Начальная инструкция; Условие; Итерационное действие) {
//    // Блок кода, выполняемый на каждой итерации
//}

// Пример:
for (let i = 0; i<5; i++ ) {
    console.log(i)
}

// Циклы можно использовать для массивов (не рекомендуется), лучше использовать forEach, map, reduce


const Array = ['first', 'second', 'third']

for (let i = 0; i < Array.length; i++) {
    console.log(Array[i])
}
//first
//second
//third

// Метод массивов forEach
const Array1 = ['first', 'second', 'third']

Array1.forEach((element, index) => {
    console.log(element, index)
})
// first 0
// second 1
// third 2


//                                  Цикл while
//                      цикл выполняется пока условие правдиво
//  while (Условие) {
//      // Блок кода, выполняемый на каждой итерации
//  }

let i = 0
while (i<5) {
    console.log(i)
    i++
}
// 0
// 1
// 2
// 3
// 4


// Цикл do while (блок кода выполняется хотя бы 1 раз)
//do {
//    // Блок кода, выполняемый на каждой итерации
//} while (Условие)

// Пример 1
let i2 = 0
do {
    console.log(i2)
    i2++
} while (i2<5)

// 0
// 1
// 2
// 3
// 4

// Пример 2 с 1 выполненным действием
let i3 = 10
do {
    console.log(i3)
    i3++
} while (i3<5)
// 10



// Цикл for  ... in
// key - название свойства каждого объекта
for (key in Object) {
    // Действия с каждым свойством объекта
    // Значение свойства - Object[key]
}

// Цикл для объекта
const myObject = {
    x: 10, 
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}
// x 10
// y true
// z abc
// key - название свойств

const myObject1 = {
    x: 10, 
    y: true,
    z: 'abc'
}

Object.keys(myObject1).forEach(key => {
    console.log(key, myObject1[key])
})


const myObject3 = {
    x: 10, 
    y: true,
    z: 'abc'
}
    // получение значений свойств объекта
Object.values(myObject3).forEach(value => {
    console.log(value)
})
// 10
// true
// abc

Object.keys({})
// [] --- выведит массив

// keys - выводить свойство
// values - выводит значение свойства
Object.keys({name: 'Ivan'})
// [name]
Object.values({name: 'Ivan'})
// [Ivan]

// For in для массивов
const Arrays = [true, 10, 'abc', null]

for (const key in Arrays) {
    console.log(Arrays[key])
}

// true
// 10
// abc
// null


// Цикл for of 
for (Element of Iterable) {
    // Действие с определеным элементом
}

// Пример
const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
}

// Пример 2
const Array2 = [true, 10, 'abc', null]

for (const element of Array2) {
    console.log(element)
}
// true
// 10
// abc
// null

// Для массивов использовать forEach


// For of не для объектов
// Пример:
let myObject4 = {
    x: 10, 
    y: true,
    z: 'abc'
}

for (const prop of myObject4) {
    console.log(prop)
}



//                      Модули:
// Модули позволяют структурировать код 
// src - исходники
// Модули позволяют избегать дублирования блоков кода

                    // Export / Import: (Появился в ES6)


// 1st.js
const myName1 = () => {
    console.log('Ivan')
}
export default myName1

//2nd
import printMyName from './1st.js'
printMyName ()  // Ivan

// Разные названия переменной, тк export default
// Доп информацию смотреть в файлах index1.mjs и index2.mjs


// Правила работы с модулями:
// 1. Модули должны быть одноцелевыми
// 2. Распологайте все export инструкции внизу файла (в конце файла)
// 3. Распологайте все import инструкции вверху файла
// 4. По возможности использовать export defalt


//          Классы и прототипы
// Синтаксис появился в ES6
//      class...
// Классы позволяют создавать прототипы для объектов
// На основании прототипов создаются экземпляры
// Экземпляры могу иметь собственные свойства и методы
// Экземпляры наследуют свойства и методы прототипов

// Создание экземпляра
class  Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}
        //          вызывается функция
const firstComment = new Comment ('first comment')
console.log(firstComment)

//  Comment { text: 'first comment', votesQty: 0 }

// this  --- переменная указывает на экземпляр класса
// метод constructor создается когда мы создаем  новый экземпляр класса
// upvote --- наследоваться всеми экземплярами этого класса (унаследованный метод) (на уровне прототипа)


// Наследование по цепочке:
// Цепочка прототипов в JS:

firstComment --> Comment -->  Object


// Проверка принадлежности:

class  Comment1 {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}
const secondComment = new Comment1 ('second comment')

secondComment instanceof Comment1   // true
secondComment instanceof Object     // true
            

// Вызов методов:
class  Comment3 {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}

const thirdComment = new Comment3 ('Third Comment')

thirdComment.upvote()
console.log(thirdComment.votesQty)  // 1
thirdComment.upvote()
console.log(thirdComment.votesQty)  // 2
// Можно вызывать многократно

// Проверка принадлежности свойств экземпляру объекта:\
class  Comment4 {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}
const fourComment = new Comment4 ('fourComment')

console.log(fourComment.hasOwnProperty('text'))                 // true
console.log(fourComment.hasOwnProperty('votesQty'))             // true
console.log(fourComment.hasOwnProperty('upvote'))               // false
console.log(fourComment.hasOwnProperty('hasOwnProperty'))       // false


// Создание нескольких экземпляров:
class Comment5 {
    constructor(text) {
        this.text = text 
        this.votesQty = 0
    }
    upvote() {
        this.votesQty + 1
    }
}

const fiveComment = new Comment5 ('fiveComment')
const sixComment = new Comment5 ('sixComment')
const sevenComment = new Comment5 ('sevenComment')



//          Статические методы
class Comment6 {
    constructor(text) {
        this.text = text 
        this.votesQty = 0
    }
    upvote() {
        this.votesQty + 1
    }
    static mergeComments (first, second) {
        return `${first} ${second}`
    }
}
//          Метод доступен как свойство класса и не наследуется экземплярами класса
Comment6.mergeComments('Fitst comment.', 'Second comment')



// Расширение других классов

class NumbersArray extends Array10 {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray10 = new NumbersArray(2, 5, 7)

console.log(myArray10)  // [2, 5, 7]
myArray10.sum()         // 14

// myArray10 ---> NumbersArray ---> Array10 ---> Object


// Строки и числа ведут себя как объекты
const myName2 = 'Ivan'
myName2 // 'Ivan'
myName2.toUpperCase() // 'IVAN'


//              Промисы:
// Промисы позволяют обработать отложенные во времени события
// Промис - это обещание предоставить результат позже
// Состояния промиса:
// 1. Ожидание
// 2. Исполнен
// 3. Отклонен

// Создание промиса
const myPromise = new Promise((resolve, reject) => {
    // Выполнение асинхронных действий
    // Внутри этой функции нужно в результате вызвать одну из функций resolve и  reject
})

// Вновь созданный промис будет в состоянии pending
// resolved --- исполнен
// rejected --- отклонен


// Получение результата промиса
myPromise
    .then (value => {
        // Действия в случае успешного исполнения промиса
        // Значение value = это значение, переданное в вызове функции resolve внутри промиса
    })
    .catch(error => {
        // Действия в случение отклонения промиса
        // Значение error - это значение, переданное в вызове функции reject внутри промиса
    })

// Пример:
const getData = (url) => 
    new Promise ((resolve, reject) => 
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
        
)
getData ('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))



//          ASYNC / AWAIT
// ASYNC асинхронная функция
// Специальный синтаксис для упрощение работы с промисами
async function asyncFn () {
    // Всегда возвращает Промис
}

const asyncFn1 = async () => {
    // Всегда возвращает Промис
    return 'Success!'
}

asyncFn1()

//Promise {<fulfilled>: 'Success!'}
//[[Prototype]]: Promise
//[[PromiseState]]: "fulfilled"
//[[PromiseResult]]: "Success!"



// Пример 1
const asyncFn2 = async () => {
    // Всегда возвращает Промис
    return 'Success!'
}

asyncFn2()
    .then(value => console.log(value))  // Success!

// Пример 2:
const asyncFn3 = async () => {
    throw new Error ('There was an error!')
}
asyncFn3()
// Promise {<rejected>: Error: There was an error!
//     at asyncFn3 (<anonymous>:2:11)
//     at <anonymous>:4:1}

// Uncaught (in promise) Error: There was an error!
// at asyncFn3 (<anonymous>:2:11)
// at <anonymous>:4:1


// Пример 2.1
const asyncFn4 = async () => {
    throw new Error ('There was an error!')
}
asyncFn4()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))

// There was an error!




//                                  AWAIT
//const asyncFn5 = async () => {
//    await <Promise>         
//}

//asyncFn5()

// Внутри ассинхронных функция можно ожидать результатов промисов


// Пример 3:
const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000)
)

const asyncFn6 = async () => {
    console.log('Timer starts')
    await timerPromise()
    console.log('Timer ended')
}
asyncFn6()

// Пример 3.1

const timerPromise7 = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000)
)

const asyncFn7 = async () => {
    console.log('Timer starts')
    const startTime = performance.now()         // performance.now (засечь время)
    await timerPromise7()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}
asyncFn7()

//Timer starts
//Promise {<pending>}
//VM311:11 Timer ended 2011.5


// Пример 4 Переход с  промисов на async // await
// До:
const getData2 = (url) => 
    new Promise ((resolve, reject) => 
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
        
)
getData2 ('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

// После:
const getData3 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

const data = await getData3(url)    // undefined
console.log(data)                   // {userId: 1, id: 1, title: 'delectus aut autem', completed: false} (data - массив объектов)


// Пример с обработкой ошибок:
const getData4 = async (url4) => {
    const res = await fetch(url4)
    const json = await res.json()
    return json
}

const url4 = 'https://jsonplaceholder.typicode.com/todos/1'

try {
    const data = await getData4(url4)
    console.log(data)
} catch (error) {
    console.log(error.message)      // Ошибка: net::ERR_INTERNET_DISCONNECTED при откл интернете
}                                   // Failed to fetch



//  Главное в async/await
// 1. async/await - это систематическая надстройка над промисами
// 2. await синтаксис возможен только внутри async функций
// 3. async функция всегда возвращает Промис
// 4. async функция ожидает результата инструкции await и не выполняет последующие инструкции










