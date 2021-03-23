
<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

    Escriba un programa corto que imprima un rango de números del 1 a N.

    Para cada múltiplo de 3, imprima "Geeks" en lugar del número.
    Para cada múltiplo de 5, imprima "Hubs" en lugar del número.
    Para los números que son múltiplos de 3 y 5, imprima "GeeksHubs" en lugar del número.
    Cada número debe de estar en una línea nueva.
    El resultado se debe de ser una string.
    
    Se atiende al siguiente ejemplo:

    Iterador 3
    1
    2
    Geeks

    Iterador 7
    1
    2
    Geeks
    4
    Hubs
    Geeks
    7

    Iterador 16
    1
    2
    Geeks
    4
    Hubs
    Geeks
    7
    8
    Geeks
    Hubs
    11
    Geeks
    13
    14
    GeeksHubs
    16
    



    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.
    
    
    
    A continuación se muestran los resultado que se tienen que obtener tras desarrollar el algoritmo.
    
    [Suite Tests]
    
    const geekshubs = require('./test01.js');

    test('GeeksHubs - 3 iterations ', function () {
        var expected = "1\n2\nGeeks\n";
        var result = geekshubs(3);
        expect(result).toBe(expected);
    });

    test('GeeksHubs - 30 iterations ', function () {
        var expected =  "1\n2\nGeeks\n4\nHubs\nGeeks\n7\n8\nGeeks\nHubs\n11\nGeeks\n13\n14\nGeeksHubs\n16\...";
        var result = geekshubs(30);
        expect(result).toBe(expected);
    });

    test('GeeksHubs - 60 iterations ', function () {
        var expected =  "1\n2\nGeeks\n4\nHubs\nGeeks\n7\n8\nGeeks\nHubs\n11\nGeeks\n13\n14\nGeeksHubs\n16\...";
        var result = geekshubs(60);
        expect(result).toBe(expected);
    });

    test('GeeksHubs - 100 iterations ', function () {
        var expected =  "1\n2\nGeeks\n4\nHubs\nGeeks\n7\n8\nGeeks\nHubs\n11\nGeeks\n13\n14\nGeeksHubs\n16\...";
        var result = geekshubs(100);
        expect(result).toBe(expected);
    });



     PASS  ./suite.test.js
      √ GeeksHubs - 3 iterations  (3ms)
      √ GeeksHubs - 30 iterations  (1ms)
      √ GeeksHubs - 60 iterations
      √ GeeksHubs -100 iterations

    Test Suites: 1 passed, 1 total
    Tests:       4 passed, 4 total
    Snapshots:   0 total
    Time:        4.691s
    Ran all test suites.
    
    
## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
