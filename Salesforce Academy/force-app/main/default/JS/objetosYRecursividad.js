// Para poner comillas dentro de un nstring se puede haver:
let string = 'I am a "double quoted" string inside "double quotes".'

console.log(string)


///////////  /** OBJETOS **/  ///////////////
// Crea un objeto que represente a un perro llamado myDog que contenga las propiedades name 
// (una cadena), legs, tails y friends.
let myDog = {
    name: 'nombre',
    legs: 3,
    tails: 1,
    'my Friends': [1, 2, 3, 4],
    100: 50
}
console.log(myDog.name)
console.log(myDog[100])
console.log(myDog['tails'])
console.log(myDog['my Friends'])

// Añadiendo new elemento al Objeto
myDog.color = 'white'
console.log(myDog)

// Eliminando algun elmento del Objeto
delete myDog.tails
console.log(myDog)

// Uso de objeto en funcion para evitar if / else / switch.
function anyFunc(value) {
    let res = ''
    let lookup = {
        alpha: 'Adams',
        bravo: 'Boston',
        charlie: 'Chicago',
        delta: 'Denver',
        echo: 'Easy',
        foxtroit: 'Frank'
    }
    res = lookup[value]
    return res
}
console.log(anyFunc('bravo'))

/// hasOwnProperty = Sirve para verificar si existe una propiedad dentro del objeto.
function checkObj(obj, checkProp) {
    let exist = obj.hasOwnProperty(checkProp)
    exist
    return exist ? obj[checkProp] : 'Not Found'
}
checkObj(myDog, 'name')

/**
 * Tu función siempre debe devolver el objeto de colección de registros completo.
Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
Si value es una cadena vacía, elimina esa propiedad prop del álbum.
 */
//
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value.length != 0) {
        records[id][prop] = value
    } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') == false && value.length != 0) {
        records[id][prop] = [value]
    } else if (prop === 'tracks' && value.length != 0) {
        records[id][prop].push(value)
    } else if (value.length == 0) {
        delete records[id][prop]
    }
    return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
//console.log(recordCollection)

function sum(arr, n) {
    // Cambia solo el código debajo de esta línea
    if (n <= 0) {
        return 0
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
    // Cambia solo el código encima de esta línea
}

console.log(sum([2, 3, 4, 5], 3))


// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

// function lookUpProfile(name, prop) {
//     let exist = false
//     for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i]['firstName'] === name && contacts[i].hasOwnProperty(prop) == true) {
//             exist = true
//             return contacts[i][prop]
//         }
//     }
//     for (let j = 0; j < contacts.length; j++) {
//         if(contacts[j]['firstName'] === name && contacts[j][prop] == undefined){
//             return 'No such property'
//         }
//     }
//     if (!exist){
//         return 'No such contact'
//     }  
//   }

function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

// console.log(lookUpProfile("Kristian", "lastName"))
// console.log(lookUpProfile("Sherlock", "likes"))

/** RECURSIVIDAD  */
function contar(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i)
    }
}

function contarRecursivo(n) {
    let res = 0
    if (n == 0) return 0; // return hara que la funcion termine.
    res = n + contarRecursivo(n - 1)
    return res
}

console.log(contarRecursivo(3))
/*
 Para que la recursividad funciona:
   1. Tiene que tener una decision donde se termine el proceso.
   2. Se ejecuta el codigo y el proceso que queremos.
   3. Se llama a la funcion pero se decrementa alguna variable para que se corte en algun punto.
*/
function factorial(n) {
    if (n == 0 || n == 1) return 1;
    let res = 1
    for (let i = n; i >= 1; i--) {
        res *= i
    }
    return res
}


function factorialRecursivo(n) {
    let res = 1
    if (n == 0 || n == 1) return 1;
    res = n * factorialRecursivo(n - 1)
    return res
}

/**
 * Hemos definido una función llamada countdown con un parámetro (n). La función debe usar recursión para devolver
 *  un arreglo conteniendo los n enteros hasta 1 basado en el parámetro n. Si la función es llamada con un número 
 * menor a 1, la función debe devolver un arreglo vacío. Por ejemplo, llamar esta función con n = 5 debe devolver 
 * el arreglo [5, 4, 3, 2, 1]. Tu función debe usar recursión llamándose a sí misma y no debe usar bucles de 
 * ningún tipo.
 */
function countdown(n) {
    if (n < 1) return []
    let arr = countdown(n - 1)
    arr.push(n)
    let arrr = arr.sort((a, b) => b - a)
    return arrr
}


function rangeOfNumbers(startNum, endNum) {
    let arr = []
    for (let i = startNum; i <= endNum; i++) {
        arr.push(i)
    }
    return arr
};

function rangeOfRecursive(startNum, endNum) {
    if (startNum == endNum + 1) return []

    let arr = rangeOfRecursive(startNum + 1, endNum)
    arr.unshift(startNum)
    return arr
};
console.log(rangeOfRecursive(4, 10))


// Aparte del metodo hasOwnProperty() tambien se puede verificar la propiedad de un objeto 
// Con la palabra clave in
const student = {
    nombre: 'Cris',
    '100d': 45
}
console.log(student.hasOwnProperty('nombre'))
console.log('nombre' in student)
console.log('100d' in student)

