// Loop (basics) понятие цикла


const numbers = [1, 2, 32, 54, 85];
// let index = 0
// while(index < numbers.length) {
//     console.log(numbers[index] * 2)
//     index++;
// }

// console.log('Hello after while')


//  for 
 for(let i = 0; i < numbers.length; i++) {
numbers[i] *=2
console.log(numbers[i])
 }
 console.log('end for loop')



 // Понятие функции

function sum(a, b) {
    // return a+b
    // console.log('a', a)
    // console.log('b', b)
    return a + b
}
// console.log(sum(1, 5))
const x = sum(1, 5)

function getNumberDate(quetion) {
    while (true) {
        const res = +prompt(quetion)

        if (res === 0 || res) {
            return res;
        }
    }
}
const age = getNumberDate("Сколько тебе лет?")
console.log(age)



const adi6969 = [
    {
        "id": 1,
        "username": "admin",
        "password": "admin_123",

    },

    {
        "id": 1,
        "username": "admin",
        "password": "admin_111124",

    },

    {
        "id": 1,
        "username": "admin",
        "password": "admin_32567",

    }

]


// оператор in
// const developer = {
//     name: 'Vasiliy',
//     surname: 'Petrov',
//     age: 30,
//     skills: ['JavaScript', 'TypeScript', 'CSS'],
//     isMaried: false,
// }



// console.log('name' in developer)  // проверяет есть ли ключ с именем 'name' в объекте developer - выдаст true если он есть и false если нет



// // цикл for...in

// for (let prop in developer) {
//     console.log(prop)         // будет последовательно перебирать   имена ключей объекта (name, surname, age, skillsisMaried)
// }

// // Если нужно передать еще и значения ключе 
// for (let prop in developer) {
//     console.log(prop, developer[prop])         // будет последовательно перебирать   имена ключей  b b[ pyfxtybzобъекта (name: Vasiliy, surname: Petrov) и т.д
// }

// // for..of

// const numbers = [1, 2, 3, 4, 5];
// for (number of numbers) {
//     console.log(number) // последовательно выведет элементы массива
// }


/*const adi6969 = [
    standar =
    {
        "id": 1,
        "username": "admin",
        "password": "admin_123",

    },
    premium =
    {
        "id": 2,
        "username": "admin",
        "password": "admin_111124",

    },
    vip =
    {
        "id": 3,
        "username": "admin",
        "password": "admin_32567",

    }

]
*/

const data =
 [
    {
        "id": 1,
        "username": "admin",
        "password": "admin_123",
        "count": ["135", "525", "856"]

    },
    
    
]
// console.log(data[0].count[0], data[0].count[1], data[0].count[2])

console.log(data[0].count.join(", "))
