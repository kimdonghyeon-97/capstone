(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c.n(n),i=c(9),x=c.n(i),r=(c(26),c(10)),d=c(11),s=c(15),p=c(13),h=(c(27),c(0)),a=function(){return Object(h.jsx)("header",{children:Object(h.jsx)("center",{children:Object(h.jsx)("h1",{children:"One Queue"})})})},b=function(){return Object(h.jsx)("input",{})},l=c(14),O=c(19),o=c(12),u=c(2);var g=function(){return Object(h.jsx)("button",{onClick:function(e){window.location.replace("/next")},children:Object(h.jsx)("h5",{children:"\uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9"})})};var w=function(){return Object(h.jsx)("p",{align:"right",children:Object(h.jsx)("button",{onClick:function(e){window.location.replace("/")},children:"\uc6f9\ud398\uc774\uc9c0\ub85c \ub3cc\uc544\uac00\uae30"})})};var f=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(w,{}),Object(h.jsx)("h1",{children:"\u203b \uac80\uc0c9 \uc870\uac74 \ubaa9\ub85d"}),Object(h.jsxs)("div",{id:"test1",children:[Object(h.jsx)("h2",{children:"\xa0\uc0c1\ud0dc"}),Object(h.jsx)("h2",{children:"\xa0\uac00\uaca9"}),Object(h.jsx)("h2",{children:"\xa0\ubd84\ub9581"}),Object(h.jsx)("h2",{children:"\xa0\ubd84\ub9582"}),Object(h.jsx)("h2",{children:"\xa0\ubd84\ub9583"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("center",{children:[Object(h.jsx)("button",{children:"\ub4f1\ub85d"}),"\xa0",Object(h.jsx)("button",{children:"\uc218\uc815"}),"\xa0",Object(h.jsx)("button",{children:"\uc0ad\uc81c"})]})]})};var m=function(){return Object(h.jsx)(o.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(u.a,{exact:!0,path:"/Next",component:f}),Object(h.jsx)(u.a,{path:"/",children:Object(h.jsx)(g,{})})]})})},v=function(e){Object(s.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,j=new Array(n),i=0;i<n;i++)j[i]=arguments[i];return(e=t.call.apply(t,[this].concat(j))).state={firstPassword:"",checkPassword:"\ud83d\udcdd\ud328\uc2a4\uc6cc\ub4dc \uc785\ub825\ud83d\udcdd",admin:""},e.handleChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value)),"name"!==t.target.name&&setTimeout(e.handleCheck,100)},e.handleCheck=function(){var t=e.state.firstPassword;t.length<1?e.setState({checkPassword:"\ud83d\udcdd\ud328\uc2a4\uc6cc\ub4dc \uc785\ub825\ud83d\udcdd",admin:""}):"1234"===t?e.setState({checkPassword:"\u2705\uc77c\uce58 \u2705",admin:Object(h.jsx)(m,{})}):e.setState({checkPassword:"\u274c\ubd88\uc77c\uce58 \u274c",admin:""})},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this.state,t=e.firstPassword,c=e.checkPassword,n=e.admin;return Object(h.jsxs)("div",{children:[Object(h.jsx)("form",{className:"joinForm",children:Object(h.jsx)("input",{name:"firstPassword",onChange:this.handleChange,value:t,placeholder:"\ube44\ubc00\ubc88\ud638"})}),Object(h.jsxs)("div",{className:"showText",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["\uc77c\uce58\uc5ec\ubd80 : ",c]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:n})]})]})}}]),c}(n.Component),k=v;var C=function(){return Object(h.jsx)("button",{onClick:function(e){window.location.replace("/capstone")},children:"Close"})};var y=function(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2);return c[0],c[1],Object(i.createPortal)(Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",bottom:510,left:0,width:"100%",height:50},children:Object(h.jsxs)("div",{style:{width:"35%",textAlign:"center",borderRadius:30,background:"grey",fontSize:20,color:"white"},children:[Object(h.jsx)("p",{align:"justify",children:"\xa0\xa0\xa0\xa0\uad00\ub9ac\uc790 \ub85c\uadf8\uc778"}),Object(h.jsx)("p",{children:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"}),Object(h.jsx)(k,{}),Object(h.jsx)("p",{align:"center",children:Object(h.jsx)(C,{})})]})}),document.getElementById("modal"))},P=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],j=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{align:"right",children:Object(h.jsx)("button",{onClick:function(){j(!0)},children:"ADMIN LOGIN"})}),Object(h.jsx)("div",{children:c&&Object(h.jsx)(y,{})})]})},N=function(e){var t=e.type,c=void 0===t?"button":t,n=e.className,j=e.width,i=e.height,x=e.margin,r=e.padding,d=e.onClick,s=e.children;return Object(h.jsx)("button",{type:c,className:n,onClick:d,style:{width:j,height:i,padding:r,margin:x},children:s})},S=function(e){var t=e.tag,c=void 0===t?"span":t,n=e.className,j=e.children;return Object(h.jsx)(c,{className:n,children:j})};var I=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{id:"test1",children:[Object(h.jsx)("br",{}),Object(h.jsxs)("center",{children:[Object(h.jsx)("b",{children:"\uc0c1\ud0dc"}),"\xa0\xa0",Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\uc0c1"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\uc911"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ud558"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\uc804\uccb4"})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("center",{children:[Object(h.jsx)("b",{children:"\uac00\uaca9"}),"\xa0\xa0",Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"~10\ub9cc\uc6d0"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"~30\ub9cc\uc6d0"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"~50\ub9cc\uc6d0"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"~100\ub9cc\uc6d0"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\uc804\uccb4"})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("center",{children:[Object(h.jsx)("b",{children:"\uac80\uc0c9\uc870\uac743"}),"\xa0\xa0",Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9581"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9582"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9583"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9584"})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("center",{children:[Object(h.jsx)("b",{children:"\uac80\uc0c9\uc870\uac744"}),"\xa0\xa0",Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9581"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9582"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9583"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9584"})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("center",{children:[Object(h.jsx)("b",{children:"\uac80\uc0c9\uc870\uac745"}),"\xa0\xa0",Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9581"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9582"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9583"})}),Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"80px",children:Object(h.jsx)(S,{children:"\ubd84\ub9584"})})]}),Object(h.jsx)("br",{})]})})};var F=function(){return Object(h.jsx)(N,{padding:"5px 5px 5px 5px",width:"50px",children:Object(h.jsx)(S,{children:"\uac80\uc0c9"})})},A=function(e){Object(s.a)(c,e);var t=Object(p.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(o.a,{basename:"/capstone",children:[Object(h.jsx)(u.a,{exact:!0,path:"/Next",component:f}),Object(h.jsx)(u.a,{exact:!0,path:"/",component:P}),Object(h.jsx)(u.a,{exact:!0,path:"/",component:a}),Object(h.jsxs)("center",{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",component:b}),"\xa0\xa0",Object(h.jsx)(u.a,{exact:!0,path:"/",component:F})]}),Object(h.jsx)("br",{}),Object(h.jsx)(u.a,{exact:!0,path:"/",component:I})]})})}}]),c}(n.Component),T=A,B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,j=t.getFCP,i=t.getLCP,x=t.getTTFB;c(e),n(e),j(e),i(e),x(e)}))};x.a.render(Object(h.jsx)(j.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),B()}},[[37,1,2]]]);
//# sourceMappingURL=main.24c1c88f.chunk.js.map