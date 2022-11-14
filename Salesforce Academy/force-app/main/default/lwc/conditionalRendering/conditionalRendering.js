import { LightningElement, api, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    @track options = [
        {label: "Coche", value: "Coche"},
        {label: "Moto", value: "Moto"},
        {label: "Triciclo", value: "Triciclo"},
        {label: "Barco", value: "Barco"}
    ];

    showDetails = false;
    value = [];
    userText;

    handleChange(e) {
        console.log(e.detail.value); // e.detail.value = array de los elementos seleccionados
        this.value = e.detail.value;
        if(this.value.length > 0) {
            this.showDetails = true;
        } else {
            this.showDetails = false;
        }
    }

    get selectedValues() {
        return this.value.join(',');
    }

    getUserInput(e) {
        this.userText = e.target.value;
    }

    addOption() {
        const newOption = {};
        newOption.label = this.userText;
        newOption.value = this.userText;
        this.options.push(newOption);
        console.log(this.options);
    }

}