"use strict";(self.webpackChunkgocredix=self.webpackChunkgocredix||[]).push([[958],{4751:function(e,n,t){t.r(n);var r=t(1413),a=t(885),i=t(890),l=t(4721),o=t(1889),c=t(2791),s=t(9434),u=t(4310),d=t(8078),m=t(3342),f=t(9436),h=t(1701),x=t(2377),p=t(8171),j=t(5705),Z=t(4215),v=t(6385),g=t(1972),b=t(9174),y=(t(7497),t(184)),C={id_cliente:"",cliente:""};n.default=function(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.ui})),t=n.quickSearchSelected,w=n.quickSearchId,_=((0,s.v9)((function(e){return e.prestamo})).lista_prestamos,(0,c.useState)(null)),P=(0,a.Z)(_,2),S=P[0],N=P[1];(0,c.useEffect)((function(){if(t&&"cliente"===w)return k();N(null)}),[t]),(0,c.useEffect)((function(){e((0,g.V9)()),e((0,u.$A)()),e((0,v.Jd)())}),[e]);var k=function(){N((0,r.Z)((0,r.Z)({},C),{},{id_cliente:t._id,cliente:t.nombre+" "+t.apellido})),e((0,v.Jd)())},F=function(){e((0,u.so)("cliente")),e((0,u.wj)())},I=function(){if(!t)return e((0,u.NV)("Porfavor Seleccione un cliente"));e((0,v.gu)(t._id))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j.J9,{initialValues:S||C,onSubmit:function(e){},validationSchema:{},enableReinitialize:!0,children:function(e){e.handleReset,e.isValid,e.errors,e.resetForm;return(0,y.jsxs)(j.l0,{children:[(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,y.jsx)(i.Z,{variant:"h6",gutterBottom:!0,children:"Pagos"}),(0,y.jsx)(d.Z,{})]}),(0,y.jsx)(l.Z,{}),(0,y.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,y.jsx)(o.ZP,{item:!0,xs:9,md:6,children:(0,y.jsx)(m.w,{handleBr:F,disabled:!0,margin:"dense",fullWidth:!0,id:"cliente",label:"Cliente",name:"cliente"})}),(0,y.jsx)(o.ZP,{item:!0,xs:3,md:2,children:(0,y.jsx)(Z.U,{text:"Buscar",onClick:I})}),(0,y.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,y.jsx)(b.m,{})})]})]})}}),(0,y.jsx)(f.g,{}),(0,y.jsx)(h.Z,{}),"cliente"===w&&(0,y.jsx)(x.s,{title:"busqueda de clientes",api:"clientes/getCliente",columns:p.h})]})}},9174:function(e,n,t){t.d(n,{m:function(){return T}});var r=t(885),a=t(7621),i=t(9504),l=t(890),o=t(2791),c=t(9434),s=t(6385),u=t(4310),d=t(4215),m=t(7497),f=t(792),h=t(4721),x=t(9276),p=t(5359),j=t(9778),Z=t(8447),v=t(184),g=function(e){var n=e.open,t=e.handleClose,r=e.children,a=e.title,i=(0,j.Z)(),l={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"".concat(i?"90%":"70%"),bgcolor:"background.paper !important",border:"1px solid ".concat(p.r.palette.valen.tertiary),borderRadius:8,boxShadow:24,p:4,background:"white"};return(0,v.jsx)(f.Z,{open:n,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,v.jsxs)(x.Z,{sx:l,children:[(0,v.jsx)(Z.N,{title:a,handleClose:t}),(0,v.jsx)(h.Z,{sx:{mt:2,mb:2}}),r]})})},b=(t(2377),t(5861)),y=t(4687),C=t.n(y),w=t(5855),_=t(3994),P=function(e){var n=e.value;return(0,v.jsx)(v.Fragment,{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n||0)})},S=function(e){var n=e.pago,t=e.deletePago;return(0,v.jsxs)(w.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,v.jsx)(_.Z,{component:"th",scope:"row",children:(0,v.jsx)(P,{value:n.valor_pago})}),(0,v.jsx)(_.Z,{children:n.fecha_pago.split("T")[0]}),(0,v.jsx)(_.Z,{children:(0,v.jsx)(P,{value:n.valor_capital})}),(0,v.jsx)(_.Z,{children:(0,v.jsx)(P,{value:n.valor_interes})}),(0,v.jsx)(_.Z,{children:(0,v.jsx)(d.U,{fullWidth:!1,text:"Eliminar",sx:{background:"red"},onClick:function(){return t(n._id)}})})]})},N=t(9585),k=t(9281),F=t(5527),I=t(9836),U=t(6890),D=t(3382),V=function(){var e=(0,c.I0)(),n=(0,c.v9)((function(e){return e.prestamo})).prestamo;(0,o.useEffect)((function(){console.log(n)}),[n]);var t=function(){var t=(0,b.Z)(C().mark((function t(r){return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e((0,s.My)(r,n._id));case 2:return t.next=4,e((0,s.gu)(n.id_cliente));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(a.Z,{sx:{mt:2},elevation:3,children:[(0,v.jsx)(N.Z,{children:" Info del prestamo"}),(0,v.jsxs)(i.Z,{children:[(0,v.jsxs)(l.Z,{children:["Cliente: ",n.cliente]}),(0,v.jsxs)(l.Z,{children:["Fecha: ",n.fecha_prestamo.split("T")[0]]}),(0,v.jsxs)(l.Z,{children:["Valor: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n.valor_prestamo)]}),(0,v.jsxs)(l.Z,{children:["Saldo: ",(0,v.jsx)(P,{value:n.capital_actual})," "]}),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(k.Z,{component:F.Z,children:(0,v.jsxs)(I.Z,{"aria-label":"simple table",children:[(0,v.jsx)(U.Z,{children:(0,v.jsxs)(w.Z,{children:[(0,v.jsx)(_.Z,{children:"Pago"}),(0,v.jsx)(_.Z,{children:"Fecha"}),(0,v.jsx)(_.Z,{children:"Capital"}),(0,v.jsx)(_.Z,{children:"Interes"}),(0,v.jsx)(_.Z,{})]})}),(0,v.jsx)(D.Z,{children:(null===n||void 0===n?void 0:n.pagos)&&(null===n||void 0===n?void 0:n.pagos.map((function(e,n){return(0,v.jsx)(S,{pago:e,deletePago:t},n)})))})]})})})]})]})})},T=function(){var e=(0,c.I0)(),n=(0,c.v9)((function(e){return e.prestamo})).lista_prestamos,t=(0,o.useState)(!1),f=(0,r.Z)(t,2),h=f[0],x=f[1];return(0,v.jsxs)(v.Fragment,{children:[n.length>0&&n.map((function(n){return(0,v.jsx)(a.Z,{sx:{mt:2},elevation:3,children:(0,v.jsxs)(i.Z,{children:[(0,v.jsxs)(l.Z,{children:["Cliente: ",n.cliente]}),(0,v.jsxs)(l.Z,{children:["Fecha Prestamo: ",n.fecha_prestamo.split("T")[0]]}),(0,v.jsxs)(l.Z,{children:["Valor Prestamo: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n.valor_prestamo)]}),(0,v.jsxs)(l.Z,{children:["Capital Actual: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n.capital_actual)]}),(0,v.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,v.jsxs)(l.Z,{children:["Tasa Interes: ",n.tasa_interes,"%"]})}),(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"end",gap:4},children:[(0,v.jsx)(d.U,{fullWidth:!1,text:"Pagar",onClick:function(){return t=n,e((0,s.Mu)(t)),void e((0,u.Dk)());var t}}),(0,v.jsx)(d.U,{fullWidth:!1,text:"Ver pagos",onClick:function(){return t=n,e((0,s.Mu)(t)),void x(!0);var t}})]})]})},n._id)})),(0,v.jsx)(m.o,{title:"Pagar Prestamo"}),(0,v.jsx)(g,{open:h,handleClose:function(){x(!1)},title:"Pagos",children:(0,v.jsx)(V,{})})]})}},7497:function(e,n,t){t.d(n,{o:function(){return B}});var r,a=t(5861),i=t(885),l=t(4687),o=t.n(l),c=t(4721),s=t(1614),u=t(1889),d=t(890),m=t(4454),f=t(7391),h=t(792),x=t(9276),p=t(2426),j=t.n(p),Z=t(2791),v=t(9434),g=t(5359),b=t(9778),y=t(6385),C=t(4310),w=t(4215),_=t(1413),P=t(5987),S=t(168),N=t(6934),k=t(948),F=t(184),I=["onChange"],U=["label"],D=(0,N.ZP)(f.Z)(r||(r=(0,S.Z)(["\n    & label span{\n        color:red!important\n    }\n    & input:disabled{\n        color:red!important;\n        -webkit-text-fill-color: rgba(0, 0, 0, 1.0);\n    }\n"]))),V=Z.forwardRef((function(e,n){var t=e.onChange,r=(0,P.Z)(e,I);return(0,F.jsx)(k.h3,(0,_.Z)((0,_.Z)({},r),{},{getInputRef:n,onValueChange:function(n){t({target:{name:e.name,value:n.value}})},thousandSeparator:!0,valueIsNumericString:!0}))})),T=function(e){var n=e.label,t=(0,P.Z)(e,U);return(0,F.jsxs)(F.Fragment,{children:["  ",(0,F.jsx)(D,(0,_.Z)((0,_.Z)({margin:"normal",fullWidth:!0,label:n},t),{},{InputProps:{inputComponent:V,inputProps:(0,_.Z)({},t)}}))]})},W=t(8447),B=function(e){var n=e.title,t=(0,b.Z)(),r={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"".concat(t?"80%":"60%"),bgcolor:"background.paper !important",border:"1px solid ".concat(g.r.palette.valen.tertiary),borderRadius:8,boxShadow:24,p:4,background:"white"},l=(0,Z.useState)(""),p=(0,i.Z)(l,2),_=p[0],P=p[1],S=(0,Z.useState)(""),N=(0,i.Z)(S,2),k=N[0],I=N[1],U=(0,Z.useState)(""),D=(0,i.Z)(U,2),V=D[0],B=D[1],E=(0,Z.useState)(!1),M=(0,i.Z)(E,2),R=M[0],q=M[1],A=(0,Z.useState)(!1),J=(0,i.Z)(A,2),Y=J[0],$=J[1],z=(0,v.I0)(),G=(0,v.v9)((function(e){return e.ui})).modalOpen,O=(0,v.v9)((function(e){return e.prestamo})).prestamo;(0,Z.useEffect)((function(){P(""),B(""),L()}),[O]),(0,Z.useEffect)((function(){if(!G)return I(j()().format("YYYY-MM-DD"))}),[G]);var H,L=function(){var e;if((null===O||void 0===O||null===(e=O.pagos)||void 0===e?void 0:e.length)>0){var n=O.pagos.reduce((function(e,n){return new Date(e.date)>new Date(n.date)?e:n}));B(null===n||void 0===n?void 0:n.fecha_pago)}},K=function(){z((0,C.MJ)())},Q=function(){var e=(0,a.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=2;break}return e.abrupt("return",z((0,C.NV)("Digite correctamente el valor a pagar")));case 2:if(k){e.next=4;break}return e.abrupt("return",z((0,C.NV)("Digite correctamente la fecha de pago")));case 4:return console.log(_),console.log(k),e.next=8,z((0,y.UH)(O._id,_,k,O.valor_interes,Y));case 8:return e.next=10,z((0,y.gu)(O.id_cliente));case 10:K();case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,F.jsx)("div",{children:(H=O,!(0===Object.keys(H).length)&&(0,F.jsx)(h.Z,{open:G,onClose:K,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,F.jsxs)(x.Z,{sx:r,children:[(0,F.jsx)(W.N,{title:n,handleClose:K}),(0,F.jsx)(c.Z,{sx:{mt:2,mb:2}}),(0,F.jsx)(s.Z,{component:"main",maxWidth:"lg",style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"},children:(0,F.jsxs)(u.ZP,{container:!0,spacing:2,style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"},children:[(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:["Cliente: ",R," ",O.cliente]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:["Fecha prestamo: ",O.fecha_prestamo.split("T")[0]]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:["Valor Prestamo: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(O.valor_prestamo)]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:["Capital Actual: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(O.capital_actual)]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:[" ",(0,F.jsx)("b",{children:"Valor Interes"}),": ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(O.valor_interes),(0,F.jsx)(m.Z,{onChange:function(){return q((function(e){return!e})),P(R?"":O.valor_interes)},value:R})]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:[" ",(0,F.jsx)("b",{children:"Fecha Corte"}),": ",V.split("T")[0]]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(f.Z,{type:"date",margin:"dense",id:"fecha_pago",label:"Fecha pago",name:"fecha_pago",InputLabelProps:{shrink:!0},onChange:function(e){I(e.target.value)},onBlur:function(e){if(!k)return z((0,C.NV)("Digite la fecha de pago correctamente"));z((0,y.tN)(O._id,j()(k)))},value:k,prefix:"$"})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(T,{margin:"dense",id:"valor_pagar",label:"Valor a Pagar",name:"valor_pagar",onChange:function(e){P(e.target.value)},value:_,prefix:"$"})}),(0,F.jsx)(w.U,{text:"Pagar",onClick:Q}),(0,F.jsx)(m.Z,{title:"Al seleccionar aqui se da el credito por pagado",onChange:function(){$((function(e){return!e}))},value:Y}),"Finiquitar Prestamo"]})})]})}))})}},8171:function(e,n,t){t.d(n,{h:function(){return r},p:function(){return a}});t(2426);var r=[{field:"cedula",headerName:"Cedula",width:150,editable:!1},{field:"fullName",headerName:"Nombre",width:160,valueGetter:function(e){return"".concat(e.row.nombre||""," ").concat(e.row.apellido||"")}},{field:"telefono",headerName:"Telefono",width:150,editable:!1},{field:"direccion",headerName:"Direccion",width:150,editable:!1}],a=[{field:"fullName",headerName:"Nombre",width:160,valueGetter:function(e){return"".concat(e.row.cliente||"")}},{field:"fecha_prestamo",headerName:"Fecha Prestamo",width:150,editable:!1,valueFormatter:function(e){return e.value.split("T")[0]}},{field:"valor_prestamo",headerName:"Valor Prestamo",width:150,editable:!1,valueFormatter:function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.value)}},{field:"tasa_interes",headerName:"Tasa",width:100,editable:!1}]},4215:function(e,n,t){t.d(n,{U:function(){return s}});var r=t(1413),a=t(5987),i=t(6151),l=(t(2791),t(5359)),o=t(184),c=["onClick","text","type","style"],s=function(e){var n=e.onClick,t=e.text,s=e.type,u=(e.style,(0,a.Z)(e,c));return(0,o.jsx)(i.Z,(0,r.Z)((0,r.Z)({onClick:n,className:"button",type:s,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,bgcolor:l.r.palette.valen.secondary}},u),{},{children:t}))}},3342:function(e,n,t){t.d(n,{w:function(){return j}});var r,a=t(1413),i=t(885),l=t(5987),o=t(168),c=t(7391),s=t(3400),u=t(5705),d=(t(2791),t(5359)),m=t(6934),f=t(5097),h=t(184),x=["label","handleBr","btn_disabled"],p=(0,m.ZP)(c.Z)(r||(r=(0,o.Z)(["\n    & label span{\n        color:red!important\n    }\n    & input:disabled{\n        color:red!important;\n        -webkit-text-fill-color: rgba(0, 0, 0, 1.0);\n    }\n    \n"]))),j=function(e){var n=e.label,t=e.handleBr,r=e.btn_disabled,o=(0,l.Z)(e,x),c=(0,u.U$)(o),m=(0,i.Z)(c,2),j=m[0],Z=m[1];return(0,h.jsxs)(h.Fragment,{children:["  ",(0,h.jsx)(p,(0,a.Z)((0,a.Z)((0,a.Z)({margin:"normal",fullWidth:!0,label:n},o),j),{},{error:void 0!==Z.error&&Z.touched,InputProps:{endAdornment:(0,h.jsx)(s.Z,{disabled:r,"aria-label":"toggle password visibility",onClick:t,edge:"end",children:(0,h.jsx)(f.ZC,{})})}})),(0,h.jsx)(u.Bc,{name:o.name,component:"span",style:{color:d.r.palette.valen.error,fontSize:"12px"}})]})}},1972:function(e,n,t){t.d(n,{TE:function(){return a},zC:function(){return i},V9:function(){return l},Jh:function(){return o}});var r=t(9095),a=function(){return{type:r.a.formNew}},i=function(){return{type:r.a.formCancel}},l=function(){return{type:r.a.formInitial}},o=function(){return{type:r.a.formFetched}}}}]);
//# sourceMappingURL=958.9a24e323.chunk.js.map