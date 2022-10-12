// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.

// function sum(numberOne , numberTwo) {
//     // insert code
//   }

  function sum(numberOne , numberTwo) { //No es la mejor forma de solucionarlo
    const value = numberOne - numberTwo; //No es la mejor forma de solucionarlo
     if (value === 0) { //No es la mejor forma de solucionarlo
      console.log("Value are the same:",numberOne)//No es la mejor forma de solucionarlo
     } else if (value >= 0) {//No es la mejor forma de solucionarlo
        console.log(numberOne);   //No es la mejor forma de solucionarlo          
     } else if (value <= 0) { //No es la mejor forma de solucionarlo
        console.log(numberTwo);//No es la mejor forma de solucionarlo
     } //No es la mejor forma de solucionarlo
  }//No es la mejor forma de solucionarlo
  sum(100, 100);//No es la mejor forma de solucionarlo

  function sum1(numberOne , numberTwo) {
   console.log(Math.max(numberOne, numberTwo))  
 }
 sum1(15,15);

//  **Iteración #2: Buscar la palabra más larga**

// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

// const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
// function findLongestWord(param) {
//   // insert code
// }


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
   let maxWord = param[0];
   let maxWordLenght = param[0].length;
   const paramLength = param.length; 
   for (let i = 0; i < paramLength; i++) {
        let currentWord = param[i];
      let currentWordLength = param[i].length;
      if (maxWordLenght < currentWordLength) {
         maxWord = currentWord;
         maxWordLenght = currentWordLength;
        
      }
     
   }
      return maxWord ;
      
      
  }
console.log(findLongestWord(avengers));

// **Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

// Puedes usar este array para probar tu función:

// const numbers = [1, 2, 3, 5, 45, 37, 58];

// function sumAll(param) {
//   // insert code
// }

const numbers = [1, 2, 3, 5, 45, 37, 58];



function sumNumbers(param) {
   let result = 0;
   let resultLenght = param.length;
   for (let i = 0; i < resultLenght; i++) {
      result += param[i];
   
} return result;
};

console.log(sumNumbers(numbers));

// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
   let result = 0;
   let resultLenght = param.length;
   for (let i = 0; i < resultLenght; i++) {
      result += param[i];
   
}
    return result/2;
};
console.log(average(numbers2));

// Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de 
//lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
// function averageWord(param) {
//   // insert code
// }
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
   let result = 0;
   let resultLenght = param.length;
   for (let i = 0; i < resultLenght; i++) {;
      if (typeof param[i] == "string") {;
         result += param[i].length;
      }else if (typeof param[i] == "number"){;
         result += param[i];
      }   
}
    return result
};
console.log(averageWord(mixedElements));
