(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{511:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(60),n(62),{data:function(){return{valid:!1,nhentaiID:"",linkZip:"https://nhder.herokuapp.com/download/nhentai/"+this.nhentaiID+"/zip",linkCbz:"https://nhder.herokuapp.com/download/nhentai/"+this.nhentaiID+"/cbz",Rules:[function(t){return!!t||"Code nuclear is required"},function(t){return t.length<=7||"Code nuclear must be less than 7 characters"}]}},head:{title:"Nhentai"},created:function(){this.withZip(),this.withCbz()},methods:{withZip:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get(t.linkZip).then((function(t){window.open(t),setTimeout(3e3),window.close()}));case 2:case"end":return e.stop()}}),e)})))()},withCbz:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get(t.linkCbz).then((function(t){window.open(t),setTimeout(3e3),window.close()}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=n(72),l=n(114),h=n.n(l),d=n(247),v=n(412),w=n(382),f=n(420),m=n(455),x=n(377),C=n(506),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n("v-card-text",[n("v-spacer"),t._v(" "),n("div",[t._v("Nhentai Downloader")]),t._v(" "),n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"15",md:"15"}},[n("v-text-field",{staticClass:"text-h4 text--primary mx-auto",attrs:{rules:t.Rules,counter:7,label:"Code nuclear",pattern:"[0-9]+",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');",required:""},model:{value:t.nhentaiID,callback:function(e){t.nhentaiID=e},expression:"nhentaiID"}})],1)],1),t._v(" "),n("div",{staticClass:"text--primary"},[t._v("Download it with zip format or cbz format")])],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"cyan accent-4",rel:"noreferrer",target:"_blank",href:"http://localhost:8000/download/+{nhentaiID}+/zip"}},[t._v("\n      Zip\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"cyan accent-4",rel:"noreferrer",target:"_blank",href:{linkCbz:t.linkCbz}}},[t._v("\n      Cbz\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:d.a,VCard:v.a,VCardActions:w.a,VCardText:w.c,VCol:f.a,VForm:m.a,VSpacer:x.a,VTextField:C.a})}}]);