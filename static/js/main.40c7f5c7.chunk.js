(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),s=a.n(o),l=(a(24),a(7)),c=a.n(l),i=a(18),m=a(3),u=a(4),p=a(6),d=a(5),g=function(e){var t=[{name:"Home",link:"/"},{name:"About",link:"/about"},{name:"TopSelling",link:"/topselling"}];return console.log("Menus ",t),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},e.brandName),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},t.map((function(e){return r.a.createElement("li",{key:e.name,className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:e.link},e.name," ",r.a.createElement("span",{className:"sr-only"},"(current)")))}))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},h="Brain Mentors",b=function(e){return r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{src:e.item.url,className:"card-img-top",alt:"No Image Found"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.item.id),r.a.createElement("p",{className:"card-text"},e.item.name),r.a.createElement("p",{className:"card-text"},e.item.price),r.a.createElement("a",{href:"#",className:"btn btn-primary"},"Add to Cart")))},v=function(e){return console.log("Props are ::::::",e," typeof ",typeof e.items),e.items&&e.items.length>0?r.a.createElement(r.a.Fragment,null,e.items.map((function(e){return r.a.createElement(b,{key:e.id,item:e})}))):r.a.createElement("div",null,"No Record Found....")},f=a(2),E=a.n(f);function N(){console.log("$$$$$$$$$$$Axios Object is ",E.a.defaults.baseURL);var e="/myserverdata/master/mobiles.json";return E.a.get(e)}var y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={items:[]},console.log("Shop Constructor call"),n}return Object(u.a)(a,[{key:"render",value:function(){return console.log("Render Call :::::: ",this.state.items),r.a.createElement("div",null,r.a.createElement("h1",{className:"alert-info text-center"},"Shop Demo"),r.a.createElement(g,{brandName:h}),r.a.createElement(v,{items:this.state.items}))}},{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("componentWillMount:::::%%%%%%%%%%%%%%%%%%%%"),!localStorage.items){e.next=5;break}this.setState({items:JSON.parse(localStorage.items).mobiles}),e.next=11;break;case 5:return e.next=7,N();case 7:t=e.sent,console.log("Response on Life Cycle ",t.data.mobiles),localStorage.items=JSON.stringify(t.data),this.setState({items:t.data.mobiles});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(r.a.Component),S=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isError:!1,errorMessage:""},n}return Object(u.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log("Component Did Catch Call ::: ErrorBoundary ",e,t),this.setState({isError:!0,errorMessage:"OOPS Something went Wrong"})}},{key:"render",value:function(){return this.state.isError?r.a.createElement("div",null,r.a.createElement("h1",null,this.state.errorMessage)):this.props.children}}]),a}(r.a.Component),k=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(S,null,r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(){console.log("LOAD SETTING IS #######################"),E.a.defaults.baseURL="https://raw.githubusercontent.com/brainmentorspvtltd",E.a.defaults.headers.post["Content-Type"]="application/json";var e=localStorage.tokenId;E.a.interceptors.request.use((function(t){return t.tokenId=e,console.log("Request Interceptor is Running ",t.tokenId),t})),E.a.interceptors.response.use((function(e){return e.headers.secure="Brain Mentors Headers",console.log("Response Interceptor is Running"),e})),console.log("After All Things ",E.a.defaults.baseURL)}(),s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.40c7f5c7.chunk.js.map