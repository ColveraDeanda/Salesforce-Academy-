import { LightningElement } from 'lwc';

export default class HelloExpressions extends LightningElement {

    fullNameArr = ['', ''];
    fullNameUppercased;

    UppcasingName(event) {
        this.fullNameArr[0] = event.target.value;
        this.fullNameUppercased = this.fullNameArr.join(' ').toUpperCase().trim();
        console.log(this.fullNameUppercased);
    }

    UppcasingLastName(event) {
        this.fullNameArr[1] = event.target.value;
        this.fullNameUppercased = this.fullNameArr.join(' ').toUpperCase().trim();
        console.log(this.fullNameUppercased);
    }

}