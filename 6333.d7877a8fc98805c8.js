"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6333],{6333:(W,g,t)=>{t.r(g),t.d(g,{SocialWorkersPageModule:()=>y});var u=t(177),d=t(4341),n=t(1075),m=t(9591),o=t(4438),h=t(1182),p=t(3235),s=t(9579),l=t(7297);function c(e,a){if(1&e&&(o.j41(0,"div",7),o.nrm(1,"app-docters-card",8),o.k0s()),2&e){const i=a.$implicit;o.R7$(),o.Y8G("names",i.FullNames)("designation",i.Specialty)("status",i.WorkStatus)}}const S=[{path:"",component:(()=>{var e;class a{constructor(r,f,C){this.Auth=r,this.firestore=f,this.utils=C}ngOnInit(){this.utils.showSpinner("Fetching Data"),this.firestore.collection("Users",r=>r.where("Type","==","Social Worker").where("Hospital","==","Polokwane Hospital")).valueChanges().subscribe(r=>{console.log(r),this.users=r,this.utils.hideSpinner()})}}return(e=a).\u0275fac=function(r){return new(r||e)(o.rXU(h.DS),o.rXU(p.Qe),o.rXU(s.T))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-social-workers"]],decls:10,vars:4,consts:[[1,"ion-no-border",3,"translucent"],["color","primary"],["slot","start"],[3,"fullscreen"],[1,"shadow-md","p-4","bg-health_blue-2","border","rounded","flex"],[3,"src"],["class","p-2",4,"ngFor","ngForOf"],[1,"p-2"],["image","/assets/img/docor1.jpg",3,"names","designation","status"]],template:function(r,f){1&r&&(o.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),o.nrm(3,"ion-back-button"),o.k0s(),o.j41(4,"ion-title"),o.EFF(5,"Social workers"),o.k0s()()(),o.j41(6,"ion-content",3)(7,"div",4),o.nrm(8,"ion-img",5),o.k0s(),o.DNE(9,c,2,3,"div",6),o.k0s()),2&r&&(o.Y8G("translucent",!0),o.R7$(6),o.Y8G("fullscreen",!0),o.R7$(2),o.Y8G("src","/assets/img/department.png"),o.R7$(),o.Y8G("ngForOf",f.users))},dependencies:[u.Sq,n.QW,n.W9,n.eU,n.KW,n.BC,n.ai,n.el,l.K]}),a})()}];let P=(()=>{var e;class a{}return(e=a).\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[m.iI.forChild(S),m.iI]}),a})();var k=t(5553);let y=(()=>{var e;class a{}return(e=a).\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[u.MD,d.YN,n.bv,P,k.h]}),a})()},9579:(W,g,t)=>{t.d(g,{T:()=>m});var u=t(467),d=t(4438),n=t(1075);let m=(()=>{var o;class h{constructor(s,l,c){this.loadingController=s,this.toastController=l,this.alertController=c}showSpinner(s="Loading...."){var l=this;return(0,u.A)(function*(){yield(yield l.loadingController.create({message:s,mode:"ios",spinner:"circular",backdropDismiss:!1,cssClass:"custom-class",duration:0})).present()})()}hideSpinner(){var s=this;return(0,u.A)(function*(){yield s.loadingController.dismiss()})()}showToast(s,l=2e3){var c=this;return(0,u.A)(function*(){yield(yield c.toastController.create({message:s,duration:l,position:"bottom"})).present()})()}showAlert(s,l,c="OK"){var v=this;return(0,u.A)(function*(){yield(yield v.alertController.create({header:s,mode:"ios",message:l,buttons:[c]})).present()})()}}return(o=h).\u0275fac=function(s){return new(s||o)(d.KVO(n.Xi),d.KVO(n.K_),d.KVO(n.hG))},o.\u0275prov=d.jDH({token:o,factory:o.\u0275fac,providedIn:"root"}),h})()}}]);