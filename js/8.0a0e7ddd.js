(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{f8af:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{attrs:{elevated:""}},[e("q-toolbar",[e("q-btn",{attrs:{flat:"",round:"",icon:t.drawerOpen?"keyboard_arrow_left":"keyboard_arrow_right"},on:{click:function(a){t.drawerOpen=!t.drawerOpen}}}),e("q-btn",{attrs:{flat:"",round:"",icon:"apps"},on:{click:t.onClickApps}}),e("q-toolbar-title",{staticClass:"__shyme-app-header"},[t._v("\n         \n      ")]),e("q-toolbar-title",[e("q-icon",{attrs:{name:t.urlObj.icon}}),t._v("  "+t._s(t.$t(t.urlObj.name)))],1),e("q-space"),e("q-btn",{attrs:{flat:"",round:"",icon:"email"}},[e("q-badge",{attrs:{floating:"",color:"negative"}},[t._v("2")])],1),e("q-btn",{attrs:{flat:"",round:"",icon:"person_pin"}})],1)],1),e("q-drawer",{attrs:{"show-if-above":"",width:280,breakpoint:400},model:{value:t.drawerOpen,callback:function(a){t.drawerOpen=a},expression:"drawerOpen"}},[e("q-scroll-area",{staticClass:"__shyme-drawer-scroll-area"},[e("q-list",{staticClass:"rounded-borders",attrs:{padding:""}},t._l(t.apps,(function(a,r){return e("q-expansion-item",{key:r,scopedSlots:t._u([{key:"header",fn:function(){return[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",[e("img",{attrs:{src:a.thum}})])],1),e("q-item-section",[t._v(t._s(t.$t(a.name)))])]},proxy:!0}],null,!0)},t._l(3,(function(a){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a,attrs:{"inset-level":1,clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"arrow_right"}})],1),e("q-item-section",[t._v("\n              Dummy Item\n            ")])],1)})),1)})),1)],1),e("q-img",{staticClass:"absolute-top",staticStyle:{height:"150px"},attrs:{src:"statics/img/dummy-back.jpg"}},[e("div",{staticClass:"absolute-bottom bg-transparent"},[e("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"66px"}},[e("img",{attrs:{src:"statics/img/dummy-face.jpg"}})]),e("div",{staticClass:"text-weight-bold"},[t._v("Razvan Stoenescu")]),e("div",[t._v(t._s(t.user.getUsername()))])],1)])],1),e("q-page-container",[e("router-view")],1)],1)},n=[],s=(e("ac6a"),e("cadf"),e("06db"),e("456d"),e("2cf4")),i={preFetch:function(t){var a=t.store,e=(t.currentRoute,t.previousRoute,t.redirect);t.ssrContext;a.dispatch("userSession/init");var r=a.state.userSession.session;r.isEmpty()&&e(s["a"].USER.LOGIN.url)},data:function(){return{drawerOpen:!0}},methods:{onClickApps:function(){this.$router.push(s["a"].USER.TOP.url).catch((function(){}))}},computed:{apps:function(){return Object.keys(s["a"].USER).filter((function(t){var a=s["a"].USER[t].isApp;return a})).map((function(t){return s["a"].USER[t]}))},urlObj:function(){var t=this.$router.currentRoute;return Object(s["b"])(t.path)},user:function(){return this.$store.state.userSession.session}}},o=i,c=e("2877"),l=e("4d5a"),u=e("e359"),p=e("65c6"),d=e("9c40"),m=e("6ac5"),b=e("0016"),f=e("2c91"),v=e("58a8"),q=e("9404"),h=e("4983"),w=e("1c1c"),_=e("3b73"),g=e("4074"),Q=e("cb32"),k=e("66e5"),y=e("068f"),O=e("09e3"),S=e("714f"),C=e("eebe"),R=e.n(C),x=Object(c["a"])(o,r,n,!1,null,null,null);a["default"]=x.exports;R()(x,"components",{QLayout:l["a"],QHeader:u["a"],QToolbar:p["a"],QBtn:d["a"],QToolbarTitle:m["a"],QIcon:b["a"],QSpace:f["a"],QBadge:v["a"],QDrawer:q["a"],QScrollArea:h["a"],QList:w["a"],QExpansionItem:_["a"],QItemSection:g["a"],QAvatar:Q["a"],QItem:k["a"],QImg:y["a"],QPageContainer:O["a"]}),R()(x,"directives",{Ripple:S["a"]})}}]);