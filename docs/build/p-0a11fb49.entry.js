import{r as e,h as t,H as s,g as o}from"./p-785855a5.js";import{b as r}from"./p-fa29fad5.js";let a=class{constructor(t){e(this,t),this.changeTheme=()=>{console.log("### papercss changeTheme"),this.themeName&&this.themeName.length>0?document.getElementsByTagName("honey-define-style")[0].setNewTheme(this.themeName):r("No theme attribute defined for button")}}render(){return t(s,null,t("honey-apply-style",null),t("select",{id:"paperSelects1",ref:e=>this.dropdown=e,onChange:this.changeTheme},t("option",{value:"1"},this.optionText),t("option",{disabled:!0,value:"2",selected:!0},"PaperCSS Style")))}get host(){return o(this)}};export{a as honey_select_style_papercss}