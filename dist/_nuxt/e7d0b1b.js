(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{363:function(t,e){},364:function(t,e){},366:function(t,e){},367:function(t,e){},371:function(t,e){},372:function(t,e){},492:function(t,e,r){"use strict";r.r(e);var n=r(10),c=(r(57),r(11),r(29),r(132),r(165),r(370)),o=r.n(c),l=r(369),d=r.n(l),h={data:function(){return{getAllDB:[],search:"",slug:this.$route.params.slug}},head:{title:"Movie"},computed:{searchResult:function(){var t=this;return this.getAllDB.filter((function(e){return e.title.match(t.search)}))}},watch:{Sanitize:function(){return this.sanitize()}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://api.jikan.moe/v3/search/anime?type=movie&order_by=score&sort=desc&page="+t.slug).then((function(e){t.getAllDB=d.a.sortBy(e.data.results,["title"])}));case 2:case"end":return e.stop()}}),e)})))()},sanitize:function(){return o()(this.searchResult)}}},v=r(66),f=r(106),m=r.n(f),_=r(351),x=r(422),w=r(360),V=r(352),k=r(434),C=r(233),y=r(481),A=r(355),R=r(482),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-text-field",{attrs:{outlined:"",label:"search",rounded:"",danse:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("br"),t._v(" "),r("v-row",t._l((t.getAllDB,t.searchResult),(function(e,n){return r("v-col",{key:n,attrs:{cols:"12","no-gutters":"",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text text--primary align-end",attrs:{height:"200px",src:e.image_url}},[r("v-card-title",[t._v(t._s(e.title))])],1),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(e.synopsis))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-chip",{attrs:{close:"","close-icon":"mdi-open-in-new",color:"blue",link:"",target:"_blank",outlined:"",nuxt:"",rel:"noreferrer",href:e.url}},[t._v("Goto Link")]),t._v(" "),r("v-spacer")],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VApp:_.a,VCard:x.a,VCardActions:w.a,VCardText:w.c,VCardTitle:w.d,VChip:V.a,VCol:k.a,VImg:C.a,VRow:y.a,VSpacer:A.a,VTextField:R.a})}}]);