const FizzBuzz = require('./FizzBuzz');

describe('FizzBuzz', () => {
  let testPassed = false; 

  test('should print 1 if they receive 1', () => {
    const expected = 1;
    const result = FizzBuzz(1);
    expect(result).toBe(expected); 
    testPassed = true; 
  });


  afterAll(() => {
    if (testPassed) {
      console.log('🎉 ¡Felicitaciones alumno de prodevs! El ejercicio fue resuelto correctamente, vas mejorando.');
    } else {
      console.log('❌ El test falló, vuelve a intentarlo.');
    }
  });
});
