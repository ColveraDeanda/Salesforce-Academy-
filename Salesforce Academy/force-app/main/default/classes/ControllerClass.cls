public with sharing class ControllerClass {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccountDetails(String searchKey) {
         String queryKey = '%' + searchKey + '%'; 
         // return [SELECT id, name, phone FROM Account LIMIT 10]; (Simple way)
         List<Account> lstAccount = [SELECT id, name, phone FROM Account WHERE name LIKE :queryKey LIMIT 10];
         return lstAccount; 

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccountDetailss() {
         // return [SELECT id, name, phone FROM Account LIMIT 10]; (Simple way)
         List<Account> lstAccount = [SELECT id, name, phone FROM Account LIMIT 10];
         return lstAccount; 

    }
}
