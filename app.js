function numeroMayor() {
    let numeros = [];
    let seguirIngresando = true;
  
    while (seguirIngresando) {
      let numero = prompt("Ingresa un número (o escribe 'salir' para detenerte):");
      
      if (numero.toLowerCase() === "salir") {
        seguirIngresando = false;
      } else {
        numero = parseFloat(numero); // Convertimos la entrada a un número flotante
        if (!isNaN(numero)) { // Comprobamos si el usuario ingresó un número válido
          numeros.push(numero);
        } else {
          alert("Ingresa un número válido o escribe 'salir' para detenerte.");
        }
      }
    }
  
    if (numeros.length === 0) {
      alert("No ingresaste ningún número.");
    } else {
      let numeroMasGrande = Math.max(...numeros);
      alert("El número más grande ingresado es: " + numeroMasGrande);
    }
  }


  function esPalindromo(palabra) {
    palabra = palabra.replace(/\s/g, "").toLowerCase();
    let reverso = palabra.split("").reverse().join("");
    return palabra === reverso;
  }
  
  function validarPalindromo() {
    let palabra = prompt("Ingresa una palabra o frase:");
    if (esPalindromo(palabra)) {
      alert("Es un palíndromo.");
    } else {
      alert("No es un palíndromo.");
    }
  }
  
  // Asignar el evento de clic al botón
  const botonValidar = document.getElementById("botonValidar");
  botonValidar.addEventListener("click", validarPalindromo);
  
  function sumaDigitos(numero) {
    let suma = 0;
    while (numero > 0) {
      let digito = numero % 10;
      suma += digito;
      numero = Math.floor(numero / 10);
    }
    return suma;
  }
  
  function calcularSuma() {
    const numeroInput = document.getElementById("numero");
    const resultadoDiv = document.getElementById("resultado");
    const numero = parseInt(numeroInput.value);
  
    if (isNaN(numero)) {
      resultadoDiv.textContent = "Por favor, ingresa un número válido.";
    } else {
      const resultado = sumaDigitos(numero);
      resultadoDiv.textContent = "La suma de los dígitos del número " + numero + " es: " + resultado;
    }
  }
  
  function numeroAleatorio(){
      function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
   }

    let rangoMin = parseInt(prompt("Ingresa el valor mínimo del rango:"));
    let rangoMax = parseInt(prompt("Ingresa el valor máximo del rango:"));
    let numeroAleatorio = generarNumeroAleatorio(rangoMin, rangoMax);
    document.getElementById("respuesta4").textContent = "El número aleatorio generado es: " + numeroAleatorio;

  }

  function Fibonacci(){
    function generarSecuenciaFibonacci(numero) {
      let secuencia = [0, 1];
      let siguiente = secuencia[0] + secuencia[1];

      while (siguiente <= numero) {
          secuencia.push(siguiente);
          let longitud = secuencia.length;
          siguiente = secuencia[longitud - 2] + secuencia[longitud - 1];
      }

      return secuencia;
  }

  let numeroFibonacci = parseInt(prompt("Ingresa un número para generar la secuencia Fibonacci:"));
  let secuenciaFibonacci = generarSecuenciaFibonacci(numeroFibonacci);
  document.getElementById("respuesta5").textContent = "La secuencia Fibonacci hasta " + numeroFibonacci + " es: " + secuenciaFibonacci.join(", ");
  }