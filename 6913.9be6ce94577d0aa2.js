"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6913],{6913:(h,l,e)=>{e.r(l),e.d(l,{HospitalAppointmentsPageModule:()=>A});var p=e(177),m=e(4341),a=e(1075),r=e(9591),t=e(4438),d=e(4163),c=e(8473);function u(n,i){if(1&n&&(t.j41(0,"div"),t.nrm(1,"app-linear-card",4),t.nI1(2,"date"),t.k0s()),2&n){const s=i.$implicit,o=t.XpG();t.R7$(),t.FS9("header",s.clientNames),t.FS9("subHeader",t.i5U(2,3,s.date.toDate()," EEE, dd - MMM -YYYY")),t.Y8G("image",o.image)}}const g=[{path:"",component:(()=>{var n;class i{constructor(o){this.firestore=o,this.image="/assets/img/appoi.png"}ngOnInit(){this.firestore.read("Appointments").valueChanges().subscribe(o=>this.Appointments=o)}}return(n=i).\u0275fac=function(o){return new(o||n)(t.rXU(d.B))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-hospital-appointments"]],decls:9,vars:1,consts:[["color","primary"],["slot","start"],[1,"p-2"],[4,"ngFor","ngForOf"],[3,"image","header","subHeader"]],template:function(o,H){1&o&&(t.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t.nrm(3,"ion-back-button"),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"Booked Appointments"),t.k0s()()(),t.j41(6,"ion-content")(7,"div",2),t.DNE(8,u,3,6,"div",3),t.k0s()()),2&o&&(t.R7$(8),t.Y8G("ngForOf",H.Appointments))},dependencies:[p.Sq,a.QW,a.W9,a.eU,a.BC,a.ai,a.el,c.f,p.vh]}),i})()}];let f=(()=>{var n;class i{}return(n=i).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[r.iI.forChild(g),r.iI]}),i})();var v=e(5553);let A=(()=>{var n;class i{}return(n=i).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[p.MD,m.YN,a.bv,f,v.h]}),i})()}}]);