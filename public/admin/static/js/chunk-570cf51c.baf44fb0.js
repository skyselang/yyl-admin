(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-570cf51c"],{"11ea":function(e,t,a){},"26b4":function(e,t,a){"use strict";a("11ea")},"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},l=[];a("65ba");Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function n(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var i=r(),l=e-i,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var r=Math.easeInOutQuad(u,i,l,t);n(r),u<t?o(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,13,20,30,50,80,100,150,200,300]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(a("26b4"),a("5d22")),m=Object(d["a"])(c,i,l,!1,null,"06edfccb",null);t["a"]=m.exports},"351d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{xs:24,sm:22}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:"日志类型",clearable:""},model:{value:e.query.log_type,callback:function(t){e.$set(e.query,"log_type",t)},expression:"query.log_type"}},[a("el-option",{attrs:{value:1,label:"注册日志"}}),a("el-option",{attrs:{value:2,label:"登录日志"}}),a("el-option",{attrs:{value:3,label:"操作日志"}})],1),a("el-input",{staticClass:"filter-item",staticStyle:{width:"135px"},attrs:{placeholder:"账号/昵称",clearable:""},model:{value:e.query.member_keyword,callback:function(t){e.$set(e.query,"member_keyword",t)},expression:"query.member_keyword"}}),a("el-input",{staticClass:"filter-item",staticStyle:{width:"235px"},attrs:{placeholder:"接口链接/名称",clearable:""},model:{value:e.query.api_keyword,callback:function(t){e.$set(e.query,"api_keyword",t)},expression:"query.api_keyword"}}),a("el-input",{staticClass:"filter-item",staticStyle:{width:"155px"},attrs:{placeholder:"请求IP/地区/ISP",clearable:""},model:{value:e.query.request_keyword,callback:function(t){e.$set(e.query,"request_keyword",t)},expression:"query.request_keyword"}}),a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"240px"},attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.query.create_time,callback:function(t){e.$set(e.query,"create_time",t)},expression:"query.create_time"}}),a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("查询")]),a("el-button",{staticClass:"filter-item",on:{click:function(t){return e.refresh()}}},[e._v("刷新")])],1),a("el-col",{staticStyle:{"text-align":"right"},attrs:{xs:24,sm:2}},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["admin/MemberLog/stat"],expression:"['admin/MemberLog/stat']"}],staticClass:"filter-item",attrs:{type:"primary",title:"日志统计"},on:{click:e.stat}},[e._v("统计")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.data,height:e.height,border:""},on:{"sort-change":e.sort}},[a("el-table-column",{attrs:{prop:"member_log_id",label:"日志ID","min-width":"100",sortable:"custom",fixed:"left"}}),a("el-table-column",{attrs:{prop:"username",label:"账号","min-width":"110","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"api_url",label:"接口链接","min-width":"240","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"api_name",label:"接口名称","min-width":"130","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"request_method",label:"请求方式 ","min-width":"110"}}),a("el-table-column",{attrs:{prop:"request_ip",label:"请求IP","min-width":"130"}}),a("el-table-column",{attrs:{prop:"request_region",label:"请求地区","min-width":"150","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"request_isp",label:"请求ISP","min-width":"110"}}),a("el-table-column",{attrs:{prop:"response_code",label:"返回码","min-width":"80"}}),a("el-table-column",{attrs:{prop:"response_msg",label:"返回描述","min-width":"130","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"create_time",label:"请求时间","min-width":"160",sortable:"custom"}}),a("el-table-column",{attrs:{label:"操作","min-width":"145",align:"right",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.info(i)}}},[e._v("详情")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.dele(i)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.count>0,expression:"count > 0"}],attrs:{total:e.count,page:e.query.page,limit:e.query.limit},on:{"update:page":function(t){return e.$set(e.query,"page",t)},"update:limit":function(t){return e.$set(e.query,"limit",t)},pagination:e.list}}),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialog,top:"1vh",width:"50%","before-close":e.cancel},on:{"update:visible":function(t){e.dialog=t}}},[a("el-form",{ref:"ref",staticClass:"dialog-body",style:{height:e.height+30+"px"},attrs:{rules:e.rules,model:e.model,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"会员ID",prop:"member_id"}},[a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:e.model.member_id,callback:function(t){e.$set(e.model,"member_id",t)},expression:"model.member_id"}})],1),a("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:4}},[e._v("会员昵称")]),a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:e.model.nickname,callback:function(t){e.$set(e.model,"nickname",t)},expression:"model.nickname"}})],1)],1),a("el-form-item",{attrs:{label:"账号",prop:"username"}},[a("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),a("el-form-item",{attrs:{label:"接口ID",prop:"api_id"}},[a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:e.model.api_id,callback:function(t){e.$set(e.model,"api_id",t)},expression:"model.api_id"}})],1),a("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:4}},[e._v("接口名称")]),a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:e.model.api_name,callback:function(t){e.$set(e.model,"api_name",t)},expression:"model.api_name"}})],1)],1),a("el-form-item",{attrs:{label:"接口链接",prop:"api_url"}},[a("el-input",{model:{value:e.model.api_url,callback:function(t){e.$set(e.model,"api_url",t)},expression:"model.api_url"}})],1),a("el-form-item",{attrs:{label:"请求方式",prop:"request_method"}},[a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:e.model.request_method,callback:function(t){e.$set(e.model,"request_method",t)},expression:"model.request_method"}})],1),a("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:4}},[e._v("请求IP")]),a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:e.model.request_ip,callback:function(t){e.$set(e.model,"request_ip",t)},expression:"model.request_ip"}})],1)],1),a("el-form-item",{attrs:{label:"请求地区",prop:"request_region"}},[a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:e.model.request_region,callback:function(t){e.$set(e.model,"request_region",t)},expression:"model.request_region"}})],1),a("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:4}},[e._v("请求ISP")]),a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:e.model.request_isp,callback:function(t){e.$set(e.model,"request_isp",t)},expression:"model.request_isp"}})],1)],1),a("el-form-item",{attrs:{label:"请求时间",prop:"create_time"}},[a("el-input",{model:{value:e.model.create_time,callback:function(t){e.$set(e.model,"create_time",t)},expression:"model.create_time"}})],1),a("el-form-item",{attrs:{label:"请求参数",prop:"request_param"}},[a("pre",[e._v(e._s(e.model.request_param))])]),a("el-form-item",{attrs:{label:"返回码",prop:"response_code"}},[a("el-input",{model:{value:e.model.response_code,callback:function(t){e.$set(e.model,"response_code",t)},expression:"model.response_code"}})],1),a("el-form-item",{attrs:{label:"返回描述",prop:"response_msg"}},[a("el-input",{model:{value:e.model.response_msg,callback:function(t){e.$set(e.model,"response_msg",t)},expression:"model.response_msg"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确定")])],1)],1)],1)},l=[],o=a("98b1"),n=a("333d"),r=a("4381"),s=a("ee6a"),u={name:"MemberLog",components:{Pagination:n["a"]},directives:{permission:r["a"]},data:function(){return{height:680,loading:!1,data:[],count:0,query:{page:1,limit:13},dialog:!1,dialogTitle:"",model:{},rules:{}}},created:function(){this.height=Object(o["a"])(),this.list()},methods:{list:function(){var e=this;this.loading=!0,Object(s["c"])(this.query).then((function(t){e.data=t.data.list,e.count=t.data.count,e.loading=!1})).catch((function(){e.loading=!1}))},info:function(e){var t=this;this.loading=!0,this.dialog=!0,this.dialogTitle="会员日志详情："+e.member_log_id,Object(s["b"])({member_log_id:e.member_log_id}).then((function(e){t.reset(e.data),t.loading=!1})).catch((function(){t.loading=!1}))},dele:function(e){var t=this;this.$confirm('确定要删除会员日志 <span style="color:red">'+e.member_log_id+" </span>吗？","删除会员日志："+e.member_log_id,{type:"warning",dangerouslyUseHTMLString:!0}).then((function(){t.loading=!0,Object(s["a"])({member_log_id:e.member_log_id}).then((function(e){t.list(),t.reset(),t.$message.success(e.msg)})).catch((function(){t.loading=!1}))})).catch((function(){}))},cancel:function(){this.dialog=!1,this.reset()},submit:function(){this.dialog=!1,this.reset()},reset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.model=e},search:function(){this.query.page=1,this.list()},refresh:function(){this.query=this.$options.data().query,this.list()},sort:function(e){this.query.sort_field=e.prop,this.query.sort_type="","ascending"===e.order&&(this.query.sort_type="asc",this.list()),"descending"===e.order&&(this.query.sort_type="desc",this.list())},stat:function(){this.$router.push("/members/member-log-stat")}}},c=u,d=a("5d22"),m=Object(d["a"])(c,i,l,!1,null,null,null);t["default"]=m.exports},4381:function(e,t,a){"use strict";a("4318"),a("2e4f");var i=a("4360");function l(e,t){var a=t.value,l=i["a"].getters&&i["a"].getters.roles;if(!(a&&a instanceof Array))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");if(a.length>0){var o=a,n=l.some((function(e){return o.includes(e)}));n||e.parentNode&&e.parentNode.removeChild(e)}}var o={inserted:function(e,t){l(e,t)},update:function(e,t){l(e,t)}},n=function(e){e.directive("permission",o)};window.Vue&&(window["permission"]=o,Vue.use(n)),o.install=n;t["a"]=o},"98b1":function(e,t,a){"use strict";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,t=880,a=document.documentElement.clientHeight||document.body.clientHeight;return a?a-e:t-e}a.d(t,"a",(function(){return i}))},ee6a:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return r}));var i=a("b775");function l(e){return Object(i["a"])({url:"/admin/MemberLog/list",method:"get",params:e})}function o(e){return Object(i["a"])({url:"/admin/MemberLog/info",method:"get",params:e})}function n(e){return Object(i["a"])({url:"/admin/MemberLog/dele",method:"post",data:e})}function r(e){return Object(i["a"])({url:"/admin/MemberLog/stat",method:"post",data:e})}}}]);