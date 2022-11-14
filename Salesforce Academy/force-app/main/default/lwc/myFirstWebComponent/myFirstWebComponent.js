import { LightningElement, wire } from 'lwc';
import fetchAccountDetails from '@salesforce/apex/ControllerClass.fetchAccountDetailss';

export default class MyFirstWebComponent extends LightningElement {

    /*  LIFECYCLE HOOKS
    - Lifecycle Hook connectedCallback() is invoked when a component is inserted into the DOM.
    - disconnectedCallback() is invoked when a component is removed from the DOM.
    - the JavaScript file we used to test our conditional rendering, we used the connectedCallback() method to automatically execute code when the component is inserted into the DOM.
    */

    connectedCallback() {
        setTimeout(() => {
            console.log(this.accts);
        }, 3000);
    }

    /*  DECORATORS
    - You can import multiple decorators, but a single property or function can have only one decorator. For example, a property can't have @api and @wire decorators.
    - @api = To expose a property or function as public. If the value of a public property (@api) used in a template changes, the component rerenders.
    - @track = It is used to make variable private but reactive.
    - Note: - Both @track and @api mark a property as reactive. If the property's value changes, the component rerenders. Tracked properties are private, where properties decorated with @api are public and can be set by another component.
            - Use @track only if a field contains an object or an array and if you want the framework to observe changes to the properties of the object or to the elements of the array. If you want to change the value of the whole property, you don't need to use @track.  
    */

    
    greeting = '';


    handleChange(event) {
        alert('Hello world');
    }

    handleChangeEvent(event) {
        this.greeting = event.target.value; // Retrieving value.
    }

    // @wire to manipulate data from controller
    // https://developer.salesforce.com/docs/component-library/documentation/en/lwc/apex_wire_method
    // @wire muy buena opcion como get de data, si es una otra, tratar de usar imperative
    @wire(fetchAccountDetails) accts;


    

}