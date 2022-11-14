public with sharing class AccountController {
    public static List<Account> getAllActiveAccounts() {
        return [SELECT Id,Name,Active__c FROM Account WHERE Active__c = 'Yes'];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
    //throw new AuraHandledException('Forced error');
        return [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}
