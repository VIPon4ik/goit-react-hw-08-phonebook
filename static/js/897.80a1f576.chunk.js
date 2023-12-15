"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[897],{670:function(n,e,t){t.d(e,{Z:function(){return _}});var i,r,a,o,d,s,c,l=t(1413),x=t(2791),u=t(8022),p=t(168),m=t(6088),f=t(2729),h=t(3466),Z=m.Z.div(i||(i=(0,p.Z)(["\n  width: 100%;\n  max-width: 400px;\n  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);\n  padding: 40px 20px;\n  border-radius: 4px;\n  background-color: #fff;\n  margin: 0 auto;\n  margin-top: 120px;\n"]))),v=m.Z.form(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),b=m.Z.div(a||(a=(0,p.Z)(["\n  width: 100%;\n"]))),g=(0,m.Z)(f.Z)(o||(o=(0,p.Z)(["\n  width: 100%;\n"]))),j=m.Z.h1(d||(d=(0,p.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n  text-transform: capitalize;\n  color: rgb(67, 77, 91);\n"]))),w=m.Z.p(s||(s=(0,p.Z)(["\n  margin: 10px 0;\n  color: tomato;\n  \n  &:first-letter {\n    text-transform: capitalize;\n  }\n"]))),y=(0,m.Z)(h.Z)(c||(c=(0,p.Z)(["\n  margin-top: 20px;\n"]))),S=t(1087),k=t(1134),z=t(4695),C=t(184),_=function(n){var e=n.title,t=n.handleSubmit,i=n.validationSchema,r=n.redirectUrl,a=n.redirectMessage,o=n.defaultName,d=void 0===o?"":o,s=n.defaultNumber,c=void 0===s?"":s,p=(0,k.cI)({resolver:(0,z.X)(i)}),m=p.register,f=p.formState,h=f.isSubmitSuccessful,_=f.errors,D=p.handleSubmit,I=p.reset,E=Object.keys(i.fields);return(0,x.useEffect)((function(){h&&I()}),[I,h]),(0,x.useEffect)((function(){d&&c&&I({name:d,number:c})}),[d,c]),(0,C.jsxs)(Z,{children:[(0,C.jsx)(j,{children:e}),(0,C.jsxs)(v,{onSubmit:D(t),children:[E.map((function(n,e){var t,i=function(n){switch(n){case"password":return"password";case"email":return"email";case"number":return"tel";default:return"text"}}(n);return(0,C.jsxs)(b,{children:[(0,C.jsx)(g,(0,l.Z)({type:i,label:"".concat(n.charAt(0).toUpperCase()+n.slice(1)),variant:"outlined"},m(n))),(0,C.jsx)(w,{children:null===(t=_[n])||void 0===t?void 0:t.message})]},n)})),(0,C.jsx)(u.Z,{variant:"contained",type:"submit",size:"large",children:"Confirm"}),a&&(0,C.jsx)(y,{component:S.rU,to:"/".concat(r),children:a})]})]})}},4897:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var i,r,a,o,d,s,c,l,x,u,p=t(2791),m=t(4420),f=t(6351),h=t(9439),Z=t(1153),v=t(8022),b=t(7234),g=t(168),j=t(6088),w=j.Z.form(i||(i=(0,g.Z)(["\n  max-width: 280px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n  background-color: #fff;\n"]))),y=j.Z.h1(r||(r=(0,g.Z)(["\n  text-align: center;\n  font-size: 20px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),S=j.Z.div(a||(a=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),k=t(184),z=function(n){var e=n.ID,t=n.name,i=n.setShow,r=(0,m.I0)();return(0,k.jsxs)(w,{onSubmit:function(n){n.preventDefault(),r((0,b.GK)(e)),i()},children:[(0,k.jsxs)(y,{children:["You sure you want to delete ",t,"?"]}),(0,k.jsxs)(S,{children:[(0,k.jsx)(v.Z,{variant:"outlined",type:"click",onClick:function(n){n.preventDefault(),i()},children:"Go back"}),(0,k.jsx)(v.Z,{variant:"contained",type:"submit",children:"Delete"})]})]})},C=j.Z.li(o||(o=(0,g.Z)(["\n  padding: 6px;\n  width: 100%;\n  height: 100px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);\n\n  @media screen and (min-width: 768px) {\n    padding: 10px;\n  }\n"]))),_=j.Z.div(d||(d=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n  }\n"]))),D=j.Z.h1(s||(s=(0,g.Z)(["\n  font-size: 16px;\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 90px;\n\n  @media screen and (min-width: 375px) {\n    max-width: 150px;\n  }\n\n  @media screen and (min-width: 475px) {\n    max-width: 250px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n    max-width: 300px;\n  }\n"]))),I=j.Z.p(c||(c=(0,g.Z)(["\n  font-size: 12px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),E=j.Z.div(l||(l=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),M=t(9952),N=t(1286),A=t(670),L=t(4888),U=t(9823),q=j.Z.button(x||(x=(0,g.Z)(["\n  background: transparent;\n  border: none;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n  color: rgb(67, 77, 91);\n\n  &:hover {\n    color: #212121;\n  }\n"]))),G=t(8007),F=G.Ry({name:G.Z_().min(2).max(36).required(),number:G.Z_().min(8).max(14).required()}),K=function(n){var e=n.name,t=n.number,i=n.id,r=n.setShow,a=(0,m.I0)(),o=(0,m.v9)(f.Cc);return(0,k.jsxs)("div",{style:{position:"relative"},children:[o&&(0,k.jsx)(L.Z,{}),(0,k.jsx)(A.Z,{title:"Edit contact",handleSubmit:function(n){var e=n.name,t=n.number;a((0,b.mP)({id:i,name:e,number:t})),r()},validationSchema:F,defaultName:e,defaultNumber:t}),(0,k.jsx)(q,{type:"button",onClick:r,children:(0,k.jsx)(U.Z,{})})]})},O=function(n){var e=n.name,t=n.number,i=n.ID,r=(0,p.useState)(!1),a=(0,h.Z)(r,2),o=a[0],d=a[1],s=(0,p.useState)(!1),c=(0,h.Z)(s,2),l=c[0],x=c[1],u=function(){return x((function(n){return!n}))},m=function(){return d((function(n){return!n}))};return(0,k.jsxs)(C,{children:[(0,k.jsxs)(_,{children:[(0,k.jsx)(M.Z,{style:{fontSize:50}}),(0,k.jsxs)("div",{children:[(0,k.jsx)(D,{children:e}),(0,k.jsx)(I,{children:t})]})]}),(0,k.jsxs)(E,{children:[(0,k.jsx)(v.Z,{variant:"contained",type:"click",onClick:m,children:"Delete"}),(0,k.jsxs)(v.Z,{variant:"outlined",onClick:u,children:["Edit ",(0,k.jsx)(N.Z,{style:{fontSize:16,marginLeft:2}})]})]}),o&&(0,k.jsx)(Z.Z,{children:(0,k.jsx)(z,{setShow:m,name:e,ID:i})}),l&&(0,k.jsx)(Z.Z,{children:(0,k.jsx)(K,{name:e,number:t,setShow:u,id:i})})]})},P=j.Z.ul(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  max-height: 85vh;\n  overflow-y: scroll;\n  padding: 10px;\n"]))),R=function(){var n=(0,m.v9)(f.Af),e=(0,m.v9)(f.Cc);return(0,k.jsxs)(k.Fragment,{children:[e&&(0,k.jsx)(L.Z,{}),0!==n.length&&(0,k.jsx)(P,{children:n.map((function(n){var e=n.name,t=n.number,i=n.id;return(0,k.jsx)(O,{ID:i,name:e,number:t},i)}))})]})}},9952:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(184),o=(0,r.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");e.Z=o},1286:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(184),o=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=o}}]);
//# sourceMappingURL=897.80a1f576.chunk.js.map