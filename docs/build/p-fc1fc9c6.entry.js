import{r as s,h as e,H as a}from"./p-785855a5.js";import{h as t}from"./p-a4622406.js";let l=class{constructor(e){s(this,e),this.showed={state:t}}commitReading(){this.showed.state.setToUserHasRead(),this.showed={state:t}}render(){return e(a,null,e("honey-apply-style",null),this.showed.state.wasDisclaimerRead()?"":e("article",{class:"message is-warning has-background-warning-light"},e("div",{class:"message-header"},e("slot",{name:"slot1"},"placeholder title"),e("button",{class:"delete","aria-label":"delete",onClick:this.commitReading.bind(this)})),e("div",{class:"message-body"},e("slot",{name:"slot2"},"placeholder body"))))}};export{l as honey_disclaimer_bulma}