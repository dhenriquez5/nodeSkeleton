"use strict";(self.webpackChunkgocredix=self.webpackChunkgocredix||[]).push([[669],{7803:function(e,n,t){t.r(n);var r=t(885),a=t(890),o=t(4721),i=t(1889),c=t(7391),s=t(2791),l=t(7676),u=(t(4215),t(9436)),d=t(1701),p=t(9434),x=t(4310),f=t(5850),h=t(1703),m=t(6385),Z=t(9174),j=t(184);n.default=function(){var e=(0,p.I0)(),n=(0,s.useState)(""),t=(0,r.Z)(n,2),v=t[0],g=t[1],b=(0,s.useState)(""),y=(0,r.Z)(b,2),I=y[0],C=y[1];(0,p.v9)((function(e){return e.prestamo})).lista_prestamos;(0,s.useEffect)((function(){e((0,m.Jd)())}),[]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,j.jsx)(a.Z,{variant:"h6",gutterBottom:!0,children:"Proximos a cobrar"}),(0,j.jsx)(l.Z,{})]}),(0,j.jsx)(o.Z,{}),(0,j.jsxs)(i.ZP,{container:!0,spacing:1,sx:{mt:2},style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,j.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,j.jsx)(c.Z,{type:"date",label:"Fecha Inicio",InputLabelProps:{shrink:!0},fullWidth:!0,name:"fecha_ini",value:v,onChange:function(e){e.preventDefault(),g(e.target.value)}})}),(0,j.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,j.jsx)(c.Z,{fullWidth:!0,type:"date",label:"Fecha Fin",InputLabelProps:{shrink:!0},name:"fecha_fin",value:I,onChange:function(e){e.preventDefault(),C(e.target.value)}})}),(0,j.jsx)(i.ZP,{item:!0,xs:12,md:4,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,j.jsx)(f.i,{type:"button",text:"Buscar",Icon:h.Z,handleClick:function(){return v?I?void e((0,m.iJ)(v,I)):e((0,x.NV)("Porfavor Seleccione un fecha final")):e((0,x.NV)("Porfavor Seleccione un fecha de inicio"))}})}),(0,j.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,j.jsx)(Z.m,{fecha_ini:v,fecha_fin:I})})]}),(0,j.jsx)(u.g,{}),(0,j.jsx)(d.Z,{})]})}},9174:function(e,n,t){t.d(n,{m:function(){return V}});var r=t(885),a=t(7621),o=t(9504),i=t(890),c=t(2791),s=t(9434),l=t(6385),u=t(4310),d=t(4215),p=t(7497),x=t(792),f=t(4721),h=t(9276),m=t(5359),Z=t(9778),j=t(8447),v=t(184),g=function(e){var n=e.open,t=e.handleClose,r=e.children,a=e.title,o=(0,Z.Z)(),i={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"".concat(o?"90%":"70%"),bgcolor:"background.paper !important",border:"1px solid ".concat(m.r.palette.valen.tertiary),borderRadius:8,boxShadow:24,p:4,background:"white"};return(0,v.jsx)(x.Z,{open:n,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,v.jsxs)(h.Z,{sx:i,children:[(0,v.jsx)(j.N,{title:a,handleClose:t}),(0,v.jsx)(f.Z,{sx:{mt:2,mb:2}}),r]})})},b=(t(2377),t(5861)),y=t(4687),I=t.n(y),C=t(5855),_=t(3994),P=function(e){var n=e.value;return(0,v.jsx)(v.Fragment,{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n||0)})},S=function(e){var n=e.pago,t=e.deletePago;return(0,v.jsxs)(C.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,v.jsx)(_.Z,{component:"th",scope:"row",children:(0,v.jsx)(P,{value:n.valor_pago})}),(0,v.jsx)(_.Z,{children:n.fecha_pago.split("T")[0]}),(0,v.jsx)(_.Z,{children:(0,v.jsx)(P,{value:n.valor_capital})}),(0,v.jsx)(_.Z,{children:(0,v.jsx)(P,{value:n.valor_interes})}),(0,v.jsx)(_.Z,{children:(0,v.jsx)(d.U,{fullWidth:!1,text:"Eliminar",sx:{background:"red"},onClick:function(){return t(n._id)}})})]})},k=t(9585),w=t(9281),F=t(5527),N=t(9836),D=t(6890),U=t(3382),O=function(e){var n=e.fecha_ini,t=e.fecha_fin,r=(0,s.I0)(),u=(0,s.v9)((function(e){return e.prestamo})).prestamo,d=(0,s.v9)((function(e){return e.ui})),p=(d.modalOpen,d.optionSelected);(0,c.useEffect)((function(){console.log(u)}),[u]);var x=function(){var e=(0,b.Z)(I().mark((function e(a){return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r((0,l.My)(a,u._id));case 2:if("Pagos"!==p){e.next=5;break}return e.next=5,r((0,l.gu)(u.id_cliente));case 5:if("Proximos a cobrar"!==p){e.next=8;break}return e.next=8,r((0,l.iJ)(n,t));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(a.Z,{sx:{mt:2},elevation:3,children:[(0,v.jsx)(k.Z,{children:" Info del prestamo"}),(0,v.jsxs)(o.Z,{children:[(0,v.jsxs)(i.Z,{children:["Cliente: ",u.cliente]}),(0,v.jsxs)(i.Z,{children:["Fecha: ",u.fecha_prestamo.split("T")[0]]}),(0,v.jsxs)(i.Z,{children:["Valor: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(u.valor_prestamo)]}),(0,v.jsxs)(i.Z,{children:["Saldo: ",(0,v.jsx)(P,{value:u.capital_actual})," "]}),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(w.Z,{component:F.Z,children:(0,v.jsxs)(N.Z,{"aria-label":"simple table",children:[(0,v.jsx)(D.Z,{children:(0,v.jsxs)(C.Z,{children:[(0,v.jsx)(_.Z,{children:"Pago"}),(0,v.jsx)(_.Z,{children:"Fecha"}),(0,v.jsx)(_.Z,{children:"Capital"}),(0,v.jsx)(_.Z,{children:"Interes"}),(0,v.jsx)(_.Z,{})]})}),(0,v.jsx)(U.Z,{children:(null===u||void 0===u?void 0:u.pagos)&&(null===u||void 0===u?void 0:u.pagos.map((function(e,n){return(0,v.jsx)(S,{pago:e,deletePago:x},n)})))})]})})})]})]})})},V=function(e){var n=e.fecha_ini,t=e.fecha_fin,x=(0,s.I0)(),f=(0,s.v9)((function(e){return e.prestamo})).lista_prestamos,h=(0,c.useState)(!1),m=(0,r.Z)(h,2),Z=m[0],j=m[1];return(0,v.jsxs)(v.Fragment,{children:[f.length>0&&f.map((function(e){return(0,v.jsx)(a.Z,{sx:{mt:2},elevation:3,children:(0,v.jsxs)(o.Z,{children:[(0,v.jsxs)(i.Z,{children:["Cliente: ",e.cliente]}),(0,v.jsxs)(i.Z,{children:["Fecha Prestamo: ",e.fecha_prestamo.split("T")[0]]}),(0,v.jsxs)(i.Z,{children:["Valor Prestamo: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.valor_prestamo)]}),(0,v.jsxs)(i.Z,{children:["Capital Actual: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.capital_actual)]}),(0,v.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,v.jsxs)(i.Z,{children:["Tasa Interes: ",e.tasa_interes,"%"]})}),(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"end",gap:4},children:[(0,v.jsx)(d.U,{fullWidth:!1,text:"Pagar",onClick:function(){return n=e,x((0,l.Mu)(n)),void x((0,u.Dk)());var n}}),(0,v.jsx)(d.U,{fullWidth:!1,text:"Ver pagos",onClick:function(){return n=e,x((0,l.Mu)(n)),void j(!0);var n}})]})]})},e._id)})),(0,v.jsx)(p.o,{fecha_ini:n,fecha_fin:t,title:"Pagar Prestamo"}),(0,v.jsx)(g,{open:Z,handleClose:function(){j(!1)},title:"Pagos",children:(0,v.jsx)(O,{fecha_ini:n,fecha_fin:t})})]})}},7497:function(e,n,t){t.d(n,{o:function(){return W}});var r,a=t(5861),o=t(885),i=t(4687),c=t.n(i),s=t(4721),l=t(1614),u=t(1889),d=t(890),p=t(4454),x=t(7391),f=t(792),h=t(9276),m=t(2426),Z=t.n(m),j=t(2791),v=t(9434),g=t(5359),b=t(9778),y=t(6385),I=t(4310),C=t(4215),_=t(1413),P=t(5987),S=t(168),k=t(6934),w=t(948),F=t(184),N=["onChange"],D=["label"],U=(0,k.ZP)(x.Z)(r||(r=(0,S.Z)(["\n    & label span{\n        color:red!important\n    }\n    & input:disabled{\n        color:red!important;\n        -webkit-text-fill-color: rgba(0, 0, 0, 1.0);\n    }\n"]))),O=j.forwardRef((function(e,n){var t=e.onChange,r=(0,P.Z)(e,N);return(0,F.jsx)(w.h3,(0,_.Z)((0,_.Z)({},r),{},{getInputRef:n,onValueChange:function(n){t({target:{name:e.name,value:n.value}})},thousandSeparator:!0,valueIsNumericString:!0}))})),V=function(e){var n=e.label,t=(0,P.Z)(e,D);return(0,F.jsxs)(F.Fragment,{children:["  ",(0,F.jsx)(U,(0,_.Z)((0,_.Z)({margin:"normal",fullWidth:!0,label:n},t),{},{InputProps:{inputComponent:O,inputProps:(0,_.Z)({},t)}}))]})},M=t(8447),W=function(e){var n=e.title,t=e.fecha_ini,r=e.fecha_fin,i=(0,b.Z)(),m={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"".concat(i?"80%":"60%"),bgcolor:"background.paper !important",border:"1px solid ".concat(g.r.palette.valen.tertiary),borderRadius:8,boxShadow:24,p:4,background:"white"},_=(0,j.useState)(""),P=(0,o.Z)(_,2),S=P[0],k=P[1],w=(0,j.useState)(""),N=(0,o.Z)(w,2),D=N[0],U=N[1],O=(0,j.useState)(""),W=(0,o.Z)(O,2),E=W[0],R=W[1],T=(0,j.useState)(!1),J=(0,o.Z)(T,2),Y=J[0],z=J[1],A=(0,j.useState)(!1),B=(0,o.Z)(A,2),L=B[0],q=B[1],H=(0,v.I0)(),$=(0,v.v9)((function(e){return e.ui})),X=$.modalOpen,G=$.optionSelected,K=(0,v.v9)((function(e){return e.prestamo})).prestamo;(0,j.useEffect)((function(){k(""),R(""),ee()}),[K]),(0,j.useEffect)((function(){if(!X)return U(Z()().format("YYYY-MM-DD"))}),[X]);var Q,ee=function(){var e;if((null===K||void 0===K||null===(e=K.pagos)||void 0===e?void 0:e.length)>0){var n=K.pagos.reduce((function(e,n){return new Date(e.date)>new Date(n.date)?e:n}));R(null===n||void 0===n?void 0:n.fecha_pago)}},ne=function(){H((0,I.MJ)())},te=function(){var e=(0,a.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=2;break}return e.abrupt("return",H((0,I.NV)("Digite correctamente el valor a pagar")));case 2:if(D){e.next=4;break}return e.abrupt("return",H((0,I.NV)("Digite correctamente la fecha de pago")));case 4:return console.log(S),console.log(D),e.next=8,H((0,y.UH)(K._id,S,D,K.valor_interes,L));case 8:if("Pagos"!==G){e.next=11;break}return e.next=11,H((0,y.gu)(K.id_cliente));case 11:if("Proximos a cobrar"!==G){e.next=14;break}return e.next=14,H((0,y.iJ)(t,r));case 14:ne();case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,F.jsx)("div",{children:(Q=K,!(0===Object.keys(Q).length)&&(0,F.jsx)(f.Z,{open:X,onClose:ne,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,F.jsxs)(h.Z,{sx:m,children:[(0,F.jsx)(M.N,{title:n,handleClose:ne}),(0,F.jsx)(s.Z,{sx:{mt:2,mb:2}}),(0,F.jsx)(l.Z,{component:"main",maxWidth:"lg",style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"},children:(0,F.jsxs)(u.ZP,{container:!0,spacing:2,style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"},children:[(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:["Cliente: ",Y," ",K.cliente]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:["Fecha prestamo: ",K.fecha_prestamo.split("T")[0]]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:["Valor Prestamo: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(K.valor_prestamo)]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:["Capital Actual: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(K.capital_actual)]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:[" ",(0,F.jsx)("b",{children:"Valor Interes"}),": ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(K.valor_interes),(0,F.jsx)(p.Z,{onChange:function(){return z((function(e){return!e})),k(Y?"":K.valor_interes)},value:Y})]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsxs)(d.Z,{children:[" ",(0,F.jsx)("b",{children:"Fecha Corte"}),": ",E.split("T")[0]]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(x.Z,{type:"date",margin:"dense",id:"fecha_pago",label:"Fecha pago",name:"fecha_pago",InputLabelProps:{shrink:!0},onChange:function(e){U(e.target.value)},onBlur:function(e){if(!D)return H((0,I.NV)("Digite la fecha de pago correctamente"));H((0,y.tN)(K._id,Z()(D)))},value:D,prefix:"$"})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(V,{margin:"dense",id:"valor_pagar",label:"Valor a Pagar",name:"valor_pagar",onChange:function(e){k(e.target.value)},value:S,prefix:"$"})}),(0,F.jsx)(C.U,{text:"Pagar",onClick:te}),(0,F.jsx)(p.Z,{title:"Al seleccionar aqui se da el credito por pagado",onChange:function(){q((function(e){return!e}))},value:L}),"Finiquitar Prestamo"]})})]})}))})}},5850:function(e,n,t){t.d(n,{i:function(){return h}});var r,a=t(1413),o=t(5987),i=t(168),c=t(3400),s=t(68),l=(t(2791),t(6934)),u=t(5359),d=t(2802),p=t(184),x=["type","text","size","Icon","handleClick"],f=(0,l.ZP)(c.Z)(r||(r=(0,i.Z)(["\n    background: "," ;\n    color:white;\n    display:flex;\n    justifyContent:center;\n    alignItems:center;\n    &:hover{\n        background-color:"," \n    }\n    &:active{\n        transform:translateY(2px) translateX(1px);\n        box-shadow: "," 0px 0px 0px \n    }\n"])),u.r.palette.valen.secondary,u.r.palette.valen.main,u.r.palette.valen.main),h=function(e){var n=e.type,t=void 0===n?"":n,r=e.text,i=void 0===r?"":r,c=e.size,l=void 0===c?"small":c,u=e.Icon,h=e.handleClick,m=void 0===h?function(){}:h,Z=(0,o.Z)(e,x);return(0,p.jsx)(s.Z,{title:i,children:(0,p.jsx)(f,(0,a.Z)((0,a.Z)({type:t,variant:"contained",onClick:m,"aria-label":i,size:l},Z),{},{children:(0,p.jsx)(d.Z,{icon:(0,p.jsx)(u,{})})}))})}},4215:function(e,n,t){t.d(n,{U:function(){return l}});var r=t(1413),a=t(5987),o=t(6151),i=(t(2791),t(5359)),c=t(184),s=["onClick","text","type","style"],l=function(e){var n=e.onClick,t=e.text,l=e.type,u=(e.style,(0,a.Z)(e,s));return(0,c.jsx)(o.Z,(0,r.Z)((0,r.Z)({onClick:n,className:"button",type:l,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,bgcolor:i.r.palette.valen.secondary}},u),{},{children:t}))}},2802:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(4942),a=t(3366),o=t(7462),i=t(2791),c=t(8182),s=t(4419),l=t(6934),u=t(1402),d=t(9201),p=t(184),x=(0,d.Z)((0,p.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),f=t(5878),h=t(1217);function m(e){return(0,h.Z)("MuiSpeedDialIcon",e)}var Z=(0,f.Z)("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),j=["className","icon","open","openIcon"],v=(0,l.ZP)("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,r.Z)({},"& .".concat(Z.icon),n.icon),(0,r.Z)({},"& .".concat(Z.icon),t.open&&n.iconOpen),(0,r.Z)({},"& .".concat(Z.icon),t.open&&t.openIcon&&n.iconWithOpenIconOpen),(0,r.Z)({},"& .".concat(Z.openIcon),n.openIcon),(0,r.Z)({},"& .".concat(Z.openIcon),t.open&&n.openIconOpen),n.root]}})((function(e){var n,t=e.theme,a=e.ownerState;return n={height:24},(0,r.Z)(n,"& .".concat(Z.icon),(0,o.Z)({transition:t.transitions.create(["transform","opacity"],{duration:t.transitions.duration.short})},a.open&&(0,o.Z)({transform:"rotate(45deg)"},a.openIcon&&{opacity:0}))),(0,r.Z)(n,"& .".concat(Z.openIcon),(0,o.Z)({position:"absolute",transition:t.transitions.create(["transform","opacity"],{duration:t.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},a.open&&{transform:"rotate(0deg)",opacity:1})),n})),g=i.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiSpeedDialIcon"}),r=t.className,l=t.icon,d=t.openIcon,f=(0,a.Z)(t,j),h=t,Z=function(e){var n=e.classes,t=e.open,r={root:["root"],icon:["icon",t&&"iconOpen",e.openIcon&&t&&"iconWithOpenIconOpen"],openIcon:["openIcon",t&&"openIconOpen"]};return(0,s.Z)(r,m,n)}(h);function g(e,n){return i.isValidElement(e)?i.cloneElement(e,{className:n}):e}return(0,p.jsxs)(v,(0,o.Z)({className:(0,c.Z)(Z.root,r),ref:n,ownerState:h},f,{children:[d?g(d,Z.openIcon):null,l?g(l,Z.icon):(0,p.jsx)(x,{className:Z.icon})]}))}));g.muiName="SpeedDialIcon";var b=g}}]);
//# sourceMappingURL=669.ddbebd0b.chunk.js.map