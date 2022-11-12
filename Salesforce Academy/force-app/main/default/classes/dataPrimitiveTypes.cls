public with sharing class dataPrimitiveTypes {

    public static void dataTypes() {
        Integer numeroEntero = 100;
        System.debug(String.valueOf(numeroEntero)); // Parsing Integer to String.
        Long longNumber = 5343453464L;

        Boolean is_true = true;

        Decimal decimalNumber = 45.67;
        Double doubleNumber = 3.14;

        String simpleString = 'Helllo World';

        // ID myId = '121212121212121212';

        Datetime myDateTime = Datetime.now();
        System.debug(myDateTime);

        Date myDate = Date.today();
        System.debug(myDate);

        Time myTime = Time.newInstance(18, 30, 2, 20); // Creates a time of 18:30:2:20 (UTC).
        System.debug(myTime);

        Object obj = new AccountController();
        AccountController ac = (AccountController)obj; // Casting Object to AccountController.

        // Cuando no se le asigna una valor a una variable, se toma como null.
        Integer x = null; // null
        Integer y; // null
        System.debug(x);
        System.debug(y);

       
        Integer I = 10;
       // Integer i = 15; Error cause Apex in case-Sensitive;

        System.debug(I);

        String c = 'C';
        
        //Asserts that the specified condition is true.
        System.assert(c < 'd');
        System.assert('a' == 'A'); // true

        // Asserts that the first two arguments are the same.
        System.assertEquals('A', 'A', 'Letters are not equal'); // AssertException
        

        // Constantes
        final Double PI = 3.14;
        final String MY_COUNTRY = 'Mexico';
        final Boolean MY_VALUE = true;
        final Integer NUM = 3453;
        // static final String IP_ADDRESS = '192.34.56.12';
        System.debug(pi);

        /**
         * Methods and classes are final by default. You cannot use the final keyword in the declaration 
         * of a class or method. This means they cannot be overridden. Use the virtual keyword if you need 
         * to override a method or class.
         */
    }
}
