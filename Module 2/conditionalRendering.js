import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    check=false;
    address1;
    address2;
    landmark;
    zipcode;

    addr1(event){
        this.address1=event.target.value;
    }
    addr2(event){
        this.address2=event.target.value;
    }
    land(event){
        this.landmark=event.target.value;
    }
    zip(event){
        this.zipcode=event.target.value;
    }

    show(event){
        this.check=true;
        

    }
}
