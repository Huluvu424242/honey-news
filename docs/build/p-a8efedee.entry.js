import{r as s,h as e,H as l}from"./p-785855a5.js";let a=class{constructor(e){s(this,e),this.showed=!0}commitReading(){this.showed=!1}render(){return e(l,null,e("honey-apply-style",null),!0===this.showed?e("article",{class:"message is-warning has-background-warning-light"},e("div",{class:"message-header"},e("slot",{name:"slot1"},"placeholder title"),e("button",{class:"delete","aria-label":"delete",onClick:this.commitReading.bind(this)})),e("div",{class:"message-body"},e("slot",{name:"slot2"},"placeholder body"))):"")}};export{a as honey_disclaimer_bulma}