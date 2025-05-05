const FizzBuzz = require('./FizzBuzz');

describe('FizzBuzz', () => {
  let testPassed = false; // Variable para controlar si el test pasó

  test('should print 1 if they receive 1', () => {
    const expected = 1;
    const result = FizzBuzz(1); // Llamamos a la función FizzBuzz con 1
    expect(result).toBe(expected); // Verificamos si el resultado es 1
    testPassed = true; // Si la prueba pasa, cambiamos testPassed a true
  });

  // Después de todos los tests, verificamos si la prueba pasó
  afterAll(() => {
    if (testPassed) {
      console.log('🎉 ¡Felicitaciones alumno de prodevs! El ejercicio fue resuelto correctamente, vas mejorando.');
    } else {
      console.log('❌ El test falló, vuelve a intentarlo.');
    }
  });
});
