(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{474:function(t,e,r){var content=r(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("13f96aa2",content,!0,{sourceMap:!1})},480:function(t,e,r){"use strict";r(474)},481:function(t,e,r){var l=r(13)(!1);l.push([t.i,".tealdarken4-texto[data-v-5eb6db30]{color:#004d40}",""]),t.exports=l},509:function(t,e,r){"use strict";r.r(e);r(36);var l={name:"CardSkill",data:function(){return{listPrimary:[{icon:"$vuetify.icons.phpicon",text:"php",detalle:"Experiencia en Backend",value:"0"},{icon:"$vuetify.icons.jsicon",text:"javascript",detalle:"Experiencia en Fronted",value:"0"},{icon:"$vuetify.icons.sqlicon",text:"sql",detalle:"Manejo de Base de datos",value:"0"}]}},mounted:function(){var t=this;window.setTimeout((function(){t.setListPrimary()}),200)},methods:{setListPrimary:function(){this.listPrimary[0].value=75,this.listPrimary[1].value=65,this.listPrimary[2].value=75}}},n=(r(480),r(3)),c=r(60),o=r.n(c),d=r(448),v=r(298),f=r(524),m=r(477),x=r(178),y=r(180),C=r(525),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"transparent pb-2",attrs:{flat:""}},[r("v-card",{attrs:{flat:"",color:"transparent"}},[r("div",{staticClass:"d-flex"},[r("div",{class:[t.$vuetify.breakpoint.mobile?"ml-1":"ml-4","box-title"]},[r("span",{staticClass:"title"},[t._v("Lenguajes de Programación")])])]),t._v(" "),r("v-divider",{staticClass:"ml-4"}),t._v(" "),r("v-card-text",[r("v-row",[r("v-col",{staticClass:"d-flex flex-wrap justify-space-around"},t._l(t.listPrimary,(function(e,i){return r("div",{key:i,staticClass:"mt-4"},[r("v-progress-circular",{staticClass:"mx-5",attrs:{color:"primary",value:e.value,size:"100",width:"10"}},[r("v-icon",{attrs:{"x-large":""}},[t._v("\n                "+t._s(e.icon)+"\n              ")])],1),t._v(" "),r("div",{staticClass:"text-center"},[r("p",{staticClass:"title"},[t._v(t._s(e.text))])])],1)})),0)],1)],1)],1)],1)}),[],!1,null,"5eb6db30",null);e.default=component.exports;o()(component,{VCard:d.a,VCardText:v.b,VCol:f.a,VDivider:m.a,VIcon:x.a,VProgressCircular:y.a,VRow:C.a})}}]);