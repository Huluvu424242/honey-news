import{r as a,h as s,H as e}from"./p-89d85688.js";import{f as t,n as i}from"./p-b78ee362.js";const n=class{constructor(s){a(this,s),this.routerSubscription=null,this.route="",this.isBurgerActive=!1}connectedCallback(){this.routerSubscription=t.getRouteListener().subscribe({next:a=>{console.log("###Route: "+a),this.route=a},error:a=>console.error(a),complete:()=>console.info("Router Subject' complete")})}disconnectedCallback(){this.routerSubscription.unsubscribe()}navigateTo(a){a.preventDefault(),i(a.currentTarget.pathname)}navigateToPath(a){i(a)}getItemSelectedClass(a){return this.getNavItemClass()+(this.route===a?"is-info":"is-success")}getNavItemClass(){return"navbar-item button is-rounded "}getBurgerMenuClass(){return this.isBurgerActive?"is-active":""}render(){return s(e,null,s("honey-apply-style",null),s("nav",{class:"navbar",role:"navigation","aria-label":"main navigation"},s("div",{class:"navbar-brand"},s("div",{onClick:()=>this.navigateToPath("/"),class:this.getItemSelectedClass("/")}," RSS/Atom Feed Reader"),s("a",{class:"navbar-burger "+this.getBurgerMenuClass(),"aria-label":"menu","aria-expanded":"false","data-target":"navSubmenu",onClick:()=>this.isBurgerActive=!this.isBurgerActive},s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}))),s("div",{id:"navSubmenu",class:"navbar-menu "+this.getBurgerMenuClass()},s("div",{id:"navbarStart",class:"navbar-start"},s("div",{class:"navbar-item has-dropdown is-hoverable"},s("a",{class:"navbar-link"},"Theme / Style"),s("div",{class:"navbar-dropdown is-boxed"},s("honey-select-style",{themeName:"honey-papercss-style"},"PaperCSS Style"))),s("div",{onClick:()=>this.navigateToPath("/feeds"),class:this.getItemSelectedClass("/feeds")},"Feeds"),s("div",{onClick:()=>this.navigateToPath("/news"),class:this.getItemSelectedClass("/news")},"News"),s("div",{onClick:()=>this.navigateToPath("/statistic"),class:this.getItemSelectedClass("/statistic")},"Statistik"),s("div",{onClick:()=>this.navigateToPath("/about"),class:this.getItemSelectedClass("/about")},"About"),s("a",{role:"button",href:"https://github.com/Huluvu424242/honey-news",target:"_blank",rel:"noopener noreferrer",class:"navbar-item"},"Github")))))}};export{n as honey_navbar_bulma}