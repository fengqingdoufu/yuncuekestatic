(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a533119c"],{"15ff":function(e,t,n){},"51cc":function(e,t,n){"use strict";n("15ff")},7942:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-content-container"},[n("yi-title-bar",[n("template",{slot:"actions"},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.onOpenProductForm("add")}}},[e._v("新建产品")])],1)],2),n("div",{staticClass:"customer-body"},[n("yi-table",{ref:"erpTable",attrs:{columns:e.getColumns,data:e.tableData,config:{multiple:!1},loading:e.loadingStatus["query"]},scopedSlots:e._u([{key:"operation",fn:function(t){return[n("div",[n("span",{staticClass:"link",on:{click:function(n){return e.onOpenProductForm("edit",t.row)}}},[e._v("修改")]),n("span",{staticClass:"link",on:{click:function(n){return e.onSetProductStatus(t.row)}}},[e._v(" "+e._s(t.row.status&&1===t.row.status.code?"下架":"上架")+" ")])])]}},{key:"status",fn:function(t){return[n("span",[e._v(" "+e._s(t.data&&1===t.data.code?"上架":"下架"))])]}}])}),n("yi-table-footer",{attrs:{"current-page":e.pageNum,"on-page-size-change":e.onPageSizeChange,"on-page-change":e.onPageChange,"total-count":e.totalCount}})],1),n("AddForm",{ref:"addFormRef",on:{"on-change-success":e.loadList}})],1)},o=[],r=(n("96cf"),n("1da1")),i=n("c4c8"),s=n("9356"),u=n("92e5"),c={components:{AddForm:u["default"]},data:function(){return{list:null,listLoading:!0,tableData:[],totalCount:0,pageSize:20,pageNum:1,checkList:[],form:s["default"].form,visible:!1}},computed:{getColumns:function(){return s["default"].columns}},created:function(){this.loadList()},mounted:function(){},methods:{loadList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i["a"]({size:e.pageSize,num:e.pageNum});case 3:n=t.sent,a=n.data,o=void 0===a?{}:a,e.tableData=o.data,e.totalCount=o.count,t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},onSetProductStatus:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i["d"](e.id);case 3:a=n.sent,o=a.data,r=void 0===o?{}:o,t.$message.success("更改成功！"),t.loadList(),console.log(r),n.next=13;break;case 11:n.prev=11,n.t0=n["catch"](0);case 13:case"end":return n.stop()}}),n,null,[[0,11]])})))()},onOpenProductForm:function(e,t){this.$refs.addFormRef.onOpen(e,t)},handleSearch:function(){},clearFilter:function(){this.$refs.filterGroup.clear()},onFilterTop:function(e,t){console.log(e,t),this.loadList({})},onPageChange:function(e){console.log("页码改变 ==>",e),this.pageNum=e,this.loadList({})},onPageSizeChange:function(e){console.log("页数改变 ==>",e),this.pageSize=e,this.loadList({})}}},l=c,d=(n("51cc"),n("2877")),f=Object(d["a"])(l,a,o,!1,null,null,null);t["default"]=f.exports},"92e5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("yi-modal",{attrs:{"dialog-form-visible":e.visible,title:e.title},on:{"on-close-dialog":e.onClose}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingStatus["form"],expression:"loadingStatus['form']"}],staticClass:"form-container"},[e.visible?n("yi-form",{ref:"createForm",attrs:{fields:e.form,"default-value":e.defaultValue}}):e._e()],1),n("yi-form-operation",{attrs:{loading:e.loading,"cancel-text":"取 消","button-text":"确 定"},on:{"form-submit":e.onCreateSubmit,"form-reset":e.onClose}})],1)],1)},o=[],r=(n("caad"),n("d81d"),n("5530")),i=n("9356"),s=n("c4c8"),u={name:"Index",data:function(){return{defaultValue:{},visible:!1,form:i["default"].addForm,title:"新增",type:"add",loading:!1}},methods:{onCreateSubmit:function(){var e=this;this.$refs["createForm"].onAsyncSubmit().then((function(t){return console.log("新建表单参数 ==>",t),"add"===e.type?s["b"](t):s["c"](Object(r["a"])({id:e.defaultValue.id},t))})).then((function(t){console.log("结果输出",t),e.$message.success("操作成功！"),e.onClose(),e.$emit("on-change-success")}))},onClose:function(){this.visible=!1,this.defaultValue={}},onOpen:function(e,t){console.log(e,t),this.type=e,"add"===e?(this.title="新增",this.form=i["default"].addForm):(this.title="修改",this.defaultValue=t,this.form=i["default"].addForm.map((function(e){return["billingType","serviceObject"].includes(e.key)?Object(r["a"])(Object(r["a"])({},e),{},{readonly:!0}):e}))),this.visible=!0}}},c=u,l=n("2877"),d=Object(l["a"])(c,a,o,!1,null,"0c2137d0",null);t["default"]=d.exports},9356:function(e,t,n){"use strict";n.r(t),t["default"]={columns:[{prop:"id",label:"ID",width:150,align:"center"},{prop:"name",label:"产品名称"},{prop:"serviceObject",label:"服务对象",flatKey:"name"},{prop:"description",label:"产品描述"},{prop:"status",label:"状态",isCustom:!0,customizedName:"status"},{prop:"operation",label:"操作",isCustom:!0,customizedName:"operation"}],addForm:[{label:"产品名称",key:"name",rules:[{required:!0,message:"请输入产品",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"请输入汉字、数字、英文"}],hide:!1,readonly:!1,input:{placeholder:"请输入",type:"input"}},{label:"服务对象",key:"serviceObject",rules:[{required:!0,message:"请选择服务对象",trigger:"blur"}],hide:!1,readonly:!1,input:{type:"select",options:"serviceObject"}},{label:"计费方式",key:"billingType",rules:[{required:!0,message:"请选择服务对象",trigger:"blur"}],hide:!1,readonly:!1,input:{type:"select",options:"billingType"}},{label:"产品描述",key:"description",hide:!1,readonly:!1,input:{placeholder:"请输入",type:"input",subtype:"textarea"}}]}},c4c8:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s}));var a=n("c8cc");function o(e){return Object(a["a"])({url:"/product",method:"get",params:e,headers:{loadingTag:"query"}})}function r(e){return Object(a["a"])({url:"/product",method:"post",data:e,headers:{loadingTag:"form"}})}function i(e){return Object(a["a"])({url:"/product",method:"put",data:e})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])({url:"/product/".concat(e),method:"put",data:t,headers:{loadingTag:"query"}})}}}]);