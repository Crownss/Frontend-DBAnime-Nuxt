(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{386:function(t,e){},387:function(t,e){},388:function(t,e){},389:function(t,e){},407:function(t,e){},408:function(t,e){},523:function(t,e,r){"use strict";r.r(e);var n=r(16),c=(r(60),r(6),r(32),r(115),r(177),r(406)),o=r.n(c),l=r(405),d=r.n(l),v={data:function(){return{getAllDB:[],search:"",slug:this.$route.params.slug}},computed:{searchResult:function(){var t=this;return this.getAllDB.filter((function(e){return e.title.match(t.search)}))}},watch:{Sanitize:function(){return this.sanitize()}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://api.jikan.moe/v3/search/anime?status=completed&order_by=end_date&sort=desc&type=tv&page="+t.slug).then((function(e){t.getAllDB=d.a.sortBy(e.data.results,["title"])})).catch((function(e){if(404===e.response.status)return t.$nuxt.error({statusCode:404,message:e.message})}));case 2:case"end":return e.stop()}}),e)})))()},sanitize:function(){return o()(this.searchResult)}}},h=r(72),f=r(114),_=r.n(f),m=r(374),x=r(412),C=r(382),w=r(375),V=r(420),k=r(142),y=r(508),A=r(377),R=r(509),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-text-field",{attrs:{outlined:"",label:"search",rounded:"",danse:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("br"),t._v(" "),r("v-row",t._l((t.getAllDB,t.searchResult),(function(e,n){return r("v-col",{key:n,attrs:{cols:"12","no-gutters":"",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text text--primary align-end",attrs:{height:"200px",src:e.image_url}},[r("v-card-title",[t._v(t._s(e.title))])],1),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Type: "+t._s(e.type))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Episode: "+t._s(e.episodes))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-5"},[t._v("Score: "+t._s(e.score))]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(e.synopsis))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-chip",{attrs:{color:"blue",link:"",target:"_blank",outlined:"",nuxt:"",rel:"noreferrer",href:e.url}},[t._v("Go to Link")]),t._v(" "),r("v-spacer")],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VApp:m.a,VCard:x.a,VCardActions:C.a,VCardSubtitle:C.b,VCardText:C.c,VCardTitle:C.d,VChip:w.a,VCol:V.a,VImg:k.a,VRow:y.a,VSpacer:A.a,VTextField:R.a})}}]);