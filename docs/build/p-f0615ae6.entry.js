import{r as s,h as t,H as a}from"./p-785855a5.js";import{h as l}from"./p-a4622406.js";let e=class{constructor(t){s(this,t),this.showed={state:l}}commitReading(){this.showed.state.setToUserHasRead(),this.showed={state:l}}render(){return t(a,null,t("honey-apply-style",null),this.showed.state.wasDisclaimerRead()?"":t("div",{class:"row flex-spaces"},t("input",{class:"alert-state",id:"alert-1",type:"checkbox"}),t("div",{class:"alert alert-danger dismissible row"},t("div",null,t("slot",{name:"slot1"})),t("div",{class:"background-warning"},t("slot",{name:"slot2"})),t("label",{class:"paper-btn btn-close",htmlFor:"alert-1",onClick:this.commitReading.bind(this)},"X"))))}};export{e as honey_disclaimer_papercss}