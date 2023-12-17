"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[897],{670:function(n,e,t){t.d(e,{Z:function(){return _}});var i,r,a,o,d,s,c,l=t(1413),u=t(2791),x=t(8022),m=t(168),p=t(6088),h=t(2729),f=t(3466),b=p.Z.div(i||(i=(0,m.Z)(["\n  width: 100%;\n  max-width: 400px;\n  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);\n  padding: 40px 20px;\n  border-radius: 4px;\n  background-color: #fff;\n  margin: 40px auto;\n  margin-top: 100px;\n"]))),Z=p.Z.form(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),g=p.Z.div(a||(a=(0,m.Z)(["\n  width: 100%;\n"]))),v=(0,p.Z)(h.Z)(o||(o=(0,m.Z)(["\n  width: 100%;\n"]))),w=p.Z.h1(d||(d=(0,m.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n  text-transform: capitalize;\n  color: rgb(67, 77, 91);\n"]))),j=p.Z.p(s||(s=(0,m.Z)(["\n  margin: 10px 0;\n  color: tomato;\n  \n  &:first-letter {\n    text-transform: capitalize;\n  }\n"]))),y=(0,p.Z)(f.Z)(c||(c=(0,m.Z)(["\n  margin-top: 20px;\n"]))),S=t(1087),k=t(1134),z=t(4695),C=t(184),_=function(n){var e=n.title,t=n.handleSubmit,i=n.validationSchema,r=n.redirectUrl,a=n.redirectMessage,o=n.defaultName,d=void 0===o?"":o,s=n.defaultNumber,c=void 0===s?"":s,m=(0,k.cI)({resolver:(0,z.X)(i)}),p=m.register,h=m.formState,f=h.isSubmitSuccessful,_=h.errors,D=m.handleSubmit,I=m.reset,N=Object.keys(i.fields);return(0,u.useEffect)((function(){f&&I()}),[I,f]),(0,u.useEffect)((function(){d&&c&&I({name:d,number:c})}),[d,c]),(0,C.jsxs)(b,{children:[(0,C.jsx)(w,{children:e}),(0,C.jsxs)(Z,{onSubmit:D(t),children:[N.map((function(n,e){var t,i=function(n){switch(n){case"password":return"password";case"email":return"email";case"number":return"tel";default:return"text"}}(n);return(0,C.jsxs)(g,{children:[(0,C.jsx)(v,(0,l.Z)({type:i,label:"".concat(n.charAt(0).toUpperCase()+n.slice(1)),variant:"outlined"},p(n))),(0,C.jsx)(j,{children:null===(t=_[n])||void 0===t?void 0:t.message})]},n)})),(0,C.jsx)(x.Z,{variant:"contained",type:"submit",size:"large",children:"Confirm"}),a&&(0,C.jsx)(y,{component:S.rU,to:"/".concat(r),children:a})]})]})}},4897:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var i,r,a,o,d,s,c,l,u,x,m,p=t(2791),h=t(4420),f=t(6351),b=t(9439),Z=t(1153),g=t(8022),v=t(7234),w=t(168),j=t(6088),y=j.Z.form(i||(i=(0,w.Z)(["\n  max-width: 280px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n  background-color: #fff;\n"]))),S=j.Z.h1(r||(r=(0,w.Z)(["\n  text-align: center;\n  font-size: 20px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),k=j.Z.div(a||(a=(0,w.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),z=t(184),C=function(n){var e=n.ID,t=n.name,i=n.setShow,r=(0,h.I0)();return(0,z.jsxs)(y,{onSubmit:function(n){n.preventDefault(),r((0,v.GK)(e)),i()},children:[(0,z.jsxs)(S,{children:["You sure you want to delete ",t,"?"]}),(0,z.jsxs)(k,{children:[(0,z.jsx)(g.Z,{variant:"outlined",type:"click",onClick:function(n){n.preventDefault(),i()},children:"Go back"}),(0,z.jsx)(g.Z,{variant:"contained",type:"submit",children:"Delete"})]})]})},_=j.Z.li(o||(o=(0,w.Z)(["\n  padding: 6px;\n  width: 100%;\n  height: 100px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);\n\n  @media screen and (min-width: 768px) {\n    padding: 10px;\n  }\n"]))),D=j.Z.div(d||(d=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n  }\n"]))),I=j.Z.h1(s||(s=(0,w.Z)(["\n  font-size: 16px;\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 90px;\n\n  @media screen and (min-width: 375px) {\n    max-width: 150px;\n  }\n\n  @media screen and (min-width: 475px) {\n    max-width: 250px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n    max-width: 300px;\n  }\n"]))),N=j.Z.p(c||(c=(0,w.Z)(["\n  font-size: 12px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),E=j.Z.div(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),M=t(9952),q=t(1286),R=t(670),A=t(4888),L=t(9823),U=j.Z.button(u||(u=(0,w.Z)(["\n  background: transparent;\n  border: none;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n  color: rgb(67, 77, 91);\n\n  &:hover {\n    color: #212121;\n  }\n"]))),F=t(8007),G=F.Ry({name:F.Z_().min(2).max(36).required(),number:F.Rx().integer().positive().test("len","Number must be between 8 and 14 digits",(function(n){var e=n.toString();return e.length>=8&&e.length<=14})).required().typeError("Number cannot be a string")}),K=function(n){var e=n.name,t=n.number,i=n.id,r=n.setShow,a=(0,h.I0)(),o=(0,h.v9)(f.Cc);return(0,z.jsxs)("div",{style:{position:"relative"},children:[o&&(0,z.jsx)(A.Z,{}),(0,z.jsx)(R.Z,{title:"Edit contact",handleSubmit:function(n){var e=n.name,t=n.number;a((0,v.mP)({id:i,name:e,number:t})),r()},validationSchema:G,defaultName:e,defaultNumber:t}),(0,z.jsx)(U,{type:"button",onClick:r,children:(0,z.jsx)(L.Z,{})})]})},O=function(n){var e=n.name,t=n.number,i=n.ID,r=(0,p.useState)(!1),a=(0,b.Z)(r,2),o=a[0],d=a[1],s=(0,p.useState)(!1),c=(0,b.Z)(s,2),l=c[0],u=c[1],x=function(){return u((function(n){return!n}))},m=function(){return d((function(n){return!n}))};return(0,z.jsxs)(_,{children:[(0,z.jsxs)(D,{children:[(0,z.jsx)(M.Z,{style:{fontSize:50}}),(0,z.jsxs)("div",{children:[(0,z.jsx)(I,{children:e}),(0,z.jsx)(N,{children:t})]})]}),(0,z.jsxs)(E,{children:[(0,z.jsx)(g.Z,{variant:"contained",type:"click",onClick:m,children:"Delete"}),(0,z.jsxs)(g.Z,{variant:"outlined",onClick:x,children:["Edit ",(0,z.jsx)(q.Z,{style:{fontSize:16,marginLeft:2}})]})]}),o&&(0,z.jsx)(Z.Z,{children:(0,z.jsx)(C,{setShow:m,name:e,ID:i})}),l&&(0,z.jsx)(Z.Z,{children:(0,z.jsx)(K,{name:e,number:t,setShow:x,id:i})})]})},P=t(2729),T=j.Z.ul(x||(x=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  max-height: 85vh;\n  overflow-y: scroll;\n  padding: 10px;\n"]))),V=(0,j.Z)(P.Z)(m||(m=(0,w.Z)(["\n  background: #fff;\n  width: 100%;\n  max-width: 475px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n  display: block;\n  & div {\n    width: 100%;\n  }\n"]))),X=t(6895),Y=F.Ry({name:F.Z_().min(2).max(36).required(),number:F.Rx().integer().positive().test("len","Number must be between 8 and 14 digits",(function(n){var e=n.toString();return e.length>=8&&e.length<=14})).required().typeError("Number cannot be a string")}),B=function(){var n=(0,h.v9)(f.Cc),e=(0,h.v9)(f.DI),t=(0,h.I0)();return(0,z.jsxs)(z.Fragment,{children:[n&&(0,z.jsx)(A.Z,{}),(0,z.jsx)(R.Z,{title:"Add contact",handleSubmit:function(n){var e=n.name,i=n.number;t((0,v.uK)({name:e,number:i}))},validationSchema:Y}),(0,z.jsx)(V,{label:"Filter",variant:"outlined",type:"text",onChange:function(n){var e=n.currentTarget.value;t((0,X.M)(e))}}),0!==e.length&&(0,z.jsx)(T,{children:e.map((function(n){var e=n.name,t=n.number,i=n.id;return(0,z.jsx)(O,{ID:i,name:e,number:t},i)}))})]})}},9952:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(184),o=(0,r.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");e.Z=o},1286:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(184),o=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=o}}]);
//# sourceMappingURL=897.f25df9c1.chunk.js.map