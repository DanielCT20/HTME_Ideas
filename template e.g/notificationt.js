class NotificationElements extends HTMLElement{

    constructor(){
        super();
        this.template=document.getElementById("notification")
    }
    connectedCallback(){
        let cloneDOM=document.importNode(this.template.content,true);
        this.appendChild(cloneDOM)
    }
    attributeChangedCallback(attr,oldval,newval){

    }
    static get observedAttributes(){
        return[''];
    }
}
window.customElements.define("x-notification",NotificationElements);