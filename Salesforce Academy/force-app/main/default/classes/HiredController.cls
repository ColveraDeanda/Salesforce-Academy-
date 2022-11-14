public with sharing class HiredController {
    
    @AuraEnabled(cacheable=true)
    public static Boolean getReportType(id hiredId) {
        Id jobApplicationId = [Select id, JobApplication__c from Hired__c where Id = :hiredId].JobApplication__c;
        String reportType = [SELECT Id, Name, Post__r.Name, Post__r.RecordType.Name FROM JobApplication__c Where Id = :jobApplicationId].Post__r.RecordType.Name;
        if(reportType.equals('Standard')) {
            return true;
        }
        return false;
    }

    @AuraEnabled(cacheable=true)
    public static List<JobApplication__c> getGeneralData(id hiredId) {
        Id jobApplicationId = [Select id, JobApplication__c from Hired__c where Id = :hiredId].JobApplication__c;
        List<JobApplication__c> candidateGeneralData = [SELECT Id, Name, Candidate__r.Names__c, Candidate__r.Surname__c, Candidate__r.Country__c, Candidate__r.City__c, Candidate__r.Requires_Visa__c FROM JobApplication__c Where Id = :jobApplicationId];
        return candidateGeneralData;
    }

}
