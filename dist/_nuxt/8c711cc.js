(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{386:function(t,e){},387:function(t,e){},388:function(t,e){},389:function(t,e){},393:function(t,e){},394:function(t,e){},512:function(t,e,r){"use strict";r.r(e);var n=r(16),c=(r(60),r(6),r(32),r(115),r(177),r(392)),o=r.n(c),l=r(391),d=r.n(l),v={data:function(){return{getAllDB:[],search:"",date:"",slug:this.$route.params.slug}},head:{title:"On-Going"},computed:{searchResult:function(){var t=this;return this.getAllDB.filter((function(e){return e.title.match(t.search)}))}},watch:{Sanitize:function(){return this.sanitize()}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://api.jikan.moe/v3/search/anime?status=upcoming&order_by=end_date&sort=desc").then((function(e){t.getAllDB=d.a.sortBy(e.data.results,["title"])})).catch((function(e){if(404===e.response.status)return t.$nuxt.error({statusCode:404,message:e.message})}));case 2:case"end":return e.stop()}}),e)})))()},sanitize:function(){return o()(this.searchResult)}}},h=r(72),_=r(114),f=r.n(_),m=r(374),x=r(412),C=r(382),w=r(375),V=r(436),k=r(142),y=r(505),R=r(377),A=r(506),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-text-field",{attrs:{outlined:"",label:"search",rounded:"",danse:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("br"),t._v(" "),r("v-row",t._l((t.getAllDB,t.searchResult),(function(e,n){return r("v-col",{key:n,attrs:{cols:"12","no-gutters":"",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text text--primary align-end",attrs:{height:"200px",src:e.image_url}},[r("v-card-title",[t._v(t._s(e.title))])],1),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Type: "+t._s(e.type))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Episode: "+t._s(e.episodes))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Rated: "+t._s(e.rated))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Status: On-Going")]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-5"},[t._v("Release:\n          "+t._s(t.$moment(e.start_date).format("ddd, DD-M-YYYY")))]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(e.synopsis))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-chip",{attrs:{color:"blue",link:"",target:"_blank",outlined:"",nuxt:"",rel:"noreferrer",href:e.url}},[t._v("Go to Link")]),t._v(" "),r("v-spacer")],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VApp:m.a,VCard:x.a,VCardActions:C.a,VCardSubtitle:C.b,VCardText:C.c,VCardTitle:C.d,VChip:w.a,VCol:V.a,VImg:k.a,VRow:y.a,VSpacer:R.a,VTextField:A.a})}}]);