const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 12);
    console.log(number);
    setTimeout(
        () => (number > 4 ? resolve(number) : reject(new Error("Menor a 4"))),
        2000
    );
});

/*
promise
    .then((number) => console.log(number))
    .catch((error) => console.error(error));    
    */



console.log('1. Iniciando Proceso...');
const otraPromesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('2. Ejecutando proceso...');
        resolve(true);
    }, 2000);
});

otraPromesa1
    .then((res) => {
        console.log('3. Proceso finalizado...');
    });
