function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{J4zT:function(e,t,n){"use strict";n.r(t);var c=n("3Pt+"),r=n("M0ag"),a=n("tyNb"),i=n("ey9i"),o=n("H+bZ"),l=function e(){_classCallCheck(this,e)},s=function e(){_classCallCheck(this,e)},u=n("ntpF"),d=n("fXoL"),b=n("1kSV"),p=n("sYmb"),h=n("5eHb"),m=n("lDzL"),f=n("ZOsW"),v=n("oZhZ"),R=["table"],g=["content"];function w(e,t){if(1&e){var n=d.ac();d.Rc(0,"\n                "),d.Zb(1,"i",22),d.lc("click",(function(e){d.Ic(n);var c=t.row;return d.pc().delete(c)})),d.qc(2,"translate"),d.Yb(),d.Rc(3,"\n              ")}2&e&&(d.Fb(1),d.wc("title",d.rc(2,1,"group.create.delete.button")))}function y(e,t){1&e&&d.Rc(0),2&e&&d.Tc("\n                ",t.row._GroupId,"\n              ")}function k(e,t){if(1&e){var n=d.ac();d.Rc(0,"\n                "),d.Zb(1,"input",23),d.lc("change",(function(e){d.Ic(n);var c=t.row;return d.pc().updateValue(e,c._GroupId)})),d.Yb(),d.Rc(2,"\n              ")}if(2&e){var c=t.row;d.Fb(1),d.vc("value",c.GroupName)}}function Z(e,t){if(1&e&&(d.Rc(0,"\n                    "),d.Zb(1,"span",26),d.Rc(2,"\n                      "),d.Zb(3,"b"),d.Rc(4,"Widget"),d.Yb(),d.Rc(5),d.Zb(6,"b"),d.Rc(7,"IEEE"),d.Yb(),d.Rc(8),d.Zb(9,"b"),d.Rc(10,"Ep"),d.Yb(),d.Rc(11),d.Zb(12,"b"),d.Rc(13,"Id"),d.Yb(),d.Rc(14),d.Zb(15,"b"),d.Rc(16),d.Yb(),d.Rc(17,"\n                    "),d.Yb(),d.Rc(18,"\n                  ")),2&e){var n=t.item,c=t.searchTerm;d.Fb(1),d.vc("ngOptionHighlight",c),d.Fb(4),d.Tc(" : ",n.Name," - "),d.Fb(3),d.Tc(" : ",n.IEEE," - "),d.Fb(3),d.Tc(" : ",n.Ep," -\n                      "),d.Fb(3),d.Tc(" : ",n._ID," -\n                      "),d.Fb(2),d.Sc(n.ZDeviceName)}}function _(e,t){if(1&e){var n=d.ac();d.Rc(0,"\n                "),d.Zb(1,"ng-select",24),d.lc("ngModelChange",(function(e){return d.Ic(n),t.row.devicesSelected=e}))("change",(function(e){return d.Ic(n),d.pc().isFormValid()})),d.Rc(2,"\n                  "),d.Pc(3,Z,19,6,"ng-template",25),d.Rc(4,"\n                "),d.Yb(),d.Rc(5,"\n              ")}if(2&e){var c=t.row,r=d.pc();d.Fb(1),d.vc("items",r.devices)("multiple",!0)("closeOnSelect",!1)("searchable",!0)("ngModel",c.devicesSelected)}}function I(e,t){if(1&e){var n=d.ac();d.Rc(0,"\n                "),d.Zb(1,"div",27),d.Rc(2,"\n                  "),d.Zb(3,"input",28),d.lc("click",(function(e){d.Ic(n);var c=t.row;return d.pc().updateCoordinator(e,c)})),d.Yb(),d.Rc(4,"\n                "),d.Yb(),d.Rc(5,"\n              ")}if(2&e){var c=t.row;d.Fb(3),d.vc("checked",c.coordinatorInside)}}function Y(e,t){1&e&&(d.Rc(0,"\n  "),d.Zb(1,"div",29),d.Rc(2,"\n    "),d.Ub(3,"h4",30),d.Rc(4,"\n    "),d.Zb(5,"button",31),d.lc("click",(function(e){return t.$implicit.dismiss("Cross click")})),d.Rc(6,"\n      "),d.Zb(7,"span",32),d.Rc(8,"\xd7"),d.Yb(),d.Rc(9,"\n    "),d.Yb(),d.Rc(10,"\n  "),d.Yb(),d.Rc(11,"\n  "),d.Ub(12,"div",33),d.Rc(13,"\n  "),d.Zb(14,"div",34),d.Rc(15,"\n    "),d.Zb(16,"button",35),d.lc("click",(function(e){return t.$implicit.dismiss("cancel")})),d.Yb(),d.Rc(17,"\n  "),d.Yb(),d.Rc(18,"\n"))}var C,E,N=new i.c("GroupComponent"),F=[{path:"",component:(C=function(){function e(t,n,c,r,a,i){_classCallCheck(this,e),this.modalService=t,this.apiService=n,this.formBuilder=c,this.translate=r,this.toastr=a,this.headerService=i,this.rows=[],this.rowsTemp=[],this.temp=[],this.hasEditing=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.apiService.getZGroupDevicesAvalaible().subscribe((function(t){var n=[];t&&t.length>0&&(t.forEach((function(e){e.WidgetList.forEach((function(t){if("0000"!==e._NwkId){var c=new s;c.Ep=t.Ep,c.IEEE=t.IEEE,c.Name=t.Name,c.ZDeviceName=t.ZDeviceName,c._ID=t._ID,c._NwkId=e._NwkId,n.push(c)}}))})),e.devices=[].concat(n)),e.apiService.getZGroups().subscribe((function(t){t&&t.length>0&&(t.forEach((function(t){var n=[];t.coordinatorInside=!1,t.Devices.forEach((function(c){if("0000"===c._NwkId)t.coordinatorInside=!0;else{var r=e.devices.find((function(e){return e._NwkId===c._NwkId&&e.Ep===c.Ep}));null!=r&&n.push(r)}})),t.devicesSelected=n})),e.rows=_toConsumableArray(t),e.temp=_toConsumableArray(t))}))}))}},{key:"updateValue",value:function(e,t){this.hasEditing=!0,this.rows.find((function(e){return e._GroupId===t})).GroupName=e.target.value}},{key:"updateFilter",value:function(e){var t=e.target.value.toLowerCase(),n=this.temp.filter((function(e){var n=!1;return e._GroupId&&(n=-1!==e._GroupId.toLowerCase().indexOf(t)),!n&&e.GroupName&&(n=-1!==e.GroupName.toLowerCase().indexOf(t)),n||!t}));this.rows=n,this.table.offset=0}},{key:"updateDevices",value:function(){var e=this;this.rows.forEach((function(e){e.coordinatorInside&&(e.devicesSelected||(e.devicesSelected=[]),e.devicesSelected.push({Ep:"01",_NwkId:"0000"}))})),this.isFormValid&&this.apiService.putZGroups(this.rows).subscribe((function(t){N.debug(e.rows),e.hasEditing=!1,e.toastr.success(e.translate.instant("api.global.succes.update.title")),e.apiService.getRestartNeeded().subscribe((function(t){t.RestartNeeded&&(e.headerService.setRestart(!0),e.open(e.content))}))}))}},{key:"delete",value:function(e){var t=this.rows.indexOf(e,0);t>-1&&(this.rows.splice(t,1),this.rows=_toConsumableArray(this.rows),this.temp=_toConsumableArray(this.rows))}},{key:"add",value:function(){var e=new l;e.GroupName="",e.coordinatorInside=!1,this.rows.push(e),this.rows=_toConsumableArray(this.rows),this.temp=_toConsumableArray(this.rows)}},{key:"updateCoordinator",value:function(e,t){t.coordinatorInside=e.currentTarget.checked}},{key:"open",value:function(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then((function(e){}),(function(e){}))}},{key:"isFormValid",value:function(){var e=!0;return this.rows.forEach((function(t){null!==t.GroupName&&""!==t.GroupName&&(t.coordinatorInside||void 0!==t.devicesSelected&&0!==t.devicesSelected.length)||(e=!1)})),e||this.hasEditing}}]),e}(),C.\u0275fac=function(e){return new(e||C)(d.Tb(b.e),d.Tb(o.a),d.Tb(c.e),d.Tb(p.d),d.Tb(h.b),d.Tb(u.a))},C.\u0275cmp=d.Nb({type:C,selectors:[["app-group"]],viewQuery:function(e,t){var n;1&e&&(d.Xc(R,!0),d.Xc(g,!0)),2&e&&(d.Ec(n=d.mc())&&(t.table=n.first),d.Ec(n=d.mc())&&(t.content=n.first))},decls:74,vars:30,consts:[[1,"row"],[1,"col-sm-11"],[1,"card"],["translate","group.create.header",1,"card-header"],[1,"card-body"],["translate","group.create.subtitle",1,"card-title"],[1,"card-text"],[1,"col-sm"],["type","text",3,"placeholder","keyup"],[1,"col-sm-2"],["translate","group.create.add.button",1,"w-100","btn","btn-primary",3,"click"],[1,"bootstrap",3,"rows","columnMode","headerHeight","summaryRow","summaryPosition","footerHeight","limit","rowHeight"],["table",""],[3,"maxWidth"],["ngx-datatable-cell-template",""],["prop","_GroupId",3,"maxWidth","name"],["prop","GroupName",3,"maxWidth","name"],[3,"name","sortable"],[3,"maxWidth","name","sortable"],[1,"col-sm-1"],["translate","group.create.validate.button",1,"w-100","btn","btn-primary",3,"disabled","click"],["content",""],[1,"fa","fa-trash",3,"title","click"],["autofocus","","type","text",3,"value","change"],["bindLabel","Name","placeholder","Choose device","appendTo","body",3,"items","multiple","closeOnSelect","searchable","ngModel","ngModelChange","change"],["ng-option-tmp",""],[3,"ngOptionHighlight"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"checked","click"],[1,"modal-header"],["id","modal-basic-title","translate","group.reloadplugin.alert.title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["translate","group.reloadplugin.alert.subject",1,"modal-body"],[1,"modal-footer"],["type","button","translate","group.reloadplugin.alert.cancel",1,"btn","btn-outline-dark",3,"click"]],template:function(e,t){1&e&&(d.Zb(0,"div",0),d.Rc(1,"\n  "),d.Zb(2,"div",1),d.Rc(3,"\n    "),d.Zb(4,"div",2),d.Rc(5,"\n      "),d.Ub(6,"div",3),d.Rc(7,"\n      "),d.Zb(8,"div",4),d.Rc(9,"\n        "),d.Ub(10,"h5",5),d.Rc(11,"\n        "),d.Zb(12,"div",6),d.Rc(13,"\n          "),d.Zb(14,"div",0),d.Rc(15,"\n            "),d.Zb(16,"div",7),d.Rc(17,"\n              "),d.Zb(18,"input",8),d.lc("keyup",(function(e){return t.updateFilter(e)})),d.qc(19,"translate"),d.Yb(),d.Rc(20,"\n            "),d.Yb(),d.Rc(21,"\n            "),d.Zb(22,"div",9),d.Rc(23,"\n              "),d.Zb(24,"button",10),d.lc("click",(function(e){return t.add()})),d.Yb(),d.Rc(25,"\n            "),d.Yb(),d.Rc(26,"\n          "),d.Yb(),d.Rc(27,"\n          "),d.Zb(28,"ngx-datatable",11,12),d.Rc(30,"\n            "),d.Zb(31,"ngx-datatable-column",13),d.Rc(32,"\n              "),d.Pc(33,w,4,3,"ng-template",14),d.Rc(34,"\n            "),d.Yb(),d.Rc(35,"\n\n            "),d.Zb(36,"ngx-datatable-column",15),d.qc(37,"translate"),d.Rc(38,"\n              "),d.Pc(39,y,1,1,"ng-template",14),d.Rc(40,"\n            "),d.Yb(),d.Rc(41,"\n            "),d.Zb(42,"ngx-datatable-column",16),d.qc(43,"translate"),d.Rc(44,"\n              "),d.Pc(45,k,3,1,"ng-template",14),d.Rc(46,"\n            "),d.Yb(),d.Rc(47,"\n            "),d.Zb(48,"ngx-datatable-column",17),d.qc(49,"translate"),d.Rc(50,"\n              "),d.Pc(51,_,6,5,"ng-template",14),d.Rc(52,"\n            "),d.Yb(),d.Rc(53,"\n            "),d.Zb(54,"ngx-datatable-column",18),d.qc(55,"translate"),d.Rc(56,"\n              "),d.Pc(57,I,6,1,"ng-template",14),d.Rc(58,"\n            "),d.Yb(),d.Rc(59,"\n          "),d.Yb(),d.Rc(60,"\n        "),d.Yb(),d.Rc(61,"\n      "),d.Yb(),d.Rc(62,"\n    "),d.Yb(),d.Rc(63,"\n  "),d.Yb(),d.Rc(64,"\n  "),d.Zb(65,"div",19),d.Rc(66,"\n    "),d.Zb(67,"button",20),d.lc("click",(function(e){return t.updateDevices()})),d.Yb(),d.Rc(68,"\n  "),d.Yb(),d.Rc(69,"\n"),d.Yb(),d.Rc(70,"\n\n"),d.Pc(71,Y,19,0,"ng-template",null,21,d.Qc),d.Rc(73,"\n")),2&e&&(d.Fb(18),d.wc("placeholder",d.rc(19,20,"group.create.placeholder")),d.Fb(10),d.vc("rows",t.rows)("columnMode","force")("headerHeight",40)("summaryRow",!0)("summaryPosition","bottom")("footerHeight",40)("limit",10)("rowHeight","auto"),d.Fb(3),d.vc("maxWidth",100),d.Fb(5),d.wc("name",d.rc(37,22,"group.create.shortid.column")),d.vc("maxWidth",100),d.Fb(6),d.wc("name",d.rc(43,24,"group.create.groupname.column")),d.vc("maxWidth",200),d.Fb(6),d.wc("name",d.rc(49,26,"group.create.devices.column")),d.vc("sortable",!1),d.Fb(6),d.wc("name",d.rc(55,28,"group.create.coordinator.column")),d.vc("maxWidth",150)("sortable",!1),d.Fb(13),d.vc("disabled",!t.isFormValid()))},directives:[p.a,m.c,m.b,m.a,f.a,c.n,c.p,f.c,v.d],pipes:[p.c],styles:[""]}),C),data:{title:Object(i.d)("group")}}],S=((E=function e(){_classCallCheck(this,e)}).\u0275mod=d.Rb({type:E}),E.\u0275inj=d.Qb({factory:function(e){return new(e||E)},providers:[],imports:[[a.i.forChild(F)],a.i]}),E);n.d(t,"GroupModule",(function(){return T}));var x,T=((x=function e(){_classCallCheck(this,e)}).\u0275mod=d.Rb({type:x}),x.\u0275inj=d.Qb({factory:function(e){return new(e||x)},imports:[[S,r.a,c.k]]}),x)}}]);