

console.log('Inicio de programa'); // 1

setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 );// 5


setTimeout( () => {
    console.log('Segundo Timeout');
}, 1 );// 2


setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );// 3


console.log('Fin de programa');//4


