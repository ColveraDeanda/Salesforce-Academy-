import { LightningElement } from 'lwc';
import fetchAccountDetails from '@salesforce/apex/ControllerClass.fetchAccountDetails';

export default class AccountComponent extends LightningElement {

    data;
    error;
    searchval;
    showData = false;
    noResults = false;
    displayButtonMsj = 'Display Account Component';

    columns = [
        {label: 'Account Name', fieldName: 'Name'},
        {label: 'Account Number', fieldName: 'Phone'}
    ];

    displayData() {
        if(this.showData) {
            this.showData = false;
            this.displayButtonMsj = 'Display Account Component';
        } else {
            this.showData = true;
            this.displayButtonMsj = 'Hide Account Component';
        }
       
    }

    getUserInput(event) {
        this.searchval = event.target.value;
    }

    searchAcccount() {
        if(this.searchval.length === 0) this.searchval = undefined;
        fetchAccountDetails({searchKey : this.searchval}) // Cuando se llame al método de la clase, es necesario en el método en el que se está disparando desde el evento en HTML
        .then(data => {
            console.log(data);
            if(data.length == 0) {
                this.noResults = true;
            } else {
                this.noResults = false;
                this.data = data;
            }
            
        })
        .catch(err => {
            console.log(err);
        })


    }

}