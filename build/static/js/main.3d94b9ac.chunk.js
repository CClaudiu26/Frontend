(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),s=n.n(r),i=(n(47),n(48),n(49),n(15)),j=n(9),l=n(40),o=(n(54),n(55),n(1)),d=function(e){var t=e.data,n=void 0===t?[]:t;return Object(o.jsx)("div",{className:"d-tree",children:Object(o.jsx)("ul",{className:"d-flex d-tree-container flex-column",children:n.map((function(e){return Object(o.jsx)(b,{node:e})}))})})},b=function(e){var t=e.node,n=Object(c.useState)(!1),a=Object(j.a)(n,2),r=a[0],s=a[1],i=!!t.children;return Object(o.jsxs)("li",{className:"d-tree-node border-0",children:[Object(o.jsxs)("div",{className:"d-flex",style:{cursor:"pointer"},onClick:function(e){return s((function(e){return!e}))},children:[i&&Object(o.jsx)("div",{className:"d-inline d-tree-toggler ".concat(r?"active":""),children:Object(o.jsx)(l.a,{icon:"caret-right"})}),Object(o.jsxs)("div",{className:"col d-tree-head",children:[Object(o.jsx)("i",{className:"mr-1 ".concat(t.icon),children:" "}),t.label]})]}),i&&r&&Object(o.jsx)("div",{className:"d-tree-content",children:Object(o.jsx)("ul",{className:"d-flex d-tree-container flex-column",children:Object(o.jsx)(d,{data:t.children})})})]})},h=d,O=function(e){var t=e.handleShow,n=e.treeShow;return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.c,{className:"nav-link",exact:!0,to:"/",children:"Users"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.c,{className:"nav-link",exact:!0,to:"/Departments",children:"Departments"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",type:"button",onClick:n,children:"Tree"})})]})}),Object(o.jsx)(i.b,{className:"btn btn-outline-light",onClick:t,children:"Add Department "})]})})})},u=n(23),x=function(e){var t=e.handleShow;return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.c,{className:"nav-link",exact:!0,to:"/",children:"Users"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",exact:!0,to:"/Departments",children:"Departments"})})]})}),Object(o.jsx)(i.b,{className:"btn btn-outline-light",onClick:t,children:"Add User"})]})})})},m=n(42),p=n.n(m).a.create({baseURL:"https://dir-backend.herokuapp.com"}),f=n(7),v=n(6),N=n(11),g=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(j.a)(r,2),i=s[0],l=s[1],d=Object(c.useState)(""),b=Object(j.a)(d,2),h=b[0],O=b[1],m=Object(c.useState)(""),g=Object(j.a)(m,2),y=g[0],C=g[1],S=Object(c.useState)(""),k=Object(j.a)(S,2),D=k[0],T=k[1],w=Object(c.useState)(""),L=Object(j.a)(w,2),E=L[0],B=L[1],F=Object(c.useState)(0),A=Object(j.a)(F,2),H=A[0],G=A[1],U=Object(c.useState)(!1),I=Object(j.a)(U,2),J=I[0],M=I[1],R=Object(c.useState)(!1),P=Object(j.a)(R,2),W=P[0],V=P[1],z=function(){return V(!1)},K=function(){return M(!1)};Object(c.useEffect)((function(){p.get("/").then((function(e){console.log("success"),a(e.data)}))}),[]),Object(c.useEffect)((function(){p.get("/Departments").then((function(e){console.log("success"),l(e.data)}))}),[]);var Y=function(e){V(!0);for(var t=0;t<n.length;t++)n[t].id==e&&(O(n[t].lastName),C(n[t].firstName),T(n[t].jobTitle),B(n[t].department),G(n[t].id))};return Object(o.jsxs)("div",{children:[Object(o.jsx)(x,{handleShow:function(){return M(!0)}}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"py-4",children:[Object(o.jsx)("h1",{children:"Users"}),Object(o.jsxs)("table",{className:"table border shadow",children:[Object(o.jsx)("thead",{className:"thead-dark",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Last Name"}),Object(o.jsx)("th",{scope:"col",children:"First Name"}),Object(o.jsx)("th",{scope:"col",children:"Job Title"}),Object(o.jsx)("th",{children:"Action"})]})}),Object(o.jsx)("tbody",{children:n.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{style:{display:"none"},scope:"row",children:e.id}),Object(o.jsx)("td",{children:e.lastName}),Object(o.jsx)("td",{children:e.firstName}),Object(o.jsx)("td",{children:e.jobTitle}),Object(o.jsx)("td",{children:Object(o.jsx)(N.a,{className:"btn btn-outline",onClick:function(){return Y(e.id)},children:"Edit"})})]})}))})]})]})}),Object(o.jsxs)(v.a,{show:J,onHide:K,children:[Object(o.jsx)(v.a.Header,{closeButton:!0,children:Object(o.jsx)(v.a.Title,{children:"ADD USER"})}),Object(o.jsxs)(v.a.Body,{children:[Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Last Name "}),Object(o.jsx)(f.a.Control,{placeholder:"Last Name",type:"text",onChange:function(e){O(e.target.value)}})]}),Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"First Name "}),Object(o.jsx)(f.a.Control,{type:"text",placeholder:"First Name",onChange:function(e){C(e.target.value)}})]}),Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Job Title "}),Object(o.jsx)(f.a.Control,{placeholder:"Job Title",type:"text",onChange:function(e){T(e.target.value)}})]}),Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Department "}),Object(o.jsxs)(f.a.Control,{as:"select",onChange:function(e){B(e.target.value)},children:[Object(o.jsx)("option",{children:"Department"}),i.map((function(e){return Object(o.jsx)("option",{children:e.name})}))]})]})]}),Object(o.jsxs)(v.a.Footer,{children:[Object(o.jsx)(N.a,{variant:"secondary",onClick:K,children:"Close"}),Object(o.jsx)(N.a,{variant:"primary",onClick:function(){p.post("/create",{lastName:h,firstName:y,jobTitle:D,department:E}).then((function(){a([].concat(Object(u.a)(n),[{id:n.length+1,lastName:h,firstName:y,jobTitle:D,department:E}]))})),M(!1)},children:"Add User"})]})]}),Object(o.jsxs)(v.a,{show:W,onHide:z,children:[Object(o.jsx)(v.a.Header,{closeButton:!0,children:Object(o.jsx)(v.a.Title,{children:"EDIT USER"})}),Object(o.jsxs)(v.a.Body,{children:[Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Last Name "}),Object(o.jsx)(f.a.Control,{value:h,type:"text",placeholder:"Last Name",onChange:function(e){O(e.target.value)}})]}),Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"First Name "}),Object(o.jsx)(f.a.Control,{type:"text",value:y,placeholder:"First Name",onChange:function(e){C(e.target.value)}})]}),Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Job Title "}),Object(o.jsx)(f.a.Control,{type:"text",value:D,placeholder:"Job Title",onChange:function(e){T(e.target.value)}})]}),Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Department "}),Object(o.jsx)(f.a.Control,{as:"select",defaultValue:E,onChange:function(e){B(e.target.value)},children:i.map((function(e){return Object(o.jsx)("option",{children:e.name})}))})]})]}),Object(o.jsxs)(v.a.Footer,{children:[Object(o.jsx)(N.a,{variant:"secondary",onClick:z,children:"Close"}),Object(o.jsx)(N.a,{variant:"primary",onClick:function(){p.put("/update",{lastName:h,firstName:y,jobTitle:D,department:E,id:H}).then((function(){a(n.map((function(e){return e.id==H?{lastName:h,firstName:y,jobTitle:D,department:E,id:H}:e})))})),V(!1)},children:"Edit User"})]})]})]})},y=n(77),C=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(j.a)(r,2),i=s[0],l=s[1],d=Object(c.useState)(""),b=Object(j.a)(d,2),x=b[0],m=b[1],g=Object(c.useState)(""),C=Object(j.a)(g,2),S=C[0],k=C[1],D=Object(c.useState)(0),T=Object(j.a)(D,2),w=T[0],L=T[1],E=Object(c.useState)(""),B=Object(j.a)(E,2),F=B[0],A=B[1],H=Object(c.useState)(0),G=Object(j.a)(H,2),U=G[0],I=G[1],J=Object(c.useState)(""),M=Object(j.a)(J,2),R=M[0],P=M[1],W=Object(c.useState)(""),V=Object(j.a)(W,2),z=V[0],K=V[1],Y=Object(c.useState)(!1),q=Object(j.a)(Y,2),Q=q[0],X=q[1],Z=function(){return X(!1)},$=Object(c.useState)(!1),_=Object(j.a)($,2),ee=_[0],te=_[1],ne=function(){return te(!1)},ce=Object(c.useState)(!1),ae=Object(j.a)(ce,2),re=ae[0],se=ae[1],ie=function(){return se(!1)},je=Object(c.useState)(!1),le=Object(j.a)(je,2),oe=le[0],de=le[1],be=function(){return de(!1)},he=Object(c.useState)(!1),Oe=Object(j.a)(he,2),ue=Oe[0],xe=Oe[1],me=function(){return xe(!1)},pe=Object(c.useState)(!1),fe=Object(j.a)(pe,2),ve=fe[0],Ne=fe[1],ge=function(){return Ne(!1)},ye=[],Ce=[];ye.length=0,n.map((function(e){ye.push({id:e.name,label:e.name,parent:e.pdepartment})})),Array.prototype.push.apply(Ce,y(ye,{parentProperty:"parent",customID:"id"})),Object(c.useEffect)((function(){p.get("/").then((function(e){console.log("success"),l(e.data)}))}),[]),Object(c.useEffect)((function(){p.get("/Departments").then((function(e){console.log("success"),a(e.data)}))}),[]);var Se=function(e){te(!0);for(var t=0;t<n.length;t++)n[t].idd==e&&(A(n[t].name),m(n[t].name),L(n[t].idd),k(n[t].pdepartment))},ke=function(e){xe(!0);for(var t=0;t<n.length;t++)n[t].idd==e&&(m(n[t].name),L(n[t].idd),k(n[t].pdepartment))},De=function(e){se(!0);for(var t=0;t<n.length;t++)n[t].idd==e&&(m(n[t].name),L(n[t].idd),k(n[t].pdepartment))};return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{handleShow:function(){return X(!0)},treeShow:function(){Ne(!0),console.log(Ce)}}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"py-4",children:[Object(o.jsx)("h1",{children:"Departments"}),Object(o.jsxs)("table",{className:"table border shadow",children:[Object(o.jsx)("thead",{className:"thead-dark",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Department Name"}),Object(o.jsx)("th",{children:"Action"})]})}),Object(o.jsx)("tbody",{children:n.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsxs)("td",{children:[Object(o.jsx)(N.a,{className:"btn btn-primary mr-2",onClick:function(){return ke(e.idd)},children:"Details"}),Object(o.jsx)(N.a,{className:"btn btn-outline mr-2",onClick:function(){return Se(e.idd)},children:"Edit"}),Object(o.jsx)(N.a,{className:"btn btn-outline mr-2",onClick:function(){return De(e.idd)},children:"Move"})]})]})}))})]})]})}),Object(o.jsxs)(v.a,{show:Q,onHide:Z,children:[Object(o.jsx)(v.a.Header,{closeButton:!0,children:Object(o.jsx)(v.a.Title,{children:"ADD DEPARTMENT"})}),Object(o.jsxs)(v.a.Body,{children:[Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Department Name "}),Object(o.jsx)(f.a.Control,{type:"text",placeholder:"Department Name",onChange:function(e){m(e.target.value)}})]}),Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Where do you want to introduce this Department? "}),Object(o.jsxs)(f.a.Control,{as:"select",onChange:function(e){k(e.target.value)},children:[Object(o.jsx)("option",{}),n.map((function(e){return Object(o.jsx)("option",{children:e.name})}))]})]})]}),Object(o.jsxs)(v.a.Footer,{children:[Object(o.jsx)(N.a,{variant:"secondary",onClick:Z,children:"Close"}),Object(o.jsx)(N.a,{variant:"primary",onClick:function(){p.post("/createdepartment",{name:x,pdepartment:S}).then((function(){a([].concat(Object(u.a)(n),[{id:n.length+1,name:x,pdepartment:S}]))})),X(!1)},children:"Add Departments"})]})]}),Object(o.jsxs)(v.a,{show:ee,onHide:ne,children:[Object(o.jsx)(v.a.Header,{closeButton:!0,children:Object(o.jsx)(v.a.Title,{children:"EDIT DEPARTMENT"})}),Object(o.jsx)(v.a.Body,{children:Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Department Name "}),Object(o.jsx)(f.a.Control,{type:"text",value:x,onChange:function(e){m(e.target.value)}})]})}),Object(o.jsxs)(v.a.Footer,{children:[Object(o.jsx)(N.a,{variant:"secondary",onClick:ne,children:"Close"}),Object(o.jsx)(N.a,{variant:"primary",onClick:function(){var e=F;p.put("/updatedepartment",{checkname:F,name:x,id:w}).then((function(){a(n.map((function(t){return t.idd==w?Object.assign({},t,{name:x}):t.pdepartment==e?Object.assign({},t,{pdepartment:x}):t}))),l(i.map((function(t){return t.department==e?Object.assign({},t,{department:x}):t})))})),te(!1)},children:"Edit Department"})]})]}),Object(o.jsxs)(v.a,{show:re,onHide:ie,children:[Object(o.jsx)(v.a.Header,{closeButton:!0,children:Object(o.jsx)(v.a.Title,{children:"MOVE DEPARTMENT"})}),Object(o.jsx)(v.a.Body,{children:Object(o.jsxs)(f.a.Group,{children:[Object(o.jsx)(f.a.Label,{children:"Where do you want to move this Department? "}),Object(o.jsxs)(f.a.Control,{as:"select",defaultValue:S,onChange:function(e){k(e.target.value)},children:[Object(o.jsx)("option",{}),n.filter((function(e){return e.idd!=w})).map((function(e){return Object(o.jsx)("option",{children:e.name})}))]})]})}),Object(o.jsxs)(v.a.Footer,{children:[Object(o.jsx)(N.a,{variant:"secondary",onClick:ie,children:"Close"}),Object(o.jsx)(N.a,{variant:"primary",onClick:function(){n.filter((function(e){return e.idd==w})).map((function(e){return P(e.pdepartment)})),n.filter((function(e){return e.name==S})).map((function(e){return I(e.idd)})),n.filter((function(e){return e.name==S})).map((function(e){return K(e.pdepartment)})),se(!1),de(!0)},children:"Move Department"})]})]}),Object(o.jsxs)(v.a,{show:oe,onHide:be,children:[Object(o.jsx)(v.a.Header,{closeButton:!0,children:Object(o.jsx)(v.a.Title,{children:"WARNING"})}),Object(o.jsx)(v.a.Body,{children:"Are you sure you want to move this group?"}),Object(o.jsxs)(v.a.Footer,{children:[Object(o.jsx)(N.a,{variant:"secondary",onClick:be,children:"NO"}),Object(o.jsx)(N.a,{variant:"primary",onClick:function(){console.log(S+" "+w+" "+R+" "+U+" "+z),p.put("/movedepartment",{pdepartment:S,id:w,lastdepartment:R,lastid:U}).then((function(){a(n.map((function(e){return e.idd==w?{idd:w,pdepartment:S,name:x}:e})))})),de(!1)},children:"YES"})]})]}),Object(o.jsxs)(v.a,{show:ue,onHide:me,children:[Object(o.jsx)(v.a.Header,{closeButton:!0,children:Object(o.jsx)(v.a.Title,{children:"DETAILS"})}),Object(o.jsxs)(v.a.Body,{children:[Object(o.jsx)("h4",{children:"Users in this Department: "}),i.filter((function(e){return e.department==x})).map((function(e){return Object(o.jsxs)("p",{style:{marginLeft:"10px",fontWeight:500,fontSize:"18px"},children:[e.lastName,"    ",e.firstName," "]})})),Object(o.jsx)("br",{}),Object(o.jsx)("h4",{children:"Departments inside: "}),n.filter((function(e){return e.pdepartment==x})).map((function(e){return Object(o.jsx)("p",{style:{marginLeft:"10px",fontWeight:500,fontSize:"18px"},children:e.name})}))]}),Object(o.jsx)(v.a.Footer,{children:Object(o.jsx)(N.a,{variant:"primary",onClick:me,children:"OK"})})]}),Object(o.jsxs)(v.a,{show:ve,onHide:ge,children:[Object(o.jsx)(v.a.Header,{closeButton:!0,children:Object(o.jsx)(v.a.Title,{children:"Departments Tree"})}),Object(o.jsx)(v.a.Body,{children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col text-center",children:Object(o.jsx)("p",{className:"mt-3",children:Object(o.jsx)("div",{className:"row mt-3 d-flex justify-content-center",children:Object(o.jsx)("div",{className:"col-lg-8 text-left text-dark",children:Object(o.jsx)(h,{data:Ce})})})})})})}),Object(o.jsx)(v.a.Footer,{children:Object(o.jsx)(N.a,{variant:"secondary",onClick:ge,children:"Close"})})]})]})},S=n(10);var k=function(){return Object(o.jsx)(i.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(S.c,{children:[Object(o.jsx)(S.a,{exact:!0,path:"/",component:g}),Object(o.jsx)(S.a,{exact:!0,path:"/Departments",component:C})]})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),D()}},[[81,1,2]]]);
//# sourceMappingURL=main.3d94b9ac.chunk.js.map