import { LightningElement, wire, track } from 'lwc';
import fetchData from '@salesforce/apex/datatableWithRowSelectionController.getData';
import deleteTrackingRecord from '@salesforce/apex/datatableWithRowSelectionController.deleteTracking';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DatatableWithRowSelection extends NavigationMixin (LightningElement) {

    @track search;
    @track data;
    columns;

    actions = [
        {label: 'Edit', name: 'edit'},
        {label: 'View', name: 'view'},
        {label: 'Delete', name: 'delete'},
    ]

    columns = [
        {label: 'Tracking Number', fieldName: 'Name'},
        {label: 'Number of Shipments', fieldName: 'Number_of_shipments__c'},
        {label: 'Package Status', fieldName: 'Package_Status__c'},
        {
            type: 'action',
            typeAttributes: {
                rowActions: this.actions,
                menuAligment: 'right'
            }
        }
    ];

    getUserInput(event) {
        this.search = event.target.value;
        console.log(this.search);
    }

    handleSearch() {
        if(this.search.length == 0) this.search = undefined;
        fetchData({searchKey : this.search})
            .then(res => {
                [...this.data] = res;
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleRowAction(event) {

        const actionName = event.detail.action.name;
        const row = event.detail.row;
        console.log(actionName);
        console.log(JSON.stringify(row));
        switch(actionName) {
            case 'view': 
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        actionName: 'view',
                        objectApiName: 'Tracking__c'
                    }
                });
                break;
            case 'edit':
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        actionName: 'edit',
                        objectApiName: 'Tracking__c'
                    }
                });
                break;
            case 'delete':
                this.deleteTracking(row);
                break;
        }
    }

    deleteTracking(trackingRow) {
        deleteTrackingRecord({objTracking : trackingRow})
        .then(result => {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: trackingRow.Name + ' tracking deleted.',
                variant: 'success'
            }));
        })
        .catch(error => {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error',
                message: error,
                variant: 'error'
            }));
        })
    }

    handleRowSelection(event) {
        let selectedRowsDetail = event.detail.selectedRows;
        let data = JSON.stringify(selectedRowsDetail);
        let rowObj = JSON.parse(data);
        let lastIndex = JSON.stringify(rowObj.length - 1);
        if(lastIndex >= 0) {
            let { Name, Number_of_shipments__c, Package_Status__c } = rowObj[lastIndex];
            this.showInfoToast(Name, Number_of_shipments__c, Package_Status__c);
        }
    }

    showInfoToast(trackingNumber, shipments, status) {
        this.dispatchEvent(new ShowToastEvent({
            title: 'Tracking Details',
            message: `Tracking number: ${trackingNumber}  |  Number of shipments: ${shipments}  |  Package status: ${status}`,
            variant: 'info',
            mode: 'sticky'
        }));

        let msj = `Tracking number: ${trackingNumber}  |  Number of shipments: ${shipments}  |  Package status: ${status}`;
        this.copyTextToClipboard(msj);
    }

    copyTextToClipboard = (content) => {
        // Create an input field with the minimum size and place in a not visible part of the screen
        let tempTextAreaField = document.createElement('textarea');
        tempTextAreaField.style = 'position:fixed;top:-5rem;height:1px;width:10px;';
        // Assign the content we want to copy to the clipboard to the temporary text area field
        tempTextAreaField.value = content;
        // Append it to the body of the page
        document.body.appendChild(tempTextAreaField);
        // Select the content of the temporary markup field
        tempTextAreaField.select();
        // Run the copy function to put the content to the clipboard
        document.execCommand('copy');
        // Remove the temporary element from the DOM as it is no longer needed
        tempTextAreaField.remove();
    }

    



}