(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{386:function(t,e){},387:function(t,e){},388:function(t,e){},389:function(t,e){},407:function(t,e){},408:function(t,e){},524:function(t,e,n){"use strict";n.r(e);var r=n(16),c=(n(60),n(6),n(32),n(115),n(177),n(406)),o=n.n(c),l=n(405),d=n.n(l),v={data:function(){return{getAllDB:[],search:"",expand2:!1}},computed:{searchResult:function(){var t=this;return this.getAllDB.filter((function(e){return e.title.match(t.search)}))}},watch:{Sanitize:function(){return this.sanitize()}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://api.jikan.moe/v3/search/anime?status=completed&order_by=end_date&sort=desc&type=tv").then((function(e){t.getAllDB=d.a.sortBy(e.data.results,["title"])})).catch((function(e){if(404===e.response.status)return t.$nuxt.error({statusCode:404,message:e.message})}));case 2:case"end":return e.stop()}}),e)})))()},sanitize:function(){return o()(this.searchResult)}}},h=n(72),_=n(114),f=n.n(_),m=n(374),x=n(247),w=n(413),C=n(382),V=n(375),k=n(421),y=n(119),A=n(142),B=n(508),R=n(377),T=n(509),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-btn",{staticClass:"mr-auto",attrs:{outlined:"",color:"black"},on:{click:function(e){t.expand2=!t.expand2}}},[t._v("\n    search\n  ")]),t._v(" "),n("br"),t._v(" "),n("v-expand-x-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.expand2,expression:"expand2"}],attrs:{outlined:"",label:"search",rounded:"",danse:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-row",t._l((t.getAllDB,t.searchResult),(function(e,r){return n("v-col",{key:r,attrs:{cols:"12","no-gutters":"",md:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400",rounded:"xl"}},[n("v-img",{staticClass:"white--text text--primary align-end",attrs:{height:"100%",width:"100%",src:e.image_url}}),t._v(" "),n("v-card-title",[t._v(t._s(e.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0"},[t._v("Type: "+t._s(e.type))]),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0"},[t._v("Episode: "+t._s(e.episodes))]),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0"},[t._v("Score: "+t._s(e.score))]),t._v(" "),n("v-card-subtitle",{staticClass:"pb-5"},[t._v("Completed on:\n          "+t._s(t.$moment(e.end_date).fromNow()))]),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("div",[t._v(t._s(e.synopsis))])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-chip",{attrs:{color:"blue",link:"",target:"_blank",outlined:"",nuxt:"",rel:"noreferrer",href:e.url}},[t._v("Go to Link")]),t._v(" "),n("v-spacer")],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VApp:m.a,VBtn:x.a,VCard:w.a,VCardActions:C.a,VCardSubtitle:C.b,VCardText:C.c,VCardTitle:C.d,VChip:V.a,VCol:k.a,VExpandXTransition:y.b,VImg:A.a,VRow:B.a,VSpacer:R.a,VTextField:T.a})}}]);