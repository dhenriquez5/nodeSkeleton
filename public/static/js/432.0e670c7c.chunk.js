"use strict";(self.webpackChunkgocredix=self.webpackChunkgocredix||[]).push([[432],{1701:function(e,n,r){r.d(n,{Z:function(){return l}});r(2791);var t=r(4070),a=r(7317),o=r(9818),i=r(9434),s=r(4310),u=r(184);function l(){var e=(0,i.v9)((function(e){return e.ui})).error,n=(0,i.I0)(),r=function(){n((0,s.NV)(null))};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.Z,{open:null!==e,onClose:r,children:(0,u.jsxs)(t.Z,{severity:"error",onClose:r,children:[(0,u.jsx)(a.Z,{children:"Error"}),e]})})})}},9436:function(e,n,r){r.d(n,{g:function(){return o}});r(2791);var t=r(9434),a=r(184),o=function(){var e=(0,t.v9)((function(e){return e.ui})).loading;return(0,a.jsx)(a.Fragment,{children:e&&(0,a.jsx)("div",{className:"loader text-center",children:(0,a.jsxs)("div",{className:"loader-inner",children:[(0,a.jsxs)("div",{className:"lds-roller mb-3",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]}),(0,a.jsx)("h4",{className:"text-uppercase font-weight-bold",children:"Loading"})]})})})}},8171:function(e,n,r){r.d(n,{h:function(){return t},p:function(){return a}});r(2426);var t=[{field:"cedula",headerName:"Cedula",width:150,editable:!1},{field:"fullName",headerName:"Nombre",width:160,valueGetter:function(e){return"".concat(e.row.nombre||""," ").concat(e.row.apellido||"")}},{field:"telefono",headerName:"Telefono",width:150,editable:!1},{field:"direccion",headerName:"Direccion",width:150,editable:!1}],a=[{field:"fullName",headerName:"Nombre",width:160,valueGetter:function(e){return"".concat(e.row.cliente||"")}},{field:"fecha_prestamo",headerName:"Fecha Prestamo",width:150,editable:!1,valueFormatter:function(e){return e.value.split("T")[0]}},{field:"valor_prestamo",headerName:"Valor Prestamo",width:150,editable:!1,valueFormatter:function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.value)}},{field:"tasa_interes",headerName:"Tasa",width:100,editable:!1}]},8447:function(e,n,r){r.d(n,{N:function(){return s}});var t=r(890),a=r(3400),o=r(5097),i=(r(2791),r(184)),s=function(e){var n=e.title,r=void 0===n?"":n,s=e.handleClose,u=void 0===s?function(){}:s;return(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"},children:[(0,i.jsx)(t.Z,{style:{textAlign:"center",flexGrow:1},id:"modal-modal-title",variant:"h5",component:"h4",children:r}),(0,i.jsx)(a.Z,{type:"submit",sx:{p:"10px"},onClick:u,"aria-label":"close",children:(0,i.jsx)(o.DS,{})})]})}},2377:function(e,n,r){r.d(n,{s:function(){return M}});var t,a=r(885),o=r(168),i=r(2791),s=r(8870),u=r(792),l=r(5359),c=r(9778),p=r(6934),d=r(3400),f=r(4721),h=r(1614),y=r(1889),m=r(7391),g=r(1703),v=r(4070),x=r(1450),b=r(9434),j=r(4310),w=r(184),C=function(e){var n=e.columns,r=void 0===n?[]:n,t=e.handleClose,a=void 0===t?function(){}:t,o=(0,b.I0)(),i=(0,b.v9)((function(e){return e.ui})).quickSearchData,s=function(e){o((0,j.Nq)(e)),a()};return(0,w.jsxs)(w.Fragment,{children:[0===i.length&&(0,w.jsx)(v.Z,{severity:"info",children:"0 Registros Encontrados"}),i&&i.length>0&&(0,w.jsx)("div",{style:{height:"25rem",width:"auto",overflow:"auto",cursor:"pointer"},children:(0,w.jsx)(x._,{getRowId:function(e){return e._id},density:"compact",rows:i,columns:r,pageSize:10,rowsPerPageOptions:[10],loading:!1,onRowClick:function(e){s(e.row)},onCellKeyDown:function(e,n){!function(e,n){n.preventDefault(),"Enter"===n.key&&s(e.row)}(e,n)},editMode:"row"})})]})},k=r(8447),Z=(0,p.ZP)(d.Z)(t||(t=(0,o.Z)(["\n    color:white;\n    :hover{\n        background:","\n    }\n"])),l.r.palette.valen.main),M=function(e){var n=e.title,r=e.api,t=void 0===r?"":r,o=e.columns,p=void 0===o?[]:o,d=(e.rows_mobile,(0,c.Z)()),v={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"".concat(d?"80%":"60%"),bgcolor:"background.paper",border:"1px solid ".concat(l.r.palette.valen.tertiary),borderRadius:8,boxShadow:24,p:4},x=(0,i.useState)(""),M=(0,a.Z)(x,2),E=M[0],_=M[1],N=(0,b.I0)(),L=(0,b.v9)((function(e){return e.ui})).quickSearch,P=function(){N((0,j.B9)()),_("")},S=function(){N((0,j.qA)(t,E))};return(0,w.jsx)("div",{children:(0,w.jsx)(u.Z,{open:L,onClose:P,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,w.jsxs)(s.Z,{sx:v,children:[(0,w.jsx)(k.N,{title:n,handleClose:P}),(0,w.jsx)(f.Z,{sx:{mt:2,mb:2}}),(0,w.jsx)(h.Z,{component:"main",maxWidth:"lg",style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"},children:(0,w.jsxs)(y.ZP,{container:!0,spacing:2,style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"},children:[(0,w.jsx)(y.ZP,{item:!0,xs:10,md:6,children:(0,w.jsx)(m.Z,{name:"inputSearch",autoFocus:!0,value:E,onChange:function(e){_(e.target.value)},variant:"standard",id:"standard-search",onKeyDown:function(e){E.trim().length>0&&"Enter"===e.key&&S()},fullWidth:!0,label:"Busqueda",type:"search"})}),(0,w.jsx)(y.ZP,{item:!0,xs:2,md:2,children:(0,w.jsx)(Z,{onClick:function(){E.trim().length>0&&S()},type:"submit",sx:{p:"10px",background:l.r.palette.valen.secondary},"aria-label":"search",children:(0,w.jsx)(g.Z,{})})}),(0,w.jsxs)(y.ZP,{item:!0,xs:12,md:12,children:[!d&&(0,w.jsx)(C,{columns:p,handleClose:P}),d&&(0,w.jsx)(C,{columns:p,handleClose:P})]})]})})]})})})}},3342:function(e,n,r){r.d(n,{w:function(){return g}});var t,a=r(1413),o=r(885),i=r(5987),s=r(168),u=r(7391),l=r(3400),c=r(5705),p=(r(2791),r(5359)),d=r(6934),f=r(5097),h=r(184),y=["label","handleBr","btn_disabled"],m=(0,d.ZP)(u.Z)(t||(t=(0,s.Z)(["\n    & label span{\n        color:red!important\n    }\n    & input:disabled{\n        color:red!important;\n        -webkit-text-fill-color: rgba(0, 0, 0, 1.0);\n    }\n    \n"]))),g=function(e){var n=e.label,r=e.handleBr,t=e.btn_disabled,s=(0,i.Z)(e,y),u=(0,c.U$)(s),d=(0,o.Z)(u,2),g=d[0],v=d[1];return(0,h.jsxs)(h.Fragment,{children:["  ",(0,h.jsx)(m,(0,a.Z)((0,a.Z)((0,a.Z)({margin:"normal",fullWidth:!0,label:n},s),g),{},{error:void 0!==v.error&&v.touched,InputProps:{endAdornment:(0,h.jsx)(l.Z,{disabled:t,"aria-label":"toggle password visibility",onClick:r,edge:"end",children:(0,h.jsx)(f.ZC,{})})}})),(0,h.jsx)(c.Bc,{name:s.name,component:"span",style:{color:p.r.palette.valen.error,fontSize:"12px"}})]})}},1972:function(e,n,r){r.d(n,{TE:function(){return a},zC:function(){return o},V9:function(){return i},Jh:function(){return s}});var t=r(9095),a=function(){return{type:t.a.formNew}},o=function(){return{type:t.a.formCancel}},i=function(){return{type:t.a.formInitial}},s=function(){return{type:t.a.formFetched}}},6385:function(e,n,r){r.d(n,{C5:function(){return d},v3:function(){return f},CA:function(){return h},gu:function(){return y},Jd:function(){return m},Mu:function(){return g},UH:function(){return v},tN:function(){return x},My:function(){return b},aM:function(){return j}});var t=r(5861),a=r(4687),o=r.n(a),i=r(362),s=r(7444),u=r(9095),l=r(3703),c=r(2426),p=r.n(c),d=function(e){var n=e.id_cliente,r=e.cliente,a=e.fecha_prestamo,c=e.valor_prestamo,d=e.tasa_interes,f=e.periodo_pago,h=e.observacion;return function(){var e=(0,t.Z)(o().mark((function e(t){var y,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:s.h.uiOpenLoading}),a=p()(a).format(),e.next=5,(0,i.E)("prestamos/CreatePrestamo",{id_cliente:n,cliente:r,fecha_prestamo:a,valor_prestamo:c,tasa_interes:d,periodo_pago:f,observacion:h},"POST");case 5:return y=e.sent,e.next=8,y.json();case 8:(m=e.sent).ok?(t({type:u.a.formSave}),t({type:l.M.Create,payload:m.response}),t({type:s.h.uiErrorMessage,payload:null})):t({type:s.h.uiErrorMessage,payload:m.msg}),t({type:s.h.uiCloseLoading}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),t({type:s.h.uiCloseLoading}),t({type:s.h.uiErrorMessage,payload:JSON.stringify(e.t0)});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}()},f=function(e){var n=e._id,r=e.id_cliente,a=e.cliente,c=e.fecha_prestamo,d=e.valor_prestamo,f=e.tasa_interes,h=e.periodo_pago,y=e.observacion;return function(){var e=(0,t.Z)(o().mark((function e(t){var m,g;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:s.h.uiOpenLoading}),c=p()(c).format(),e.next=5,(0,i.E)("prestamos/UpdatePrestamo/"+n,{id_cliente:r,cliente:a,fecha_prestamo:c,valor_prestamo:d,tasa_interes:f,periodo_pago:h,observacion:y},"PUT");case 5:return m=e.sent,e.next=8,m.json();case 8:(g=e.sent).ok?(t({type:u.a.formSave}),t({type:l.M.Create,payload:g.response}),t({type:s.h.uiErrorMessage,payload:null})):t({type:s.h.uiErrorMessage,payload:g.msg}),t({type:s.h.uiCloseLoading}),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),t({type:s.h.uiCloseLoading}),t({type:s.h.uiErrorMessage,payload:JSON.stringify(e.t0)});case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}()},h=function(e){return function(){var n=(0,t.Z)(o().mark((function n(r){var t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:s.h.uiOpenLoading}),n.next=4,(0,i.E)("prestamos/DeletePrestamo/"+e,{},"delete");case 4:return t=n.sent,n.next=7,t.json();case 7:(a=n.sent).ok?(r({type:u.a.formDelete}),r({type:l.M.Delete,payload:a.response}),r({type:s.h.uiErrorMessage,payload:null})):r({type:s.h.uiErrorMessage,payload:a.msg}),r({type:s.h.uiCloseLoading}),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0),r({type:s.h.uiCloseLoading}),r({type:s.h.uiErrorMessage,payload:JSON.stringify(n.t0)});case 17:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},y=function(e){return function(){var n=(0,t.Z)(o().mark((function n(r){var t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:s.h.uiOpenLoading}),n.next=4,(0,i.E)("prestamos/getPrestamoByCliente/"+e,{});case 4:return t=n.sent,n.next=7,t.json();case 7:(a=n.sent).ok?(r({type:l.M.searchByClientId,payload:a.response}),r({type:s.h.uiErrorMessage,payload:null})):r({type:s.h.uiErrorMessage,payload:a.msg}),r({type:s.h.uiCloseLoading}),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0),r({type:s.h.uiCloseLoading}),r({type:s.h.uiErrorMessage,payload:JSON.stringify(n.t0)});case 17:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},m=function(){return function(e){e({type:l.M.Initial})}},g=function(e){return function(n){n({type:l.M.Read,payload:e})}},v=function(e,n,r,a,u){return function(){var c=(0,t.Z)(o().mark((function t(c){var p,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:s.h.uiOpenLoading}),t.next=4,(0,i.E)("prestamos/generatePago",{prestamo_id:e,valor_pagar:n,fecha_pago:r,valor_interes:a,checkFin:u},"POST");case 4:return p=t.sent,t.next=7,p.json();case 7:(d=t.sent).ok?(c({type:l.M.GeneratePago,payload:d.response}),c({type:s.h.uiErrorMessage,payload:null})):c({type:s.h.uiErrorMessage,payload:d.msg}),c({type:s.h.uiCloseLoading}),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0),c({type:s.h.uiCloseLoading}),c({type:s.h.uiErrorMessage,payload:JSON.stringify(t.t0)});case 17:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}()},x=function(e,n){return function(){var r=(0,t.Z)(o().mark((function r(t){var a,u;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:s.h.uiOpenLoading}),r.next=4,(0,i.E)("prestamos/reCalcularInteres",{prestamo_id:e,fecha_corte:n},"post");case 4:return a=r.sent,r.next=7,a.json();case 7:(u=r.sent).ok?(console.log(u.response),t({type:l.M.reCalculateInteres,payload:u.response}),t({type:s.h.uiErrorMessage,payload:null})):t({type:s.h.uiErrorMessage,payload:u.msg}),t({type:s.h.uiCloseLoading}),r.next=17;break;case 12:r.prev=12,r.t0=r.catch(0),console.error(r.t0),t({type:s.h.uiCloseLoading}),t({type:s.h.uiErrorMessage,payload:JSON.stringify(r.t0)});case 17:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},b=function(e,n){return function(){var r=(0,t.Z)(o().mark((function r(t){var a,u;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:s.h.uiOpenLoading}),r.next=4,(0,i.E)("prestamos/deletePago",{pago_id:e,prestamo_id:n},"POST");case 4:return a=r.sent,r.next=7,a.json();case 7:(u=r.sent).ok?(t({type:l.M.deletePago,payload:u.response}),t({type:s.h.uiErrorMessage,payload:null})):t({type:s.h.uiErrorMessage,payload:u.msg}),t({type:s.h.uiCloseLoading}),r.next=17;break;case 12:r.prev=12,r.t0=r.catch(0),console.error(r.t0),t({type:s.h.uiCloseLoading}),t({type:s.h.uiErrorMessage,payload:JSON.stringify(r.t0)});case 17:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},j=function(){return function(){var e=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:s.h.uiOpenLoading}),e.next=4,(0,i.E)("prestamos/getPrestamoActivo",{});case 4:return r=e.sent,e.next=7,r.json();case 7:(t=e.sent).ok?(n({type:l.M.getPrestamosActivos,payload:t.response}),n({type:s.h.uiErrorMessage,payload:null})):n({type:s.h.uiErrorMessage,payload:t.msg}),n({type:s.h.uiCloseLoading}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),n({type:s.h.uiCloseLoading}),n({type:s.h.uiErrorMessage,payload:JSON.stringify(e.t0)});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=432.0e670c7c.chunk.js.map