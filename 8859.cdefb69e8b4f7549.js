"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8859],{8859:(f,u,e)=>{e.r(u),e.d(u,{MyAppointmentsPageModule:()=>P});var p=e(177),m=e(4341),o=e(1075),c=e(9591),t=e(4438),g=e(4163),v=e(9579),s=e(8473);function a(n,r){if(1&n&&(t.j41(0,"div"),t.nrm(1,"app-linear-card",7),t.nI1(2,"date"),t.k0s()),2&n){const l=r.$implicit,i=t.XpG();t.R7$(),t.FS9("header",l.hospital),t.FS9("subHeader",t.i5U(2,3,l.date.toDate()," EEE, dd - MMM -YYYY")),t.Y8G("image",i.image)}}const h=[{path:"",component:(()=>{var n;class r{constructor(i,y){this.firestore=i,this.utils=y,this.image="/assets/img/appoi.png"}ngOnInit(){this.uid=localStorage.getItem("hUserId"),this.utils.showSpinner("Fetching appointments"),this.firestore.readWhereFilter("Appointments","BookedBy",this.uid,"==").valueChanges().subscribe(i=>{this.Appointments=i,console.log(i),this.utils.hideSpinner()})}}return(n=r).\u0275fac=function(i){return new(i||n)(t.rXU(g.B),t.rXU(v.T))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-my-appointments"]],decls:13,vars:1,consts:[["color","primary"],["slot","start"],[1,"p-2"],[4,"ngFor","ngForOf"],["slot","fixed","vertical","bottom","horizontal","end"],["routerLink","appointments"],["name","add-circle-outline"],[3,"image","header","subHeader"]],template:function(i,y){1&i&&(t.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t.nrm(3,"ion-back-button"),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"My Appointments"),t.k0s()()(),t.j41(6,"ion-content"),t.nrm(7,"div",2),t.j41(8,"div",2),t.DNE(9,a,3,6,"div",3),t.k0s(),t.j41(10,"ion-fab",4)(11,"ion-fab-button",5),t.nrm(12,"ion-icon",6),t.k0s()()()),2&i&&(t.R7$(9),t.Y8G("ngForOf",y.Appointments))},dependencies:[p.Sq,o.QW,o.W9,o.Q8,o.YW,o.eU,o.iq,o.BC,o.ai,o.el,o.N7,c.Wk,s.f,p.vh]}),r})()}];let M=(()=>{var n;class r{}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[c.iI.forChild(h),c.iI]}),r})();var A=e(5553);let P=(()=>{var n;class r{}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[p.MD,m.YN,o.bv,M,A.h]}),r})()},9579:(f,u,e)=>{e.d(u,{T:()=>c});var p=e(467),m=e(4438),o=e(1075);let c=(()=>{var t;class g{constructor(s,a,d){this.loadingController=s,this.toastController=a,this.alertController=d}showSpinner(s="Loading...."){var a=this;return(0,p.A)(function*(){yield(yield a.loadingController.create({message:s,mode:"ios",spinner:"circular",backdropDismiss:!1,cssClass:"custom-class",duration:0})).present()})()}hideSpinner(){var s=this;return(0,p.A)(function*(){yield s.loadingController.dismiss()})()}showToast(s,a=2e3){var d=this;return(0,p.A)(function*(){yield(yield d.toastController.create({message:s,duration:a,position:"bottom"})).present()})()}showAlert(s,a,d="OK"){var h=this;return(0,p.A)(function*(){yield(yield h.alertController.create({header:s,mode:"ios",message:a,buttons:[d]})).present()})()}}return(t=g).\u0275fac=function(s){return new(s||t)(m.KVO(o.Xi),m.KVO(o.K_),m.KVO(o.hG))},t.\u0275prov=m.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),g})()}}]);