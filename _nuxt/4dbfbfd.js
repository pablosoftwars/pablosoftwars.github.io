(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{476:function(t,e,r){var content=r(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("0e1197bb",content,!0,{sourceMap:!1})},484:function(t,e,r){"use strict";r(476)},485:function(t,e,r){var o=r(13)(!1);o.push([t.i,".photo-frame[data-v-75d7138a]{border-radius:50%}.photo-container[data-v-75d7138a]{position:relative;z-index:2;height:242px}.circle-container[data-v-75d7138a]{position:absolute;display:flex;align-items:center;justify-content:center;height:200px;width:200px}.circle-item[data-v-75d7138a]{position:absolute;height:190px;width:190px;border-radius:50%;background-color:var(--v-background-base);opacity:.5;z-index:-1}",""]),t.exports=o},510:function(t,e,r){"use strict";r.r(e);var o={mounted:function(){this.animateFramePhoto()},methods:{animateFramePhoto:function(){this.$gsap.timeline().to(".circle-item",{duration:2,borderRadius:"random([40%, 70%]) random([40%, 70%]) random([40%, 70%]) random([40%, 70%])",ease:"linear",rotation:"random(100, 360)",repeat:-1,repeatRefresh:!0})}}},n=(r(484),r(3)),c=r(60),l=r.n(c),d=r(183),v=r(448),f=r(297),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"transparent",attrs:{flat:""}},[r("div",{staticClass:"photo-container d-flex align-center justify-center"},[r("v-avatar",{attrs:{size:"180"}},[r("v-img",{staticClass:"photo-frame",attrs:{src:"fotoperfil.png","lazy-src":"fotoperfil.png",alt:"photo","aspect-ratio":"1"}})],1),t._v(" "),r("div",{staticClass:"circle-container"},[r("div",{staticClass:"circle-item"}),t._v(" "),r("div",{staticClass:"circle-item"}),t._v(" "),r("div",{staticClass:"circle-item"}),t._v(" "),r("div",{staticClass:"circle-item"})])],1)])}),[],!1,null,"75d7138a",null);e.default=component.exports;l()(component,{VAvatar:d.a,VCard:v.a,VImg:f.a})}}]);