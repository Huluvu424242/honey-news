import{r as a,h as e,H as s}from"./p-785855a5.js";import{e as t,n as i}from"./p-1aa7bce3.js";let n=class{constructor(e){a(this,e),this.routerSubscription=null,this.route="",this.isBurgerActive=!1}connectedCallback(){this.routerSubscription=t.getRouteListener().subscribe({next:a=>{console.log("###Route: "+a),this.route=a},error:a=>console.error(a),complete:()=>console.info("Router Subject' complete")})}disconnectedCallback(){this.routerSubscription.unsubscribe()}navigateTo(a){a.preventDefault(),i(a.currentTarget.pathname)}navigateToPath(a){i(a)}getItemSelectedClass(a){return this.getNavItemClass()+(this.route===a?"is-info":"is-success")}getNavItemClass(){return"navbar-item button is-rounded "}getBurgerMenuClass(){return this.isBurgerActive?"is-active":""}render(){return e(s,null,e("honey-apply-style",null),e("nav",{class:"navbar",role:"navigation","aria-label":"main navigation"},e("div",{class:"navbar-brand"},e("button",{onClick:()=>this.navigateToPath("/"),class:this.getItemSelectedClass("/")}," RSS/Atom Feed Reader"),e("a",{role:"button",href:"https://github.com/Huluvu424242/honey-news",target:"_blank",class:"navbar-item navbar-link"},"Github"),e("a",{class:"navbar-burger "+this.getBurgerMenuClass(),"aria-label":"menu","aria-expanded":"false","data-target":"navSubmenu",onClick:()=>this.isBurgerActive=!this.isBurgerActive},e("span",{"aria-hidden":"true"}),e("span",{"aria-hidden":"true"}),e("span",{"aria-hidden":"true"}))),e("div",{id:"navSubmenu",class:"navbar-menu "+this.getBurgerMenuClass()},e("div",{id:"navbarStart",class:"navbar-start"},e("div",{onClick:()=>this.navigateToPath("/feeds"),class:this.getItemSelectedClass("/feeds")},"Feeds"),e("div",{onClick:()=>this.navigateToPath("/news"),class:this.getItemSelectedClass("/news")},"News"),e("div",{onClick:()=>this.navigateToPath("/statistic"),class:this.getItemSelectedClass("/statistic")},"Statistik"),e("div",{onClick:()=>this.navigateToPath("/about"),class:this.getItemSelectedClass("/about")},"About"),e("div",{class:"navbar-item has-dropdown is-hoverable"},e("a",{class:"navbar-link"},"Theme"),e("div",{class:"navbar-dropdown  is-boxed"},e("honey-select-style",{themeName:"honey-bulma-style"},"Bulma Style"),e("honey-select-style",{themeName:"honey-papercss-style"},"PaperCSS Style")))))))}};export{n as honey_navbar_bulma}