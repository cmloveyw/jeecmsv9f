webpackJsonp([118],{"4Yd1":function(t,a,n){a=t.exports=n("l95E")(!1),a.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"5Tmq":function(t,a,n){var e=n("4Yd1");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("8bSs")("4c1bdc1a",e,!0)},Kkve:function(t,a,n){"use strict";function e(t){n("5Tmq")}Object.defineProperty(a,"__esModule",{value:!0});var s=n("lcoF"),o=n("2sCs"),r=n.n(o),l=n("x1ym"),i={mixins:[s.a],data:function(){var t=l.a.required("此项必填"),a=l.a.number("只能输入数字");return{params:{queryUsername:"",https:""},rules:{password:[t],forgotPasswordSubject:[t],registerText:[t],errorTimes:[t,a],host:[t],errorInterval:[t,a],forgotPasswordText:[t],username:[t],registerSubject:[t],port:[l.a.numberLim("只能输入数字")]}}},methods:{getDataInfo:function(){var t=this,a=this.$api;r.a.all([r.a.post(a.configLoginGet)]).then(r.a.spread(function(a){t.dataInfo=a.body,t.$refs.form.resetFields(),t.loading=!1})).catch(function(a){t.loading=!1})},update:function(){this.updateDataInfo(this.$api.configLoginUpdate,this.dataInfo,"")}},created:function(){this.getDataInfo()}},c=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[n("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[n("el-form-item",{staticClass:"flex-50",attrs:{label:"登录错误次数",prop:"errorTimes"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:t.dataInfo.errorTimes,callback:function(a){t.$set(t.dataInfo,"errorTimes",a)},expression:"dataInfo.errorTimes"}}),t._v(" "),n("span",{staticClass:"gray"},[t._v("达到错误次数后显示验证码")])],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"登录错误时间",prop:"errorInterval"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:t.dataInfo.errorInterval,callback:function(a){t.$set(t.dataInfo,"errorInterval",a)},expression:"dataInfo.errorInterval"}}),t._v(" "),n("span",{staticClass:"gray"},[t._v("(分钟)。超过时间重计次数")])],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"邮件服务器",prop:"host"}},[n("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.host,callback:function(a){t.$set(t.dataInfo,"host",a)},expression:"dataInfo.host"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"邮件端口",prop:"port"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:t.dataInfo.port,callback:function(a){t.$set(t.dataInfo,"port",a)},expression:"dataInfo.port"}}),t._v(" "),n("span",{staticClass:"gray"},[t._v("留空则为默认端口")])],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"邮件用户名",prop:"username"}},[n("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.username,callback:function(a){t.$set(t.dataInfo,"username",a)},expression:"dataInfo.username"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"邮件密码",prop:"password"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:t.dataInfo.password,callback:function(a){t.$set(t.dataInfo,"password",a)},expression:"dataInfo.password"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"邮件编码",prop:"encoding"}},[n("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.encoding,callback:function(a){t.$set(t.dataInfo,"encoding",a)},expression:"dataInfo.encoding"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"发件人",prop:"personal"}},[n("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.personal,callback:function(a){t.$set(t.dataInfo,"personal",a)},expression:"dataInfo.personal"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-100",attrs:{label:"找回密码标题",prop:"forgotPasswordSubject"}},[n("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.forgotPasswordSubject,callback:function(a){t.$set(t.dataInfo,"forgotPasswordSubject",a)},expression:"dataInfo.forgotPasswordSubject"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-100",attrs:{label:"找回密码内容",prop:"forgotPasswordText"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"textarea",placeholder:"请输入内容",rows:"6"},model:{value:t.dataInfo.forgotPasswordText,callback:function(a){t.$set(t.dataInfo,"forgotPasswordText",a)},expression:"dataInfo.forgotPasswordText"}}),t._v(" "),n("span",{staticClass:"gray"},[t._v("用户ID：${Uid}，用户名：${Username}，重置KEY：${ResetKey}，重置密码：${ResetPwd}")])],1),t._v(" "),n("el-form-item",{staticClass:"flex-100",attrs:{label:"会员注册标题",prop:"registerSubject"}},[n("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.registerSubject,callback:function(a){t.$set(t.dataInfo,"registerSubject",a)},expression:"dataInfo.registerSubject"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-100",attrs:{label:"会员注册内容",prop:"registerText"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"textarea",placeholder:"请输入内容",rows:"4"},model:{value:t.dataInfo.registerText,callback:function(a){t.$set(t.dataInfo,"registerText",a)},expression:"dataInfo.registerText"}}),t._v(" "),n("span",{staticClass:"gray"},[t._v("用户名：${Username}，激活码：${ActivationCode}")])],1),t._v(" "),n("div",{staticClass:"form-footer"},[n("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/loginUpdate",expression:"'/globel/loginUpdate'"}],attrs:{type:"primary"},on:{click:function(a){t.update()}}},[t._v("修改")]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)},d=[],f={render:c,staticRenderFns:d},p=f,m=n("8AGX"),u=e,v=m(i,p,!1,u,null,null);a.default=v.exports}});