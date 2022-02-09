import { LightningElement,api } from 'lwc';
import name_field from '@salesforce/schema/Account.Name';
import FirstName_field from '@salesforce/schema/Contact.FirstName';
import LastName_field from '@salesforce/schema/Contact.LastName';
import AccountName_field from '@salesforce/schema/Contact.AccountId';
import Name_field from '@salesforce/schema/Opportunity.Name';
import StageName_field from '@salesforce/schema/Opportunity.StageName';
import CloseDate_field from '@salesforce/schema/Opportunity.CloseDate';
import accountName_field from '@salesforce/schema/Opportunity.AccountId';

export default class QuickCreate extends LightningElement {
    check=false;
    check1=false;
    check2=false;
    @api objectApiName;
    message;
    fields=[name_field];
    fields1=[FirstName_field,LastName_field,AccountName_field];
    fields2=[Name_field,StageName_field,CloseDate_field,accountName_field];

    handlesuccess(){
        alert("Record Updated");
        eval("$A.get('e.force:refreshView').fire();");
    }

    handlefields(event){
        this.check=true;
    }
    handlefields1(event){
        this.check1=true;
    }
    handlefields2(event){
        this.check2=true;
    }

    handlereset(){
        const inputfields=this.template.querySelectorAll('lightning-input-field');
        if(inputfields){
            inputfields.array.forEach(field => {
                field.reset();
            });
        }
    }
}