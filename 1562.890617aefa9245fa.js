"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1562],{1562:(C,f,o)=>{o.r(f),o.d(f,{ProfilePageModule:()=>M});var d=o(177),m=o(4341),s=o(1075),p=o(9591),e=o(4438),h=o(6996),g=o(9579),n=o(4163),a=o(2305);let u=(()=>{var t;class l{constructor(){}ngOnInit(){}}return(t=l).\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-user-details"]],inputs:{text:"text",icon:"icon"},decls:6,vars:2,consts:[[1,"w-full"],[1,"mt-[1%]","p-[2%]","w-full","flex","flex-wrap"],["slot","start",1,"text-health_green","my-auto","w-8","h-8",3,"name"],[1,"my-auto","mx-[2%]","text-health_blue-1"],[1,"font-semibold","text-base"]],template:function(r,c){1&r&&(e.j41(0,"ion-item",0)(1,"div",1),e.nrm(2,"ion-icon",2),e.j41(3,"ion-text",3)(4,"p",4),e.EFF(5),e.k0s()()()()),2&r&&(e.R7$(2),e.FS9("name",c.icon),e.R7$(3),e.JRh(c.text))},dependencies:[s.iq,s.uz,s.IO]}),l})();const P=[{path:"",component:(()=>{var t;class l{constructor(r,c,D){this.userData=r,this.utils=c,this.firestore=D}ngOnInit(){this.ref=localStorage.getItem("hUserId"),this.user=this.userData.getUser()}}return(t=l).\u0275fac=function(r){return new(r||t)(e.rXU(h.J),e.rXU(g.T),e.rXU(n.B))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-profile"]],decls:12,vars:6,consts:[[1,"ion-no-border","border-b","border-health_blue-2",3,"translucent"],[3,"fullscreen"],[1,"w-full","p-2"],[1,"shadow-md","p-4","bg-health_blue-2","border","rounded","flex"],[3,"src"],[1,"mt-[2%]"],["icon","person-outline",3,"text"],["icon","mail-outline",3,"text"],["icon","call-outline",3,"text"],["text","Male","icon","male-female-outline"],["text","1996-March-08","icon","calendar-number-outline"]],template:function(r,c){1&r&&(e.j41(0,"ion-header",0),e.nrm(1,"app-toolbar"),e.k0s(),e.j41(2,"ion-content",1)(3,"div",2)(4,"div",3),e.nrm(5,"ion-img",4),e.k0s(),e.j41(6,"div",5),e.nrm(7,"app-user-details",6)(8,"app-user-details",7)(9,"app-user-details",8)(10,"app-user-details",9)(11,"app-user-details",10),e.k0s()()()),2&r&&(e.Y8G("translucent",!0),e.R7$(2),e.Y8G("fullscreen",!0),e.R7$(3),e.Y8G("src","/assets/img/department.png"),e.R7$(2),e.FS9("text",c.user.FullNames),e.R7$(),e.FS9("text",c.user.Email),e.R7$(),e.FS9("text",c.user.PhoneNumber))},dependencies:[s.W9,s.eU,s.KW,a.H,u]}),l})()}];let U=(()=>{var t;class l{}return(t=l).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[p.iI.forChild(P),p.iI]}),l})();var y=o(5553);let M=(()=>{var t;class l{}return(t=l).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.MD,m.YN,s.bv,U,y.h]}),l})()},9579:(C,f,o)=>{o.d(f,{T:()=>p});var d=o(467),m=o(4438),s=o(1075);let p=(()=>{var e;class h{constructor(n,a,u){this.loadingController=n,this.toastController=a,this.alertController=u}showSpinner(n="Loading...."){var a=this;return(0,d.A)(function*(){yield(yield a.loadingController.create({message:n,mode:"ios",spinner:"circular",backdropDismiss:!1,cssClass:"custom-class",duration:0})).present()})()}hideSpinner(){var n=this;return(0,d.A)(function*(){yield n.loadingController.dismiss()})()}showToast(n,a=2e3){var u=this;return(0,d.A)(function*(){yield(yield u.toastController.create({message:n,duration:a,position:"bottom"})).present()})()}showAlert(n,a,u="OK"){var v=this;return(0,d.A)(function*(){yield(yield v.alertController.create({header:n,mode:"ios",message:a,buttons:[u]})).present()})()}}return(e=h).\u0275fac=function(n){return new(n||e)(m.KVO(s.Xi),m.KVO(s.K_),m.KVO(s.hG))},e.\u0275prov=m.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),h})()}}]);