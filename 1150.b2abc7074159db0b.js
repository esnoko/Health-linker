"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1150],{1150:(S,d,l)=>{l.r(d),l.d(d,{AddFamilyPageModule:()=>P});var u=l(177),i=l(4341),a=l(1075),m=l(9591),c=l(8032),f=l.n(c),e=l(4438),h=l(4163),g=l(9579),F=l(1473);function y(o,r){if(1&o&&(e.j41(0,"ion-select-option",18),e.EFF(1),e.k0s()),2&o){const n=r.$implicit;e.Y8G("value",n),e.R7$(),e.SpI(" ",n,"")}}const v=[{path:"",component:(()=>{var o;class r{constructor(t,s,p,N){this.fb=t,this.firestore=s,this.utils=p,this._router=N,this.familyRelationships=["Parent","Child","Sibling","Grandparent","Grandchild","Aunt","Uncle","Cousin","Niece","Nephew","Spouse","Partner","In-law"],this.form=this.fb.group({FullNames:["",i.k0.required],IDNo:["",i.k0.required],PhoneNumber:["",i.k0.required],Relationship:[""],Gender:[""],Age:["",i.k0.required],CreatedBy:[""],Type:["Cleint"]})}ngOnInit(){const t=localStorage.getItem("hUser");this.user=t,this.uid=localStorage.getItem("hUserId"),console.log(this.user),this.form.patchValue({CreatedBy:this.uid})}onSubmit(){console.log(this.form.value),this.form.valid?(this.utils.showSpinner(),this.firestore.saveData("Users",this.form.value).then(t=>{this.utils.hideSpinner(),console.log(t),f().fire("Succesfull Saved!","success"),this._router.navigateByUrl("/client/home/family")}).catch(t=>{this.utils.hideSpinner(),f().fire("Oops!",t,"error")})):this.form.markAllAsTouched()}}return(o=r).\u0275fac=function(t){return new(t||o)(e.rXU(i.ok),e.rXU(h.B),e.rXU(g.T),e.rXU(m.Ix))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-add-family"]],decls:30,vars:6,consts:[["color","primary"],["slot","start"],["defaultHref","/home"],[1,"p-2"],[1,"text-center","text-2xl","font-semibold","text-gray-300"],[1,"space-y-3",3,"ngSubmit","formGroup"],["controlName","FullNames","label","Full Names",3,"form"],["controlName","IDNo","label","ID Number",3,"form"],["controlName","PhoneNumber","label","Phone Number",3,"form"],[1,"w-full","flex","flex-col"],[1,"font-bold","text-lg","text-red-300"],["formControlName","Gender","mode","ios","placeholder","Select Gender",1,"px-2","border","rounded-lg","w-full"],["c","","value","Male"],["value","Female"],["formControlName","Relationship","mode","ios","placeholder","Select Relationship",1,"px-2","border","rounded-lg","w-full"],[3,"value",4,"ngFor","ngForOf"],["controlName","Age","label","Age","type","number",3,"form"],["block","","color","primary","type","submit",1,"w-full","py-5"],[3,"value"]],template:function(t,s){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",0)(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Add Family"),e.k0s()()(),e.j41(6,"ion-content")(7,"div",3)(8,"p",4),e.EFF(9,"Details of Family Member"),e.k0s(),e.j41(10,"form",5),e.bIt("ngSubmit",function(){return s.onSubmit()}),e.nrm(11,"app-input",6)(12,"app-input",7)(13,"app-input",8),e.j41(14,"div",9)(15,"ion-label",10),e.EFF(16,"Gender"),e.k0s(),e.j41(17,"ion-select",11)(18,"ion-select-option",12),e.EFF(19,"Male"),e.k0s(),e.j41(20,"ion-select-option",13),e.EFF(21,"Female"),e.k0s()()(),e.j41(22,"div",9)(23,"ion-label",10),e.EFF(24,"Relationship"),e.k0s(),e.j41(25,"ion-select",14),e.DNE(26,y,2,2,"ion-select-option",15),e.k0s()(),e.nrm(27,"app-input",16),e.j41(28,"ion-button",17),e.EFF(29," save member "),e.k0s()()()()),2&t&&(e.R7$(10),e.Y8G("formGroup",s.form),e.R7$(),e.Y8G("form",s.form),e.R7$(),e.Y8G("form",s.form),e.R7$(),e.Y8G("form",s.form),e.R7$(13),e.Y8G("ngForOf",s.familyRelationships),e.R7$(),e.Y8G("form",s.form))},dependencies:[u.Sq,i.qT,i.BC,i.cb,a.Jm,a.QW,a.W9,a.eU,a.he,a.Nm,a.Ip,a.BC,a.ai,a.Je,a.el,i.j4,i.JD,F.S]}),r})()}];let b=(()=>{var o;class r{}return(o=r).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[m.iI.forChild(v),m.iI]}),r})();var A=l(5553);let P=(()=>{var o;class r{}return(o=r).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[u.MD,i.YN,a.bv,b,i.X1,A.h]}),r})()}}]);