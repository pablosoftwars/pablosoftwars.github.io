(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{445:function(t,e,o){var content=o(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("0c06c2ec",content,!0,{sourceMap:!1})},452:function(t,e,o){t.exports=o.p+"img/profile-photo.9c8f8a5.png"},453:function(t,e,o){"use strict";o(445)},454:function(t,e,o){var r=o(14)(!1);r.push([t.i,".photo-frame[data-v-0535a6b1]{border-radius:50%;height:150px;width:150px}.photo-container[data-v-0535a6b1]{position:relative;z-index:2;height:242px}.photo-background[data-v-0535a6b1]{position:absolute;left:50%;z-index:-1;border-radius:50%;overflow:hidden}.circle-container[data-v-0535a6b1]{position:absolute;display:flex;align-items:center;justify-content:center;height:200px;width:200px}.circle-item[data-v-0535a6b1]{position:absolute;height:180px;width:180px;border-radius:50%;border:2px solid #000;z-index:-1}",""]),t.exports=r},482:function(t,e,o){"use strict";o.r(e);var r={mounted:function(){this.animateFramePhoto()},methods:{animateFramePhoto:function(){this.$gsap.timeline().to(".circle-item",{duration:2,borderRadius:"random([40%, 70%]) random([40%, 70%]) random([40%, 70%]) random([40%, 70%])",ease:"linear",rotation:"random(100, 360)",repeat:-1,repeatRefresh:!0})}}},n=(o(453),o(4)),c=o(107),d=o.n(c),l=o(419),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"transparent",attrs:{flat:""}},[r("div",{staticClass:"photo-container d-flex align-center justify-center"},[r("img",{staticClass:"photo-frame",attrs:{src:o(452),alt:"photo"}}),t._v(" "),r("div",{staticClass:"circle-container"},[r("div",{staticClass:"circle-item"}),t._v(" "),r("div",{staticClass:"circle-item"}),t._v(" "),r("div",{staticClass:"circle-item"}),t._v(" "),r("div",{staticClass:"circle-item"})])])])}),[],!1,null,"0535a6b1",null);e.default=component.exports;d()(component,{VCard:l.a})}}]);