"use strict";(self.webpackChunkgocredix=self.webpackChunkgocredix||[]).push([[347],{4751:function(e,n,t){t.r(n);var r=t(1413),i=t(885),a=t(890),l=t(4721),o=t(1889),c=t(2791),d=t(9434),u=t(4310),s=t(8078),f=t(3342),m=t(9436),h=t(1701),b=t(2377),x=t(8171),p=t(5705),j=t(4215),v=t(6385),w=t(1972),Z=t(9174),g=(t(7497),t(184)),N={id_cliente:"",cliente:""};n.default=function(){var e=(0,d.I0)(),n=(0,d.v9)((function(e){return e.ui})),t=n.quickSearchSelected,y=n.quickSearchId,C=((0,d.v9)((function(e){return e.prestamo})).lista_prestamos,(0,c.useState)(null)),P=(0,i.Z)(C,2),S=P[0],_=P[1];(0,c.useEffect)((function(){if(t&&"cliente"===y)return k();_(null)}),[t]),(0,c.useEffect)((function(){e((0,w.V9)()),e((0,u.$A)()),e((0,v.Jd)())}),[e]);var k=function(){_((0,r.Z)((0,r.Z)({},N),{},{id_cliente:t._id,cliente:t.nombre+" "+t.apellido})),e((0,v.Jd)())},F=function(){e((0,u.so)("cliente")),e((0,u.wj)())},B=function(){if(!t)return e((0,u.NV)("Porfavor Seleccione un cliente"));e((0,v.gu)(t._id))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.J9,{initialValues:S||N,onSubmit:function(e){},validationSchema:{},enableReinitialize:!0,children:function(e){e.handleReset,e.isValid,e.errors,e.resetForm;return(0,g.jsxs)(p.l0,{children:[(0,g.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,g.jsx)(a.Z,{variant:"h6",gutterBottom:!0,children:"Pagos"}),(0,g.jsx)(s.Z,{})]}),(0,g.jsx)(l.Z,{}),(0,g.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,g.jsx)(o.ZP,{item:!0,xs:9,md:6,children:(0,g.jsx)(f.w,{handleBr:F,disabled:!0,margin:"dense",fullWidth:!0,id:"cliente",label:"Cliente",name:"cliente"})}),(0,g.jsx)(o.ZP,{item:!0,xs:3,md:2,children:(0,g.jsx)(j.U,{text:"Buscar",onClick:B})}),(0,g.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,g.jsx)(Z.m,{})})]})]})}}),(0,g.jsx)(m.g,{}),(0,g.jsx)(h.Z,{}),"cliente"===y&&(0,g.jsx)(b.s,{title:"busqueda de clientes",api:"clientes/getCliente",columns:x.h})]})}},8171:function(e,n,t){t.d(n,{h:function(){return r},p:function(){return i}});t(2426);var r=[{field:"cedula",headerName:"Cedula",width:150,editable:!1},{field:"fullName",headerName:"Nombre",width:160,valueGetter:function(e){return"".concat(e.row.nombre||""," ").concat(e.row.apellido||"")}},{field:"telefono",headerName:"Telefono",width:150,editable:!1},{field:"direccion",headerName:"Direccion",width:150,editable:!1}],i=[{field:"fullName",headerName:"Nombre",width:160,valueGetter:function(e){return"".concat(e.row.cliente||"")}},{field:"fecha_prestamo",headerName:"Fecha Prestamo",width:150,editable:!1,valueFormatter:function(e){return e.value.split("T")[0]}},{field:"valor_prestamo",headerName:"Valor Prestamo",width:150,editable:!1,valueFormatter:function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.value)}},{field:"tasa_interes",headerName:"Tasa",width:100,editable:!1}]},3342:function(e,n,t){t.d(n,{w:function(){return p}});var r,i=t(1413),a=t(885),l=t(5987),o=t(168),c=t(7391),d=t(3400),u=t(5705),s=(t(2791),t(5359)),f=t(6934),m=t(5097),h=t(184),b=["label","handleBr","btn_disabled"],x=(0,f.ZP)(c.Z)(r||(r=(0,o.Z)(["\n    & label span{\n        color:red!important\n    }\n    & input:disabled{\n        color:red!important;\n        -webkit-text-fill-color: rgba(0, 0, 0, 1.0);\n    }\n    \n"]))),p=function(e){var n=e.label,t=e.handleBr,r=e.btn_disabled,o=(0,l.Z)(e,b),c=(0,u.U$)(o),f=(0,a.Z)(c,2),p=f[0],j=f[1];return(0,h.jsxs)(h.Fragment,{children:["  ",(0,h.jsx)(x,(0,i.Z)((0,i.Z)((0,i.Z)({margin:"normal",fullWidth:!0,label:n},o),p),{},{error:void 0!==j.error&&j.touched,InputProps:{endAdornment:(0,h.jsx)(d.Z,{disabled:r,"aria-label":"toggle password visibility",onClick:t,edge:"end",children:(0,h.jsx)(m.ZC,{})})}})),(0,h.jsx)(u.Bc,{name:o.name,component:"span",style:{color:s.r.palette.valen.error,fontSize:"12px"}})]})}},1972:function(e,n,t){t.d(n,{TE:function(){return i},zC:function(){return a},V9:function(){return l},Jh:function(){return o}});var r=t(9095),i=function(){return{type:r.a.formNew}},a=function(){return{type:r.a.formCancel}},l=function(){return{type:r.a.formInitial}},o=function(){return{type:r.a.formFetched}}}}]);
//# sourceMappingURL=347.4863d5a3.chunk.js.map