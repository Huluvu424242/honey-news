import{r as t,h as o}from"./p-74cd68e1.js";import{u as s}from"./p-75ae3436.js";const l=class{constructor(o){t(this,o),this.themeprefix="honey",this.themepostfix=" "}async connectedCallback(){try{await customElements.whenDefined("honey-define-style");const t=document.querySelector("honey-define-style"),o={next:t=>this.theme=t,error:t=>(void 0)(t),complete:()=>(void 0)("subcription completed")};this.themeSubscription=await t.subscribeThemeChangeListener(o)}catch(t){this.theme="honey-default-style"}}disconnectedCallback(){this.themeSubscription.unsubscribe()}getTheme(){if(!this.theme)return"honey-default-style";const t=this.theme.split("-");let o="";return o+=this.themeprefix+(this.themeprefix.trim().length>0?"-":""),o+=t.slice(1,-1).join("-"),o+=(this.themepostfix.trim().length>0?"-":"")+this.themepostfix,o.trim()}render(){const t=this.getTheme();return o(t,{ref:t=>{this.tagElement=t,this.tagElement.argumentlist=this.parameterlist}},o("slot",{name:"slot1",slot:"slot1"},"placeholder slot 1"),o("slot",{name:"slot2",slot:"slot2"},"placeholder slot 2"),o("slot",{name:"slot3",slot:"slot3"},"placeholder slot 3"),o("slot",{name:"slot4",slot:"slot4"},"placeholder slot 4"),o("slot",{name:"slot5",slot:"slot5"},"placeholder slot 5"),o("slot",{name:"slot6",slot:"slot6"},"placeholder slot 6"),o("slot",{name:"slot7",slot:"slot7"},"placeholder slot 7"),o("slot",{name:"slot8",slot:"slot8"},"placeholder slot 8"),o("slot",{name:"slot9",slot:"slot9"},"placeholder slot 9"),o("slot",{name:"slot10",slot:"slot10"},"placeholder slot 10"))}};export{l as honey_styled_paracomponent}