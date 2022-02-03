import { LightningElement,api } from 'lwc';

export default class MultiLevelParent extends LightningElement {
    childOneSel = "Deselected";
    childTwoSel = "Deselected";
    childThreeSel = "Deselected";

    @api parentReset(){
        this.childOneSel = "Deselected";
        this.childTwoSel = "Deselected";
        this.childThreeSel = "Deselected";

        this.template.querySelector('c-multi-Level-Child-One').childReset();
        this.template.querySelector('c-multi-Level-Child-two').childReset();
        this.template.querySelector('c-multi-Level-Child-three').childReset();
    }

    handleChild(event){
        switch(event.target.childName){
            case "ChildOne":
                event.target.label === "Select" ? this.childOneSel = "Selected" : this.childOneSel = "Deselected";
                break;
            case "ChildTwo":
                event.target.label === "Select" ? this.childTwoSel = "Selected" : this.childTwoSel = "Deselected";
                break;
            case "ChildThree":
                event.target.label === "Select" ? this.childThreeSel = "Selected" : this.childThreeSel = "Deselected";
                break;
        }
    }
}