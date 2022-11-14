public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
       // throw new AuraHandledException('Forced error');
        List<Contact> lstAccounts;
        lstAccounts = [SELECT FirstName, LastName, Email FROM Contact];
        return lstAccounts; 
    }
    
}
