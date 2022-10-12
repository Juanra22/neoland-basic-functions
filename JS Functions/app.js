// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.

// function sum(numberOne , numberTwo) {
//     // insert code
//   }

  function sum(numberOne , numberTwo) {
    const value = numberOne - numberTwo;
     if (value === 0) {
      console.log("Value are the same:",numberOne)
     } else if (value >= 0) {
        console.log(numberOne);             
     } else if (value <= 0) {
        console.log(numberTwo);
     }
  }
  sum(100, 100);
  sum(1,2);
  sum(100, 50);