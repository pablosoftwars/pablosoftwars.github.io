(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6],{507:function(t,e,n){"use strict";n.r(e);var r={components:{},data:function(){return{parrafo:["Egresado de la carrera de ingeniería de sistemas en busca de oportunidades laborales con crecimiento profesional, para poner en práctica todo lo aprendido y poder formar parte de su equipo de trabajo en torno a la vocación y así poder dar buenos resultados en los objetivos y metas generales de la empresa u organización","Me considero una persona responsable, dinámico y creativo con facilidad de adaptación y alta disponibilidad para adquirir nuevos conocimientos"]}},mounted:function(){this.animateParrafos()},methods:{animateParrafos:function(){this.$gsap.from(".paragraphStudy",{y:-20,opacity:0,stagger:.2,ease:"power",delay:.3})}}},o=n(3),l=n(60),c=n.n(l),d=n(448),v=n(298),f=n(477),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",color:"transparent"}},[n("div",{staticClass:"d-flex"},[n("div",{class:[t.$vuetify.breakpoint.mobile?"ml-1":"ml-4","box-title"]},[n("span",{staticClass:"title"},[t._v("Presentación")])])]),t._v(" "),n("v-divider",{staticClass:"ml-4"}),t._v(" "),n("v-card-text",{staticClass:"px-5"},t._l(t.parrafo,(function(e,i){return n("p",{key:i,staticClass:"title paragraphStudy"},[t._v("\n      "+t._s(e)+"\n    ")])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VDivider:f.a})},508:function(t,e,n){"use strict";n.r(e);var r={components:{},data:function(){return{listEducation:[{icon:"$vuetify.icons.donboscoicon",name:"Colegio Don Bosco",grades:["Bachiller en Humanidades"]},{icon:"$vuetify.icons.mamamargaritaicon",name:"Instituto Mama Margarita",grades:["Operador en Computadora","Operador en Internet"]},{icon:"$vuetify.icons.utepsaicon",name:"Universidad Utepsa",grades:["Egresado en Ingeniería de Sistemas"]}]}},mounted:function(){this.animateIconsEstudy()},methods:{animateIconsEstudy:function(){this.$gsap.from(".iconsStudy",{y:-20,opacity:0,stagger:.2,ease:"power",delay:.3})}}},o=n(3),l=n(60),c=n.n(l),d=n(448),v=n(298),f=n(477),m=n(178),_=n(181),x=n(120),y=n(68),C=n(105),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent fill-height",attrs:{flat:""}},[n("div",{staticClass:"d-flex"},[n("div",{class:[t.$vuetify.breakpoint.mobile?"ml-1":"ml-4","box-title"]},[n("span",{staticClass:"title"},[t._v("Educación")])])]),t._v(" "),n("v-divider",{staticClass:"ml-4"}),t._v(" "),n("v-card-text",{staticClass:"px-5 d-flex flex-wrap justify-space-around"},t._l(t.listEducation,(function(e,i){return n("v-card",{key:i,staticClass:"mx-auto iconsStudy transparent text-center",attrs:{flat:""}},[n("v-icon",{attrs:{size:"100"}},[t._v(t._s(e.icon))]),t._v(" "),n("v-card-title",{staticClass:"py-0 d-flex align-center justify-center primary--text"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("v-card-text",[n("v-list",{staticClass:"rounded-xl",staticStyle:{"background-color":"transparent"},attrs:{outlined:"",dense:""}},t._l(e.grades,(function(e,r){return n("v-list-item",{key:r,staticClass:"title font-weight-light"},[n("v-list-item-icon",[n("v-icon",[t._v("$vuetify.icons.birreteicon")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"title font-weight-light d-flex text-left text-wrap",staticStyle:{"line-height":"26px","align-items":"start"}},[t._v("\n                "+t._s(e)+"\n              ")])],1)],1)})),1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VDivider:f.a,VIcon:m.a,VList:_.a,VListItem:x.a,VListItemContent:y.a,VListItemIcon:C.a,VListItemSubtitle:y.b})},512:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(60),l=n.n(o),c=n(448),d=n(298),v=n(524),f=n(477),m=n(525),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("div",{staticClass:"d-flex"},[n("div",{class:[t.$vuetify.breakpoint.mobile?"ml-1":"ml-4","box-title"]},[n("span",{staticClass:"title"},[t._v("Idiomas")])])]),t._v(" "),n("v-divider",{staticClass:"ml-4"}),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{staticClass:"d-flex flex-wrap justify-space-around"},[n("div",{staticClass:"text-center title"},[t._v("\n            Español (Nativo) - Ingles Tecnico (Básico)\n          ")])])],1)],1)],1),t._v(" "),n("br"),t._v(" "),n("br")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:c.a,VCardText:d.b,VCol:v.a,VDivider:f.a,VRow:m.a})},527:function(t,e,n){"use strict";n.r(e);var r=n(507),o=n(508),l=n(512),c={head:{titleTemplate:"%s | Presentacion"},components:{Presentation:r.default,Education:o.default,Idiom:l.default},transition:"slide-x-transition"},d=n(3),v=n(60),f=n.n(v),m=n(468),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("presentation"),t._v(" "),n("br"),t._v(" "),n("education"),t._v(" "),n("br"),t._v(" "),n("idiom")],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VContainer:m.a})}}]);