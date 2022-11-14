public with sharing class datatableWithRowSelectionController {

    @AuraEnabled
    public static List<Tracking__c> getData(String searchKey) {
        String key = '%' + searchKey + '%';
        List<Tracking__c> lstTracking = [Select id, Name, Shipment__r.Name, Shipment__r.Account__r.Name, Number_of_shipments__c, Package_Status__c from Tracking__c Where Name Like :key];
        return lstTracking;
    }

    @AuraEnabled
    public static void deleteTracking(Tracking__c objTracking){
        try {
            delete objTracking;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}
