import{r as a,h as s,H as t}from"./p-74cd68e1.js";import{c as e,n as i}from"./p-b5b9a31f.js";const n=class{constructor(s){a(this,s),this.routerSubscription=null,this.route=""}connectedCallback(){this.routerSubscription=e.getRouteListener().subscribe((a=>{this.route=a}),(a=>{console.error(a)}),(()=>{console.info("Router Subject' complete")}))}disconnectedCallback(){this.routerSubscription.unsubscribe()}navigateTo(a){a.preventDefault(),i(a.currentTarget.pathname)}classNavLink(a){return"navbar-item "+(this.route===a?"is-active":"")}render(){return s(t,null,s("honey-apply-style",null),s("nav",{class:"navbar is-primary",role:"navigation","aria-label":"main navigation"},s("div",{class:"navbar-brand"},s("a",{href:"/",onClick:this.navigateTo,class:this.classNavLink("/")}," RSS/Atom Feed Reader"),s("a",{href:"/feeds",onClick:this.navigateTo,class:this.classNavLink("/feeds")},"Feeds"),s("a",{href:"/news",onClick:this.navigateTo,class:this.classNavLink("/news")},"News"),s("a",{href:"/statistic",onClick:this.navigateTo,class:this.classNavLink("/statistic")},"Statistik"),s("a",{href:"/about",onClick:this.navigateTo,class:this.classNavLink("/about")},"About"),s("a",{href:"https://github.com/Huluvu424242/honey-news",target:"_blank",class:"is-primary button"},"Github"),s("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false"},s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"})))))}};export{n as honey_navbar_bulma}