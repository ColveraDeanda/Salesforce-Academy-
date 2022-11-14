import { LightningElement, api, track, wire } from 'lwc';
import getReportType from '@salesforce/apex/HiredController.getReportType'; 
import getCandidateData from '@salesforce/apex/HiredController.getGeneralData';
// import getDataForIt from '@salesforce/apex/HiredController.dataReportTypeIt';
import Contractor_Assigned_Supervisor from '@salesforce/schema/Contractor__c.Assigned_supervisor__c';
import Admission_Date from '@salesforce/schema/Contractor__c.Date_of_Admission__c';
import Managment_Charge from '@salesforce/schema/Contractor__c.Managment_in_Charge__c'
//import Name from '@salesforce/schema/Job_Application__.Candidate__r.Names__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getObjectInfo  } from 'lightning/uiObjectInfoApi';

export default class HiredDetail extends LightningElement {

    @api recordId;
    @api objectApiName;
    isStandard;

    fieldList = [Contractor_Assigned_Supervisor, Admission_Date]; // IT List
    fieldListStandard = [Managment_Charge, Admission_Date];

    // Candidate data
    @track names;
    @track surname;
    @track country;
    @track city;
    @track requiresVisa;

    // Wire Adaptor 
    @wire(getCandidateData, { hiredId: '$recordId' })
    wiredHiredData({ error, data }) {
        if (data) {
            console.log(data[0].Candidate__r);
            const { Surname__c, City__c, Country__c, Names__c, Requires_Visa__c } = data[0].Candidate__r;
            this.surname = Surname__c;
            this.city = City__c;
            this.country = Country__c;
            this.names = Names__c;
            Requires_Visa__c ? this.requiresVisa = 'Yes' : this.requiresVisa = 'No';
            this.error = undefined;
        } else if (error) {
            this.error = error;
            // this.record = undefined;
        }
    }

    connectedCallback() {

        // Retreiving report Type Flag
        getReportType({hiredId : this.recordId})
        .then(res => {
            this.isStandard = res;
        })
        .catch(err => {
            console.log(err);
        });

        // Change it to Wire Adaptor
        /*
        getCandidateData({hiredId : this.recordId})
        .then(candidateData => {
            candidateData.forEach(elem => {
                this.names = elem.Candidate__r.Names__c;
                this.surname = elem.Candidate__r.Surname__c;
                this.country = elem.Candidate__r.Country__c;
                this.city = elem.Candidate__r.City__c;
                this.requiresVisa = elem.Candidate__r.Requires_Visa__c;
            });
            this.requiresVisa ? this.requiresVisa = 'Yes' : this.requiresVisa = 'No';
        })
        .catch(err => {
            console.log(err);
        });
        */


    }

    handleHireUpdate(evt) {
        const event = new ShowToastEvent({
            title: 'Record updated',
            message: 'Record for hired ' + this.names + ' has been updated successfully',
            variant: 'success',
        });
        this.dispatchEvent(event);

    }


   

}