(this.webpackJsonpappdk=this.webpackJsonpappdk||[]).push([[0],{13:function(e,o,i){},14:function(e,o,i){},15:function(e,o,i){"use strict";i.r(o);var a=i(0),t=i.n(a),r=i(7),c=i.n(r),n=(i(13),i(1)),d=i(2),l=i(5),u=i(4),s=i(3),A=(i(14),function(e){Object(u.a)(i,e);var o=Object(s.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=o.call(this,e)).refrescarCantidad=function(){var e=a.props.getCantidad(a.props.modulo);a.setState({count:e})},a.onClickAccion=function(e,o){e.preventDefault();var i=a.state.count;if(0===i&&-1===o)return null;i+=o,a.setState({count:i},(function(){a.props.setCantidad(a.props.modulo,i)}))},a.state={count:0},a}return Object(d.a)(i,[{key:"render",value:function(){var e=this,o=this.props.modulo,i=o.nombre,a=o.moduloDetalle;return t.a.createElement("div",{className:"card cardModulo "},t.a.createElement("div",{className:"card-header"},t.a.createElement("h5",{className:"card-title"},i)),t.a.createElement("div",{className:"card-body"},a.map((function(e,o){return t.a.createElement("p",{key:o,className:"card-text"},e.producto)}))),t.a.createElement("div",{className:"card-footer "},t.a.createElement("div",{className:" row justify-content-center"},t.a.createElement("div",{className:"input-group col-xs-6 col-sm-6 col-md-3 col-lg-2"},t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(o){return e.onClickAccion(o,-1)}},"-")),t.a.createElement("input",{type:"number",className:"form-control",placeholder:"Cantidad",value:this.state.count,readOnly:!0}),t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(o){return e.onClickAccion(o,1)}},"+"))))))}}]),i}(a.Component)),p=function(e){Object(u.a)(i,e);var o=Object(s.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=o.call(this,e)).componentWillUpdate=function(){a.miMapaRefs=new Map,a.props.modulos.forEach((function(e){a.miMapaRefs.set(e.id,t.a.createRef())}))},a.actualizarCantidadEnLosModulos=function(){a.miMapaRefs.forEach((function(e){e.current.refrescarCantidad()}))},a.setCantidad=function(e,o){var i=a.props.farmacia;if(""!==i){var t=localStorage.getItem("l_pedidos")||"",r=!0;if(""!==t&&(t=JSON.parse(t)),Array.isArray(t)){for(var c=0;c<t.length;c++)if(t[c].modulo.id===e.id&&t[c].farmacia.id===i.id){r=!1,t[c].cantidad=o;break}}else t=[];if(r){var n={fechaCreacion:Date.now(),farmacia:i,modulo:e,cantidad:o};t.push(n)}localStorage.setItem("l_pedidos",JSON.stringify(t))}},a.getCantidad=function(e){var o=0,i=a.props.farmacia;if(""===i)return o;var t=localStorage.getItem("l_pedidos")||"";if(""!==t&&(t=JSON.parse(t),Array.isArray(t)))for(var r=0;r<t.length;r++)if(String(t[r].modulo.id)===String(e.id)&&String(t[r].farmacia.id)===String(i.id)){o=t[r].cantidad;break}return o},a}return Object(d.a)(i,[{key:"render",value:function(){var e=this,o=this.props.modulos;return 0===o.length?null:t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,o.map((function(o){return t.a.createElement(A,{key:o.id,id:o.id,ref:e.miMapaRefs.get(o.id),modulo:o,setCantidad:e.setCantidad,getCantidad:e.getCantidad})}))))}}]),i}(a.Component);var E=function(e){var o=Object(a.useRef)(null);return t.a.createElement(t.a.Fragment,null,t.a.createElement("nav",{className:"navbar navbar-light bg-light"},t.a.createElement("form",{onSubmit:function(i){i.preventDefault();var a=o.current.value;e.filtrarModulosApp(a)}},t.a.createElement("div",{className:"form-group row"},t.a.createElement("label",{className:"col-sm-2 col-form-label"},"Farmacia"),t.a.createElement("div",{className:"col-sm-10"},t.a.createElement("select",{className:"form-control ",onChange:e.handleChange},t.a.createElement("option",{disabled:!0,selected:!0,value:"0"}," -- seleccione una opci\xf3n -- "),e.farmacias.map((function(e){return t.a.createElement("option",{key:e.id,value:e.id},e.nombre)}))))),t.a.createElement("div",{className:"form-inline"},t.a.createElement("input",{ref:o,className:"form-control mr-sm-2 inputUppercase",type:"search",placeholder:"Filtro","aria-label":"Filtro"}),t.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Busqueda")))),""!==e.farmacia&&t.a.createElement("div",{className:"jumbotron"},t.a.createElement("span",{className:"navbar-text"},t.a.createElement("b",null,"Direcci\xf3n: ")," ",e.farmacia.direccion,"  ")))},O=function(e){Object(u.a)(i,e);var o=Object(s.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=o.call(this,e)).cargarDatosInicio_DesdeApi=function(){fetch(a.url+"farmacia").then((function(e){return e.json()})).then((function(e){localStorage.setItem("l_farmacias",JSON.stringify(e))})).then((function(){return fetch(a.url+"modulo").then((function(e){return e.json()})).then((function(e){localStorage.setItem("l_modulos",JSON.stringify(e))}))})).then((function(){a.cargarDatosInicio_DesdeLocalStorage()})).catch((function(e){a.cargarDatosInicio_DesdeLocalStorage()}))},a.cargarDatosInicio_DesdeLocalStorage=function(){var e=localStorage.getItem("l_farmacias")||"";""!==e&&(e=JSON.parse(e)),Array.isArray(e)||(e=[]),a.setState({farmacias:e.slice(0,50)});var o=localStorage.getItem("l_modulos")||"";""!==o&&(o=JSON.parse(o)),Array.isArray(o)||(o=[]),a.setState({modulosOriginal:o.slice(0,20)},(function(){a.filtrarModulosApp("")}))},a.filtrarModulosApp=function(e){a.setState({filtrado:e},(function(){if(""===a.state.filtrado)a.setState({modulos:a.state.modulosOriginal});else{var e=a.state.modulos.filter((function(e){return String(e.nombre).toUpperCase().includes(String(a.state.filtrado).toUpperCase())}));a.setState({modulos:e})}}))},a.state={modulosOriginal:[{id:75250,nombre:"TRANSFER ONE MILLON PRIVE LADY",descripcion:" PLAZO HABITUAL - Dto. Habitual - Combo de Productos - Prod. Bonificados: 1 u. de PROBADOR P.RABANNE LADY MILLON PRIVE",moduloDetalle:[{id:"75250_A893356",idModulo:75250,producto:"P.RABANNE LADY MILLION PRIVE EDP X 30ML",descripcion:"Precio Habitual",precio:3330.58,precioDescuento:3330.58},{id:"75250_A202354",idModulo:75250,producto:"P.RABANNE LADY MILLION PRIVE EDP X 50ML",descripcion:"Precio Habitual",precio:4303.11,precioDescuento:4303.11},{id:"75250_A903201",idModulo:75250,producto:"P.RABANNE LADY MILLION PRIVE EDP X 80ML",descripcion:"Precio Habitual",precio:5245.66,precioDescuento:5245.66}]},{id:89763,nombre:"TRANSFER PROMO KOSIUKO SHINE NUEVO",descripcion:" PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR KOSIUKO SHINE",moduloDetalle:[{id:"89763_A152153",idModulo:89763,producto:"KOSIUKO SHINE EDP X 100 ML",descripcion:"Precio Habitual - Prod. Bonificados:1 u. de PROBADOR KOSIUKO SHINE",precio:1107.02,precioDescuento:1107.02}]},{id:93736,nombre:"TRANSFER PUIG BLUE SEDUCTION FOR WOMEN",descripcion:" PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR A.BANDERA BLUE SEDUCTION FOR WOM",moduloDetalle:[{id:"93736_A172756",idModulo:93736,producto:"BLUE SEDUC F-WOMEN EDT X 50 ML",descripcion:"Precio Habitual",precio:971.2,precioDescuento:971.2},{id:"93736_A468314",idModulo:93736,producto:"BLUE SEDUC F-WOMEN EDT X 80 ML",descripcion:"Precio Habitual",precio:1300.92,precioDescuento:1300.92}]},{id:114876,nombre:"TRANSFER PUIG BENETTON ROSE",descripcion:" PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR BENETTON COLORS WOMAN ROSE",moduloDetalle:[{id:"114876_A513585",idModulo:114876,producto:"BENETTON COLORS WOMAN ROSE EDT X 50 ML",descripcion:"Precio Habitual",precio:1076.11,precioDescuento:1076.11},{id:"114876_A024106",idModulo:114876,producto:"BENETTON COLORS WOMAN ROSE EDT X 80 ML",descripcion:"Precio Habitual",precio:1390.85,precioDescuento:1390.85}]},{id:120071,nombre:"TRANSFER PA\xd1ALES PAMI",descripcion:" VTO 60 d\xedas",moduloDetalle:[{id:"120071_A985643",idModulo:120071,producto:"PA\xd1AL PAMI AD MOD 10 (EX 12)",descripcion:"Precio Habitual",precio:2238.29,precioDescuento:2238.29},{id:"120071_A392078",idModulo:120071,producto:"PA\xd1AL PAMI AD MOD 5",descripcion:"Precio Habitual",precio:735.76,precioDescuento:735.76},{id:"120071_A456308",idModulo:120071,producto:"PA\xd1AL PAMI AD MOD 6 (EX 8)",descripcion:"Precio Habitual",precio:1263.14,precioDescuento:1263.14},{id:"120071_A826326",idModulo:120071,producto:"PA\xd1AL PAMI AD MOD 7 (EX 9)",descripcion:"Precio Habitual",precio:1394.24,precioDescuento:1394.24},{id:"120071_A323492",idModulo:120071,producto:"PA\xd1AL PAMI AD MOD 8 (EX 10)",descripcion:"Precio Habitual",precio:2091.36,precioDescuento:2091.36}]},{id:122713,nombre:"TRANSFER PUIG RAPSODIA PROMO",descripcion:" PLAZO HABITUAL - Dto. Habitual",moduloDetalle:[{id:"122713_A455492",idModulo:122713,producto:"RAPSODIA INDIE EDP X 100 ML",descripcion:"Precio Habitual - Prod. Bonificados:1 u. de PROBADOR RAPSODIA INDIE",precio:1795.51,precioDescuento:1795.51}]},{id:122889,nombre:"TRANSFER PADOC BOOS PROMO WOMAN C/PROB BONIF",descripcion:" PLAZO HABITUAL - Dto. Habitual",moduloDetalle:[{id:"122889_A776702",idModulo:122889,producto:"BOOS FOREVER F-WOM EDP X 100 ML",descripcion:"Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS FOREVER EDP X100ML",precio:965.32,precioDescuento:965.32},{id:"122889_A400484",idModulo:122889,producto:"BOOS INTENSE LUMIERE WOM EDP X90ML",descripcion:"Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS INTENSE LUMIERE",precio:1208.01,precioDescuento:1208.01},{id:"122889_A185252",idModulo:122889,producto:"BOOS INTENSE WOM EDP X90ML",descripcion:"Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS INTENSE WOMAN EDP X 90",precio:1208.01,precioDescuento:1208.01},{id:"122889_A381220",idModulo:122889,producto:"BOOS MIDNIGHT F-WOM EDP X 100 ML",descripcion:"Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS MIDNIGHT",precio:965.32,precioDescuento:965.32},{id:"122889_A821550",idModulo:122889,producto:"BOOS RAINBOW F-WOM EDP X 100ML",descripcion:"Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS RAINBOW F-WOM",precio:965.32,precioDescuento:965.32}]},{id:128287,nombre:"TRANSFER PUIG A BANDERAS POWER",descripcion:" PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR A.BANDERA POWER OF SED X100",moduloDetalle:[{id:"128287_A733610",idModulo:128287,producto:"A. BANDERAS POWER OF SED EDT X 100 ML",descripcion:"Precio Habitual",precio:1498.77,precioDescuento:1498.77},{id:"128287_A678580",idModulo:128287,producto:"A. BANDERAS POWER OF SED EDT X 50 ML",descripcion:"Precio Habitual",precio:1088.1,precioDescuento:1088.1}]},{id:129466,nombre:"TRANSFER SANACUTIS ORDE\xd1E PROMO",descripcion:" PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de CREMA DE ORDE\xd1E SANACUTIS PROBADOR X 1",moduloDetalle:[{id:"129466_A285120",idModulo:129466,producto:"CREMA DE ORDE\xd1E SANACUTIS C/VALVU X 250 GR",descripcion:"Precio Habitual",precio:271.05,precioDescuento:148.15},{id:"129466_A868544",idModulo:129466,producto:"CREMA DE ORDE\xd1E SANACUTIS X 250 GR",descripcion:"Precio Habitual",precio:233.9,precioDescuento:127.84}]},{id:132436,nombre:"TRANSFER PUIG LADY MILLON",descripcion:" PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR P.RABANNE LADY MILLION",moduloDetalle:[{id:"132436_A872719",idModulo:132436,producto:"P.RABANNE LADY MILLION EDP X 50 ML",descripcion:"Precio Habitual",precio:5415.53,precioDescuento:5415.53},{id:"132436_A893356",idModulo:132436,producto:"P.RABANNE LADY MILLION PRIVE EDP X 30ML",descripcion:"Precio Habitual",precio:3330.58,precioDescuento:3330.58},{id:"132436_A202354",idModulo:132436,producto:"P.RABANNE LADY MILLION PRIVE EDP X 50ML",descripcion:"Precio Habitual",precio:4303.11,precioDescuento:4303.11},{id:"132436_A903201",idModulo:132436,producto:"P.RABANNE LADY MILLION PRIVE EDP X 80ML",descripcion:"Precio Habitual",precio:5245.66,precioDescuento:5245.66},{id:"132436_A675583",idModulo:132436,producto:"P.RABANNE LADY MILLON EDP X 30 ML",descripcion:"Precio Habitual",precio:4196.53,precioDescuento:4196.53},{id:"132436_A702081",idModulo:132436,producto:"P.RABANNE LADY MILLON EDP X 80 ML",descripcion:"Precio Habitual",precio:6587.88,precioDescuento:6587.88},{id:"132436_A909101",idModulo:132436,producto:"P.RABANNE LADY MILLON EDT X 80 ML",descripcion:"Precio Habitual",precio:814.43,precioDescuento:814.43}]}],modulos:[],farmacias:[{id:8469,nombre:"2 DE ABRIL DE PEREYRA REBECA SABRINA",direccion:"2 DE ABRIL 1475"},{id:7186,nombre:"24 DE MADUSSI CLAUDIA A",direccion:"24 DE SETIEMBRE 2192. BARRIO GENERAL PAZ SUR"},{id:4724,nombre:"24 HORAS DE MARTINA GONZALO",direccion:"RUTA 9 Y CORRIENTES"},{id:6517,nombre:"25 DE MAYO DE POLIWKA SANDRA",direccion:"25 DE MAYO 263"},{id:7263,nombre:"25 DE MAYO DE SANABA S.A.",direccion:"25 DE MAYO 222"},{id:8420,nombre:"3 DE ABRIL DE VACCA ANALIA",direccion:"LINIERS 446"},{id:7490,nombre:"4 SOLES DE FLEITAS YANINA S",direccion:"HIPOLITO IRIGOYEN 372"},{id:7860,nombre:"9 DE JULIO DE SANABA S.A.",direccion:"9 DE JULIO 418"},{id:7094,nombre:"A M R SALUD S.A.",direccion:"PARAGUAY 1470"},{id:8578,nombre:"A M R SALUD S.A. INSTITUCIONALES",direccion:"PARAGUAY 1470"},{id:850,nombre:"A.M.E.C. DE NOGOYA",direccion:"25 DE MAYO 738"},{id:8810,nombre:"A.M.P.A.I.A. DE ASOC MUT PERS AGROMETAL E INGERSOLL ARG",direccion:"9 DE JULIO 1758"},{id:8671,nombre:"A.M.S.E.C. - ASOC MUT SOLIDARIA DE EMP DE CCIO",direccion:"TUCUMAN 119"},{id:6971,nombre:"A.T.S.A.",direccion:"MENDOZA 2667"},{id:6075,nombre:"ABDEL MASIH ROSA ANA MARIA",direccion:"SAN MARTIN 56"},{id:4935,nombre:"ABRAHAM LUIS FEDERICO",direccion:"RIVADAVIA 301"},{id:5527,nombre:"ABRAHAN JOSE LUIS",direccion:"Bv. JUAN D. PERON 1896"}],farmaciaSeleccionada:"",filtrado:""},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.elementResultadoModulo=t.a.createRef(),a.url="http://www.kellerhoff.com.ar:84/api/",a}return Object(d.a)(i,[{key:"componentWillMount",value:function(){this.filtrarModulosApp("")}},{key:"handleChange",value:function(e){var o=this,i=this.state.farmacias.find((function(o){return String(o.id)===String(e.target.value)}));this.setState({farmaciaSeleccionada:i},(function(){o.elementResultadoModulo.current.actualizarCantidadEnLosModulos()}))}},{key:"render",value:function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"app container-fluid"},t.a.createElement(E,{handleChange:this.handleChange,filtrarModulosApp:this.filtrarModulosApp,farmacias:this.state.farmacias,farmacia:this.state.farmaciaSeleccionada}),t.a.createElement(p,{ref:this.elementResultadoModulo,modulos:this.state.modulos,farmacia:this.state.farmaciaSeleccionada})))}}]),i}(a.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,o){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var o="".concat("","/service-worker.js");m?(!function(e,o){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var a=i.headers.get("content-type");404===i.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,o)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(o,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(o,e)}))}}()},8:function(e,o,i){e.exports=i(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2f83719e.chunk.js.map