import './polyfills.server.mjs';
import{a as Fe}from"./chunk-TXYTUPDS.mjs";import{a as x}from"./chunk-OYHNAJ6L.mjs";import{A as me,B as le,F as ue,G as pe,H as de,I as ce,J as fe,K as he,L as ge,M as ve,N as Ce,O as _e,P as be,Q as Ee,R as T,S as Se,T as xe,U as we,V as ye,W as De,X as Ie,Y as Me,Z as Ue,a as J,b as F,e as K,f as X,k as Y,l as f,m as Z,n as ee,o as te,p as ie,q as re,r as oe,s as ae,x as ne,y as se}from"./chunk-OGFG3ZOU.mjs";import"./chunk-UTEJNEE6.mjs";import{a as Q,q as j}from"./chunk-DHBMMFJW.mjs";import{A as C,Ab as o,Bb as a,Cb as p,Db as _,Eb as b,Gb as q,Jb as E,Lb as S,Mc as G,Nc as z,Pb as B,Pc as W,Qb as L,Rb as P,S as v,Tb as n,Ub as w,Vb as g,Xa as m,Y as A,Ya as h,Yb as H,Z as I,ba as N,f as D,ga as M,ha as U,m as V,pa as $,pb as c,qa as k,rb as u}from"./chunk-LE6A4EOQ.mjs";import"./chunk-NDYDZJSS.mjs";var O=(()=>{let t=class t{constructor(i,r){this.snackBar=i,this.http=r}listarUsuarios(){return this.http.get(`${x.API_URL}/usuarios`,{headers:{requireToken:"true"}}).pipe(C(i=>this.handlerError(i)))}listarRoles(){return this.http.get(`${x.API_URL}/general/roles`,{headers:{requireToken:"true"}}).pipe(C(i=>this.handlerError(i)))}insertarUsuario(i){return this.http.post(`${x.API_URL}/usuarios`,i,{headers:{requireToken:"true"}}).pipe(C(r=>this.handlerError(r)))}actualizarUsuario(i){return this.http.put(`${x.API_URL}/usuarios`,i,{headers:{requireToken:"true"}}).pipe(C(r=>this.handlerError(r)))}eliminarUsuario(i){return this.http.delete(`${x.API_URL}/usuarios/${i}`,{headers:{requireToken:"true"}}).pipe(C(r=>this.handlerError(r)))}handlerError(i){console.log(i);var r="Ocurri\xF3 un error";return i.error&&(i.error.message?r=i.error.message:r="Ocurri\xF3 un error"),this.snackBar.open(r,"",{duration:3e3}),V(()=>new Error(r))}};t.\u0275fac=function(r){return new(r||t)(N(K),N(Q))},t.\u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ve(e,t){if(e&1&&(o(0,"mat-option",14),n(1),a()),e&2){let l=t.$implicit;u("value",l.cveRol),m(),g(" ",l.descripcion+" - "+l.clave," ")}}function Ae(e,t){if(e&1&&(o(0,"mat-form-field",2)(1,"mat-label"),n(2,"Contrase\xF1a"),a(),p(3,"input",15),o(4,"mat-error"),n(5),a()()),e&2){let l=S();m(5),g(" ",l.baseForm.getErrorMessage(l.userForm.get("password"))," ")}}function qe(e,t){if(e&1&&(o(0,"mat-form-field",2)(1,"mat-label"),n(2,"Repetir Contrase\xF1a"),a(),p(3,"input",16),o(4,"mat-error"),n(5),a()()),e&2){let l=S();m(5),g(" ",l.baseForm.getErrorMessage(l.userForm.get("confirmPassword"))," ")}}var y=function(e){return e.EDIT="edit",e.NEW="new",e}(y||{}),Re=(()=>{let t=class t{constructor(i,r,s,d,$e){this.data=i,this.dialogRef=r,this.fb=s,this.baseForm=d,this.usuarioSvc=$e,this.destroy$=new D,this.titleButton="Guardar",this.actionTODO=y.NEW,this.roles=[],this.userForm=this.fb.group({cveUsuario:[""],nombre:["",[f.required,f.minLength(3)]],apellidos:["",[f.required,f.minLength(3)]],username:["",[f.required,f.minLength(3)]],cveRol:["",[f.required]],password:["",[f.required]],confirmPassword:["",[f.required]]})}ngOnInit(){this.usuarioSvc.listarRoles().pipe(v(this.destroy$)).subscribe(i=>{this.roles=i,this.pathData()})}pathData(){this.data.user.cveUsuario?(this.userForm.patchValue({cveUsuario:this.data?.user.cveUsuario,nombre:this.data?.user.nombre,apellidos:this.data?.user.apellidos,username:this.data?.user.username,cveRol:this.data?.user.cveRol}),this.userForm.get("username")?.disable(),this.userForm.get("password")?.setValidators(null),this.userForm.get("password")?.setErrors(null),this.userForm.get("confirmPassword")?.setValidators(null),this.userForm.get("confirmPassword")?.setErrors(null),this.userForm.updateValueAndValidity(),this.titleButton="Actualizar",this.actionTODO=y.EDIT):(this.titleButton="Guardar",this.actionTODO=y.NEW)}onSave(){if(!this.userForm.invalid){var i=this.userForm.getRawValue();if(this.actionTODO==y.NEW){var r={nombre:i.nombre,apellidos:i.apellidos,username:i.username,password:i.password,cveRol:parseInt(i.cveRol)};this.usuarioSvc.insertarUsuario(r).pipe(v(this.destroy$)).subscribe(d=>{this.dialogRef.close(d)})}else{var s={cveUsuario:parseInt(i.cveUsuario),nombre:i.nombre,apellidos:i.apellidos,cveRol:parseInt(i.cveRol)};this.usuarioSvc.actualizarUsuario(s).pipe(v(this.destroy$)).subscribe(d=>{this.dialogRef.close(d)})}}}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}};t.\u0275fac=function(r){return new(r||t)(h(xe),h(Se),h(oe),h(Fe),h(O))},t.\u0275cmp=M({type:t,selectors:[["app-usuario-dialog"]],decls:39,vars:9,consts:[["mat-dialog-title",""],[3,"submit","formGroup"],["appearance","outline",1,"full-width"],["type","text","formControlName","nombre","matInput",""],["type","text","formControlName","apellidos","matInput",""],["type","text","formControlName","username","matInput",""],["formControlName","cveRol"],[3,"value",4,"ngFor","ngForOf"],["class","full-width","appearance","outline",4,"ngIf"],["align","center"],["type","button","mat-flat-button","","color","warn",1,"me-2"],["type","submit","mat-flat-button","","color","primary"],["align","end"],["mat-button","","mat-dialog-close",""],[3,"value"],["type","password","formControlName","password","matInput",""],["type","password","formControlName","confirmPassword","matInput",""]],template:function(r,s){r&1&&(o(0,"h1",0),n(1,"Usuario"),a(),o(2,"mat-dialog-content")(3,"form",1),E("submit",function(){return s.onSave()}),o(4,"mat-form-field",2)(5,"mat-label"),n(6,"Nombre"),a(),p(7,"input",3),o(8,"mat-error"),n(9),a()(),o(10,"mat-form-field",2)(11,"mat-label"),n(12,"Apellidos"),a(),p(13,"input",4),o(14,"mat-error"),n(15),a()(),o(16,"mat-form-field",2)(17,"mat-label"),n(18,"Nombre de Usuario"),a(),p(19,"input",5),o(20,"mat-error"),n(21),a()(),o(22,"mat-form-field",2)(23,"mat-label"),n(24,"Rol(es)"),a(),o(25,"mat-select",6),c(26,Ve,2,2,"mat-option",7),a(),o(27,"mat-error"),n(28),a()(),c(29,Ae,6,1,"mat-form-field",8)(30,qe,6,1,"mat-form-field",8),o(31,"div",9)(32,"button",10),n(33," Limpiar "),a(),o(34,"button",11),n(35),a()()()(),o(36,"mat-dialog-actions",12)(37,"button",13),n(38," Cerrar "),a()()),r&2&&(m(3),u("formGroup",s.userForm),m(6),g(" ",s.baseForm.getErrorMessage(s.userForm.get("nombre"))," "),m(6),g(" ",s.baseForm.getErrorMessage(s.userForm.get("apellidos"))," "),m(6),g(" ",s.baseForm.getErrorMessage(s.userForm.get("username"))," "),m(5),u("ngForOf",s.roles),m(2),g(" ",s.baseForm.getErrorMessage(s.userForm.get("cveRol"))," "),m(),u("ngIf",s.actionTODO=="new"),m(),u("ngIf",s.actionTODO=="new"),m(5),g(" ",s.titleButton," "))},dependencies:[G,z,te,Y,Z,ee,ie,re,F,le,me,ne,se,ye,De,Me,Ie,Ee,J]});let e=t;return e})();var Be=()=>[5,10,20,100];function Le(e,t){e&1&&(o(0,"th",16),n(1," Nombre "),a())}function Pe(e,t){if(e&1&&(o(0,"td",17),n(1),a()),e&2){let l=t.$implicit;m(),w(l.nombre)}}function He(e,t){e&1&&(o(0,"th",16),n(1," Apellidos "),a())}function Ge(e,t){if(e&1&&(o(0,"td",17),n(1),a()),e&2){let l=t.$implicit;m(),w(l.apellidos)}}function ze(e,t){e&1&&(o(0,"th",16),n(1," Nombre de Usuario "),a())}function We(e,t){if(e&1&&(o(0,"td",17),n(1),a()),e&2){let l=t.$implicit;m(),w(l.username)}}function Qe(e,t){e&1&&(o(0,"th",16),n(1," Rol(es) "),a())}function Je(e,t){if(e&1&&(o(0,"td",17),n(1),a()),e&2){let l=t.$implicit;m(),w(l.rol.descripcion)}}function Ke(e,t){e&1&&p(0,"th",16)}function Xe(e,t){if(e&1){let l=q();o(0,"td",18)(1,"button",19),E("click",function(){let r=$(l).$implicit,s=S();return k(s.onOpenModal(r))}),o(2,"mat-icon"),n(3,"edit"),a(),n(4," Editar "),a(),o(5,"button",20),E("click",function(){let r=$(l).$implicit,s=S();return k(s.onDelete(r.cveUsuario))}),o(6,"mat-icon"),n(7,"delete"),a(),n(8," Eliminar "),a()()}}function Ye(e,t){e&1&&p(0,"tr",21)}function Ze(e,t){e&1&&p(0,"tr",22)}var Oe=(()=>{let t=class t{constructor(i,r){this.dialog=i,this.usuarioSvc=r,this.destroy$=new D,this.dataSource=new be,this.displayedColumns=["nombre","apellidos","username","rol","acciones"]}ngOnInit(){this.listar()}listar(){this.usuarioSvc.listarUsuarios().pipe(v(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngAfterViewInit(){this.dataSource.paginator=this.paginator}onOpenModal(i={}){this.dialog.open(Re,{maxWidth:"100%",width:"80%",data:{user:i}}).afterClosed().pipe(v(this.destroy$)).subscribe(s=>{s&&this.listar()})}onDelete(i){this.usuarioSvc.eliminarUsuario(i).pipe(v(this.destroy$)).subscribe(r=>{this.listar()})}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}};t.\u0275fac=function(r){return new(r||t)(h(we),h(O))},t.\u0275cmp=M({type:t,selectors:[["app-usuarios"]],viewQuery:function(r,s){if(r&1&&B(T,5),r&2){let d;L(d=P())&&(s.paginator=d.first)}},decls:27,vars:5,consts:[[1,"m-3"],["align","right"],["mat-flat-button","","color","primary",1,"m-2",3,"click"],[1,"table-content","mat-elevation-z8","m-4"],["mat-table","",3,"dataSource"],["matColumnDef","nombre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","apellidos"],["matColumnDef","username"],["matColumnDef","rol"],["matColumnDef","acciones"],["mat-cell","","class","text-center",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"text-center"],["mat-flat-button","","color","accent",1,"me-2",3,"click"],["mat-flat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(r,s){r&1&&(o(0,"h3",0),n(1,"Usuarios"),a(),o(2,"div",1)(3,"button",2),E("click",function(){return s.onOpenModal()}),o(4,"mat-icon"),n(5,"add"),a(),n(6," Agregar "),a()(),o(7,"div",3)(8,"table",4),_(9,5),c(10,Le,2,0,"th",6)(11,Pe,2,1,"td",7),b(),_(12,8),c(13,He,2,0,"th",6)(14,Ge,2,1,"td",7),b(),_(15,9),c(16,ze,2,0,"th",6)(17,We,2,1,"td",7),b(),_(18,10),c(19,Qe,2,0,"th",6)(20,Je,2,1,"td",7),b(),_(21,11),c(22,Ke,1,0,"th",6)(23,Xe,9,0,"td",12),b(),c(24,Ye,1,0,"tr",13)(25,Ze,1,0,"tr",14),a(),p(26,"mat-paginator",15),a()),r&2&&(m(8),u("dataSource",s.dataSource),m(16),u("matHeaderRowDef",s.displayedColumns),m(),u("matRowDefColumns",s.displayedColumns),m(),u("pageSizeOptions",H(4,Be)))},dependencies:[F,X,ue,de,ge,ce,pe,ve,fe,he,Ce,_e,T]});let e=t;return e})();var et=[{path:"",component:Oe}],Ne=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=U({type:t}),t.\u0275inj=I({imports:[j.forChild(et),j]});let e=t;return e})();var $t=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=U({type:t}),t.\u0275inj=I({imports:[W,Ne,ae,Ue]});let e=t;return e})();export{$t as UsuariosModule};
