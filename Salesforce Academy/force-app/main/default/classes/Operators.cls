public with sharing class Operators {
    public Operators() {

        // EXPRESIONES DE ASIGNACION (booleanos)
       Boolean x = true;
       Boolean y = false;
       x |= y; // Asignacion a x basandose en la teoria del OR.
       System.debug(x);

       x &= y; // Asignacion a x basandose en la teoria del AND
       System.debug(x);

       // TERNARY OPERATOR
       Boolean name = false;
       String nameTrue = 'Cristobal';
       String nameFalse = 'iStrikerbot';
       System.debug(name ? nameTrue : nameFalse);

       // LOGICAL OPERATORS
       Integer number1 = 100;
       Integer number2 = 200;
       System.debug(number1 == 100 && number2 == 30000); // false
       System.debug(number1 == 100 || number2 == 30000); // true
       System.debug(number1 != number2); // true
       System.debug(!(number1 != number2)); // false (Inverts the value of a Boolean so that true becomes false and false becomes true)
       System.debug(-number1); // Multiplies the value of x, an Integer or Double, by -1

   }
}
