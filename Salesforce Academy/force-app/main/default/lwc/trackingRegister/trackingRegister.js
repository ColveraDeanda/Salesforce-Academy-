import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import TRACKING_NUMBER_OF_SHIPMENTS from '@salesforce/schema/Tracking__c.Number_of_shipments__c';
import TRACKING_STATUS from '@salesforce/schema/Tracking__c.Package_Status__c';
import SHIPMENT from '@salesforce/schema/Tracking__c.Shipment__c';
import TRACKING_OBJECT from '@salesforce/schema/Tracking__c';

export default class TrackingRegister extends LightningElement {

    objectApiName = TRACKING_OBJECT;
    fields = [TRACKING_NUMBER_OF_SHIPMENTS, TRACKING_STATUS, SHIPMENT];
    count;
    isDisabled = false; // button disabled flag.

    /*
    get isDisabled() {
        matching_records === 0 ? this.isDisabled = true : this.isDisabled = false;
    }
    */

    @track isModalOpen = false;
    openModal() {
        this.isModalOpen = true;
        this.count = 0; // initializing count to check if record is saved or updated.
    }
    closeModal() {
        this.isModalOpen = false;
        this.count = 0; // Restarting count when modal get close.
    }
    submitDetails() {
        this.isModalOpen = false;
    }

    handleSucess(event) {
        // const editForm = this.template.querySelector('lightning-record-form');
        if(this.count === 0) {
            const event = new ShowToastEvent({
                title: 'Tracking record was created.',
                variant: 'success',
            });
            this.dispatchEvent(event);
        } else {
            const event = new ShowToastEvent({
                title: 'Tracking record was updated.',
                variant: 'success',
            });
            this.dispatchEvent(event);
        }
        this.count++;
    }

    handleCancel() {
        this.isModalOpen = false;
    }

}