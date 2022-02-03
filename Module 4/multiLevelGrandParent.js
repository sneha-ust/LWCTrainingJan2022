import { LightningElement,api } from 'lwc';

export default class MultiLevelPropogation extends LightningElement {
    numChildSel = 0;

    handleChild(event){
        event.detail === "Select" ? this.numChildSel += 1 : this.numChildSel -= 1;
    }

    handleReset(event){
        this.numChildSel = 0;
        this.template.querySelector('c-multi-Level-Parent').parentReset();
    }
}