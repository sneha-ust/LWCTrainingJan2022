import { LightningElement, wire,api} from 'lwc';
import allAccounts from '@salesforce/apex/LookupRecords.allAccounts';
import searchAccounts from '@salesforce/apex/LookupRecords.searchAccounts';
import allContacts1 from '@salesforce/apex/LookupRecords.allContacts1';
import allContacts from '@salesforce/apex/LookupRecords.allContacts';

export default class LookupRecords extends LightningElement {
    searchkey='';
    selectedoption='';
    contactsel='';
    selected=false;
    clicked=false;
    option=false;
    @wire(searchAccounts,{acname:"$searchkey"})
    aclist;
    @wire(allContacts,{accountId:"$contactsel"})
    conlist;
    @wire(allContacts1)
    conlist1;
    
    handleaccounts(event){
        this.searchkey = event.target.value;
        this.clicked = true;
        this.option = false;
        
       
    }
    handleContacts(event){
         let selectedoption=event.currentTarget.getAttribute("data-key");
         this.contactsel=selectedoption;
        console.log(selectedoption);
        this.option = true;
        this.clicked = false;
        this.selected=true;
    }
    resetSearch(){
       this.selected=false; 
       this.option = false;
    }
   
}