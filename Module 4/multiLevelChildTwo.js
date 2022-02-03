import { LightningElement,api } from 'lwc';

export default class MultiLevelChildTwo extends LightningElement {
    @api label="Select";
    variant="success";
    @api childName = "ChildTwo";

    @api childReset(){
        this.label = "Select";
        this.variant = "success";
    }

    handleChild(event){
        const event1=new CustomEvent('selectevent',{
        bubbles:true,
        composed:true,
        detail:this.label
    });
    this.dispatchEvent(event1);
    if(this.label==="Select"){
        this.label="Deselect";
        this.variant="destructive";
    }
    else{
        this.label="Select";
        this.variant="success";
    }
    }
}