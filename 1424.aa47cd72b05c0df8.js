"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1424],{1424:(L,u,e)=>{e.r(u),e.d(u,{LoginPageModule:()=>b});var m=e(177),i=e(4341),g=e(1075),s=e(9591),t=e(4438),d=e(3100),c=e(1473),f=e(7959);const h=[{path:"",component:(()=>{var o;class l{constructor(n,r){this.fb=n,this.afAuth=r,this.loginForm=this.fb.group({email:["",[i.k0.required,i.k0.email]],password:["",[i.k0.required]]})}ngOnInit(){}googleSignIn(){this.afAuth.logininWithgoogle()}SignIn(){this.loginForm.valid?this.afAuth.signInWithEmail(this.loginForm.value):this.loginForm.markAllAsTouched()}}return(o=l).\u0275fac=function(n){return new(n||o)(t.rXU(i.ok),t.rXU(d.u))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-login"]],decls:26,vars:4,consts:[[1,"flex","justify-center","w-full","h-[100vh]","items-center","relative"],[1,"w-full","px-4"],[1,"h-28",3,"src"],[1,"font-extrabold","italic","text-2xl","text-center","text-health_green"],[3,"formGroup"],["type","email","controlName","email","label","Email",3,"form"],["type","password","controlName","password","label","Password",3,"form"],["btnText","Sign In",3,"click"],["routerLink","/reset-password",1,"text-health_green","text-right","font-semibold","mb-2"],[1,"w-full","justify-center","items-center","flex","flex-col"],[1,"text-sm","text-gray-600"],[3,"click"],["src","/assets/img/google.webp","alt","","srcset","",1,"w-10","h-10"],[1,"text-center","text-gray-700","font-medium"],["routerLink","/register",1,"text-red-400","font-semibold"],[1,"absolute","top-[-33%]","left-[-40%]","rounded-full","shadow","w-full","h-[50vh]","bg-health_green","bg-opacity-50"],[1,"w-11/12","m-auto","h-full","bg","rounded-full"],[1,"fixed","bottom-[-45%]","rounded-full","shadow","w-[120%]","h-[56vh]","bg-health_green","bg-opacity-50"],[1,"w-11/12","m-auto","h-full","bg-red-400","rounded-full"]],template:function(n,r){1&n&&(t.j41(0,"ion-content")(1,"div",0)(2,"div",1),t.nrm(3,"ion-img",2),t.j41(4,"p",3),t.EFF(5,"Health Linker's"),t.k0s(),t.j41(6,"form",4),t.nrm(7,"app-input",5)(8,"app-input",6),t.j41(9,"app-button",7),t.bIt("click",function(){return r.SignIn()}),t.k0s(),t.j41(10,"p",8),t.EFF(11,"Forgot Pasword?"),t.k0s()(),t.j41(12,"div",9)(13,"span",10),t.EFF(14,"Sign In With"),t.k0s(),t.j41(15,"button",11),t.bIt("click",function(){return r.googleSignIn()}),t.nrm(16,"img",12),t.k0s()(),t.j41(17,"div")(18,"p",13),t.EFF(19,"Don't have Account ? "),t.j41(20,"span",14),t.EFF(21,"Register"),t.k0s()()()(),t.j41(22,"div",15),t.nrm(23,"div",16),t.k0s(),t.j41(24,"div",17),t.nrm(25,"div",18),t.k0s()()()),2&n&&(t.R7$(3),t.Y8G("src","/assets/img/HLogo.png"),t.R7$(3),t.Y8G("formGroup",r.loginForm),t.R7$(),t.Y8G("form",r.loginForm),t.R7$(),t.Y8G("form",r.loginForm))},dependencies:[i.qT,i.cb,g.W9,g.KW,g.N7,s.Wk,i.j4,c.S,f.Q],styles:[".bg[_ngcontent-%COMP%]{background-image:linear-gradient(135deg,#fff6b7 10%,#f6416c)}"]}),l})()}];let p=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[s.iI.forChild(h),s.iI]}),l})();var v=e(5553);let b=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[m.MD,i.YN,g.bv,p,i.X1,v.h]}),l})()}}]);