"use strict";(self.webpackChunkgocredix=self.webpackChunkgocredix||[]).push([[157],{4594:function(e,n,r){r.r(n),r.d(n,{default:function(){return ee}});var t,a,o=r(1413),i=r(885),s=r(2791),l=r(5359),c=r(132),u=r(9434),d=r(1972),p=r(4310),m=r(5705),f=r(890),h=r(2802),x=r(4721),g=r(1889),y=r(8870),b=r(5850),v=r(4008),Z=r(6922),j=r(5097),_=r(9823),C=r(9436),k=r(1701),P=r(2377),E=r(8171),w=r(7247),M=r(1993),S=r(3342),I=r(5987),q=r(168),L=r(7391),B=r(3786),O=r(7630),z=r(184),A=["label"],F=(0,O.ZP)(L.Z)(t||(t=(0,q.Z)(["\n    & label span{\n        color:red!important\n    }\n    & input:disabled{\n        -webkit-text-fill-color: rgba(0, 0, 0, 1.0);\n    }\n"]))),R=function(e){var n=e.label,r=(0,I.Z)(e,A),t=(0,m.U$)(r),a=(0,i.Z)(t,2),s=a[0],c=a[1];return(0,z.jsxs)(z.Fragment,{children:["  ",(0,z.jsx)(F,(0,o.Z)((0,o.Z)((0,o.Z)({margin:"normal",fullWidth:!0,label:n},r),s),{},{error:void 0!==c.error&&c.touched,style:r.disabled?{backgroundColor:"rgb(222, 222, 222)"}:{},children:r.data.map((function(e){return(0,z.jsx)(B.Z,{value:e,children:e},e)}))})),(0,z.jsx)(m.Bc,{name:r.name,component:"span",style:{color:l.r.palette.valen.error,fontSize:"12px"}})]})},$=r(948),J=["onChange"],W=["label"],D=(0,O.ZP)(L.Z)(a||(a=(0,q.Z)(["\n    & label span{\n        color:red!important\n    }\n    & input:disabled{\n        color:red!important;\n        -webkit-text-fill-color: rgba(0, 0, 0, 1.0);\n    }\n"]))),T=s.forwardRef((function(e,n){var r=e.onChange,t=(0,I.Z)(e,J);return(0,z.jsx)($.h3,(0,o.Z)((0,o.Z)({},t),{},{getInputRef:n,onValueChange:function(n){r({target:{name:e.name,value:n.value}})},thousandSeparator:!0,valueIsNumericString:!0}))})),N=function(e){var n=e.label,r=(0,I.Z)(e,W),t=(0,m.U$)(r),a=(0,i.Z)(t,2),s=a[0],c=a[1];return(0,z.jsxs)(z.Fragment,{children:["  ",(0,z.jsx)(D,(0,o.Z)((0,o.Z)((0,o.Z)({margin:"normal",fullWidth:!0,label:n},r),s),{},{error:void 0!==c.error&&c.touched,InputProps:{inputComponent:T,inputProps:(0,o.Z)({},r)}})),(0,z.jsx)(m.Bc,{name:r.name,component:"span",style:{color:l.r.palette.valen.error,fontSize:"12px"}})]})},U=r(6385),V=r(2426),G=r.n(V),Q={color:"white",backgroundColor:"".concat(l.r.palette.valen.secondary),fontSize:"24px"},H={color:"white",backgroundColor:"".concat(l.r.palette.valen.error),fontSize:"24px"},K={id_cliente:"",cliente:"",fecha_prestamo:"",valor_prestamo:"",tasa_interes:"",periodo_pago:"",observacion:""},X=["Mensual","Quincenal"],Y=c.Ry({cliente:c.Z_().required("El Cliente es requerido"),fecha_prestamo:c.hT().typeError("please enter a valid date").required("La fecha de prestamo es requerida").min("1969-11-13","Fecha Invalida"),valor_prestamo:c.Rx().required("El valor de prestamo debe ser requerido"),tasa_interes:c.Rx().required("la tasa de interes debe ser requerido"),periodo_pago:c.Z_().required("El periodo debe ser requerido"),observacion:c.Z_()}),ee=function(){var e=(0,u.I0)(),n=(0,u.v9)((function(e){return e.form})),r=n.cancel,t=n.newE,a=n.disabled,l=n.save,c=n.canDelete,I=(0,s.useState)(null),q=(0,i.Z)(I,2),L=q[0],B=q[1],O=(0,u.v9)((function(e){return e.ui})),A=O.quickSearchSelected,F=O.quickSearchId;(0,s.useEffect)((function(){if(A){if("cliente"===F)return D();if("prestamo"===F)return W()}B(null)}),[A]),(0,s.useEffect)((function(){e((0,d.V9)()),e((0,p.$A)())}),[e]);var $=function(){e((0,p.so)("prestamo")),e((0,p.wj)())},J=function(){e((0,p.so)("cliente")),e((0,p.wj)())},W=function(){var n=A.fecha_prestamo,r=G()(n).format("yyyy-MM-DD");B((0,o.Z)((0,o.Z)({},A),{},{fecha_prestamo:r})),e((0,d.Jh)())},D=function(){B((0,o.Z)((0,o.Z)({},K),{},{id_cliente:A._id,cliente:A.nombre+" "+A.apellido}))};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m.J9,{initialValues:L||K,onSubmit:function(n){!function(n){if(n._id)return e((0,U.v3)(n));e((0,U.C5)(n))}(n)},validationSchema:Y,enableReinitialize:!0,children:function(n){var o=n.handleReset;n.isValid,n.errors,n.resetForm;return(0,z.jsxs)(m.l0,{children:[(0,z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,z.jsx)(f.Z,{variant:"h6",gutterBottom:!0,children:"Prestamo"}),t&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(b.i,{type:"reset",text:"Agregar",Icon:h.Z,handleClick:function(){e((0,d.TE)()),e((0,p.$A)()),o()}}),(0,z.jsx)(b.i,{type:"button",text:"Buscar",Icon:j.ZC,handleClick:$})]}),r&&(0,z.jsx)(b.i,{type:"reset",text:"Cancelar",Icon:_.Z,handleClick:function(){e((0,d.zC)()),e((0,p.$A)()),o()}}),(0,z.jsx)(v.Z,{})]}),(0,z.jsx)(x.Z,{}),(0,z.jsxs)(g.ZP,{container:!0,spacing:1,children:[(0,z.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,z.jsx)(S.w,{handleBr:J,disabled:!0,btn_disabled:a,margin:"dense",fullWidth:!0,id:"cliente",label:"Cliente",name:"cliente"})}),(0,z.jsx)(g.ZP,{item:!0,xs:12,md:3,children:(0,z.jsx)(Z.o,{type:"date",disabled:a,margin:"dense",fullWidth:!0,InputLabelProps:{shrink:!0},id:"fecha_prestamo",label:"Fecha Prestamo",name:"fecha_prestamo"})}),(0,z.jsx)(g.ZP,{item:!0,xs:12,md:3,children:(0,z.jsx)(N,{disabled:a,margin:"dense",id:"valor_prestamo",label:"Valor Prestamo",name:"valor_prestamo",prefix:"$"})}),(0,z.jsx)(g.ZP,{item:!0,xs:12,md:3,children:(0,z.jsx)(N,{disabled:a,margin:"dense",id:"tasa_interes",label:"Tasa Interes",name:"tasa_interes"})}),(0,z.jsx)(g.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(R,{data:X,select:!0,disabled:a,margin:"dense",fullWidth:!0,id:"periodo_pago",label:"Periodo Pago",name:"periodo_pago"})}),(0,z.jsx)(g.ZP,{item:!0,xs:12,md:5,children:(0,z.jsx)(Z.o,{disabled:a,margin:"dense",fullWidth:!0,id:"observacion",label:"Observaciones",name:"observacion"})})]}),(0,z.jsx)(y.Z,{children:(0,z.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"10px"},children:[c&&(0,z.jsx)(b.i,{size:"large",style:H,type:"button",text:"Eliminar",Icon:w.Z,handleClick:function(){e((0,U.CA)(A._id)),e((0,p.$A)()),o()}}),l&&(0,z.jsx)(b.i,{size:"large",style:Q,type:"submit",text:"Guardar Cambios",Icon:M.Z})]})})]})}}),(0,z.jsx)(C.g,{}),(0,z.jsx)(k.Z,{}),"prestamo"===F&&(0,z.jsx)(P.s,{title:"busqueda de prestamos",api:"prestamos/getPrestamo",columns:E.p}),"cliente"===F&&(0,z.jsx)(P.s,{title:"busqueda de clientes",api:"clientes/getCliente",columns:E.h})]})}},3342:function(e,n,r){r.d(n,{w:function(){return g}});var t,a=r(1413),o=r(885),i=r(5987),s=r(168),l=r(7391),c=r(3400),u=r(5705),d=(r(2791),r(5359)),p=r(7630),m=r(5097),f=r(184),h=["label","handleBr","btn_disabled"],x=(0,p.ZP)(l.Z)(t||(t=(0,s.Z)(["\n    & label span{\n        color:red!important\n    }\n    & input:disabled{\n        color:red!important;\n        -webkit-text-fill-color: rgba(0, 0, 0, 1.0);\n    }\n    \n"]))),g=function(e){var n=e.label,r=e.handleBr,t=e.btn_disabled,s=(0,i.Z)(e,h),l=(0,u.U$)(s),p=(0,o.Z)(l,2),g=p[0],y=p[1];return(0,f.jsxs)(f.Fragment,{children:["  ",(0,f.jsx)(x,(0,a.Z)((0,a.Z)((0,a.Z)({margin:"normal",fullWidth:!0,label:n},s),g),{},{error:void 0!==y.error&&y.touched,InputProps:{endAdornment:(0,f.jsx)(c.Z,{disabled:t,"aria-label":"toggle password visibility",onClick:r,edge:"end",children:(0,f.jsx)(m.ZC,{})})}})),(0,f.jsx)(u.Bc,{name:s.name,component:"span",style:{color:d.r.palette.valen.error,fontSize:"12px"}})]})}},6385:function(e,n,r){r.d(n,{C5:function(){return p},v3:function(){return m},CA:function(){return f},gu:function(){return h},Jd:function(){return x},Mu:function(){return g}});var t=r(5861),a=r(7757),o=r.n(a),i=r(362),s=r(7444),l=r(9095),c=r(3703),u=r(2426),d=r.n(u),p=function(e){var n=e.id_cliente,r=e.cliente,a=e.fecha_prestamo,u=e.valor_prestamo,p=e.tasa_interes,m=e.periodo_pago,f=e.observacion;return function(){var e=(0,t.Z)(o().mark((function e(t){var h,x;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:s.h.uiOpenLoading}),a=d()(a).format(),e.next=5,(0,i.E)("prestamos/CreatePrestamo",{id_cliente:n,cliente:r,fecha_prestamo:a,valor_prestamo:u,tasa_interes:p,periodo_pago:m,observacion:f},"POST");case 5:return h=e.sent,e.next=8,h.json();case 8:(x=e.sent).ok?(t({type:l.a.formSave}),t({type:c.M.Create,payload:x.response}),t({type:s.h.uiErrorMessage,payload:null})):t({type:s.h.uiErrorMessage,payload:x.msg}),t({type:s.h.uiCloseLoading}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),t({type:s.h.uiCloseLoading}),t({type:s.h.uiErrorMessage,payload:JSON.stringify(e.t0)});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}()},m=function(e){var n=e._id,r=e.id_cliente,a=e.cliente,u=e.fecha_prestamo,p=e.valor_prestamo,m=e.tasa_interes,f=e.periodo_pago,h=e.observacion;return function(){var e=(0,t.Z)(o().mark((function e(t){var x,g;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:s.h.uiOpenLoading}),u=d()(u).format(),e.next=5,(0,i.E)("prestamos/UpdatePrestamo/"+n,{id_cliente:r,cliente:a,fecha_prestamo:u,valor_prestamo:p,tasa_interes:m,periodo_pago:f,observacion:h},"PUT");case 5:return x=e.sent,e.next=8,x.json();case 8:(g=e.sent).ok?(t({type:l.a.formSave}),t({type:c.M.Create,payload:g.response}),t({type:s.h.uiErrorMessage,payload:null})):t({type:s.h.uiErrorMessage,payload:g.msg}),t({type:s.h.uiCloseLoading}),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),t({type:s.h.uiCloseLoading}),t({type:s.h.uiErrorMessage,payload:JSON.stringify(e.t0)});case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}()},f=function(e){return function(){var n=(0,t.Z)(o().mark((function n(r){var t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:s.h.uiOpenLoading}),n.next=4,(0,i.E)("prestamos/DeletePrestamo/"+e,{},"delete");case 4:return t=n.sent,n.next=7,t.json();case 7:(a=n.sent).ok?(r({type:l.a.formDelete}),r({type:c.M.Delete,payload:a.response}),r({type:s.h.uiErrorMessage,payload:null})):r({type:s.h.uiErrorMessage,payload:a.msg}),r({type:s.h.uiCloseLoading}),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0),r({type:s.h.uiCloseLoading}),r({type:s.h.uiErrorMessage,payload:JSON.stringify(n.t0)});case 17:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},h=function(e){return function(){var n=(0,t.Z)(o().mark((function n(r){var t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:s.h.uiOpenLoading}),n.next=4,(0,i.E)("prestamos/getPrestamoByCliente/"+e,{});case 4:return t=n.sent,n.next=7,t.json();case 7:(a=n.sent).ok?(r({type:c.M.searchByClientId,payload:a.response}),r({type:s.h.uiErrorMessage,payload:null})):r({type:s.h.uiErrorMessage,payload:a.msg}),r({type:s.h.uiCloseLoading}),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0),r({type:s.h.uiCloseLoading}),r({type:s.h.uiErrorMessage,payload:JSON.stringify(n.t0)});case 17:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},x=function(){return function(e){e({type:c.M.Initial})}},g=function(e){return function(n){n({type:c.M.Read,payload:e})}}}}]);
//# sourceMappingURL=157.80e93070.chunk.js.map